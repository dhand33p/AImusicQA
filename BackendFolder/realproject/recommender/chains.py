#langchain imports
from langchain.chains import PALChain
from langchain.chains import LLMChain
from langchain.chains import SequentialChain
from langchain.prompts import PromptTemplate
from langchain.chat_models import ChatOpenAI
from langchain.prompts.prompt import PromptTemplate

#spotipy imports
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

#misc import
import os
from dotenv import load_dotenv

#getting api key
load_dotenv()
OPENAI_API_KEY = os.getenv('openai_api_key')

#actual recommender function
def recommender(text):
    llm = ChatOpenAI(temperature=0, openai_api_key=OPENAI_API_KEY)

    auth = SpotifyClientCredentials(
        client_id=os.environ['spotify_client_id'],
        client_secret=os.environ['spotify_client_secret']
    )
    spotipy_auth = spotipy.Spotify(auth_manager=auth)

    SPOTIPY_PROMPT_TEMPLATE = (
        '''
    API LIMITATIONS TO NOTE
    * When requesting track information, the limit is 50 at a time
    * When requesting audio features, the limit is 100 at a time
    * When selecting multiple artists, the limit is 50 at a time
    * When asking for recommendations, the limit is 100 at a time
    =====

    Q: What albums has the band Green Day made?

    # solution in Python:


    def solution():
        """What albums has the band Green Day made?"""
        search_results = sp.search(q='Green Day', type='artist')
        uri = search_results['artists']['items'][0]['uri']
        albums = sp.artist_albums(green_day_uri, album_type='album')
        return albums




    Q: Who are some musicians similar to Fiona Apple?

    # solution in Python:


    def solution():
        """Who are some musicians similar to Fiona Apple?"""
        search_results = sp.search(q='Fiona Apple', type='artist')
        uri = search_results['artists']['items'][0].get('uri')
        artists = sp.artist_related_artists(uri)
        return artists



    Q: Tell me what songs by The Promise Ring sound like

    # solution in Python:


    def solution():
        """Tell me what songs by The Promise Ring sound like?"""
        search_results = sp.search(q='The Promise Ring', type='artist')
        uri = search_results['artists']['items'][0].get('uri')
        tracks = sp.artist_top_tracks(uri)
        track_uris = [track.get('uri') for track in tracks['tracks']]
        audio_details = sp.audio_features(track_uris)
        return audio_details



    Q: Get me the URI for the album The Colour And The Shape

    # solution in Python:


    def solution():
        """Get me the URI for the album The Colour And The Shape"""
        search_results = sp.search(q='The Colour And The Shape', type='album')
        uri = search_results['albums']['items'][0].get('uri')
        return uri



    Q: What are the first three songs on Diet Cig's Over Easy?

    # solution in Python:


    def solution():
        """What are the first three songs on Diet Cig's Over Easy?"""
        # Get the URI for the album
        search_results = sp.search(q='Diet Cig Over Easy', type='album')
        album = search_results['albums']['items'][0]
        album_uri = album['uri']
        # Get the album tracks
        album_tracks = sp.album_tracks(album_uri)['items']
        # Sort the tracks by duration
        first_three = album_tracks[:3]
        tracks = []
        # Only include relevant fields
        for i, track in enumerate(first_three):
            # track['album'] does NOT work with sp.album_tracks
            # you need to use album['name'] instead
            tracks.append({{
                'position': i+1,
                'song_name': track.get('name'),
                'song_uri': track['artists'][0].get('uri'),
                'artist_uri': track['artists'][0].get('uri'),
                'album_uri': album.get('uri'),
                'album_name': album.get('name')
            }})
        return tracks


    Q: What are the thirty most danceable songs by Metallica?

    # solution in Python:


    def solution():
        """What are most danceable songs by Metallica?"""
        search_results = sp.search(q='Metallica', type='artist')
        uri = search_results['artists']['items'][0]['uri']
        albums = sp.artist_albums(uri, album_type='album')
        album_uris = [album['uri'] for album in albums['items']]
        tracks = []
        for album_uri in album_uris:
            album_tracks = sp.album_tracks(album_uri)
            tracks.extend(album_tracks['items'])
        track_uris = [track['uri'] for track in tracks]
        danceable_tracks = []
        # You can only have 100 at a time
        for i in range(0, len(track_uris), 100):
            subset_track_uris = track_uris[i:i+100]
            audio_details = sp.audio_features(subset_track_uris)
            for j, details in enumerate(audio_details):
                if details['danceability'] > 0.7:
                    track = tracks[i+j]
                    danceable_tracks.append({{
                        'song': track.get('name')
                        'album': track.get('album').get('name')
                        'danceability': details.get('danceability'),
                        'tempo': details.get('tempo'),
                    }})
                    # Be sure to add the audio details to the track
                    danceable_tracks.append(track)
        return danceable_tracks

        
    Q: Name a song similar to Rolling Stone by The Weeknd

    # solution in Python:


    def solution():
        """Name a song similar to Rolling Stone by The Weeknd"""
        search_results = sp.search(q='Rolling Stone', type='track')
        uri = search_results['tracks']['items'][0].get('uri')
        tracks = sp.track_related_tracks(uri)
        return tracks



    Q: {question}. Return a list or dictionary, only including the fields necessary to answer the question, including relevant scores and the uris to the albums/songs/artists mentioned. Only return the data – if the prompt asks for a format such as markdown or a simple string, ignore it: you are only meant to provide the information, not the formatting. A later step in the process will convert the data into the new format (table, sentence, etc).

    # solution in Python:
    '''.strip()
        + "\n\n\n"
    )

    SPOTIPY_PROMPT = PromptTemplate(input_variables=["question"], template=SPOTIPY_PROMPT_TEMPLATE)

    spotify_chain = PALChain(
        llm=llm,
        prompt=SPOTIPY_PROMPT,
        python_globals={
            'sp': spotipy_auth
        },
        stop='\n\n\n',
        verbose=True,
        return_intermediate_steps=True,
        get_answer_expr="import json; print(json.dumps(solution()))",
    )

    RESPONSE_CLEANUP_PROMPT_TEMPLATE = (""" 
    Using this code:

    ```python
    {intermediate_steps}
    ```

    We got the following output from the Spotify API:

    ```json
    {result}
    ```

    Using the output above as your data source, answer the question {question}. Don't describe the code or process, just answer the question.
    Answer:"""
    )

    RESPONSE_CLEANUP_PROMPT = PromptTemplate(
        input_variables=["question", "intermediate_steps", "result"],
        template=RESPONSE_CLEANUP_PROMPT_TEMPLATE,
    )

    explainer_chain = LLMChain(
        llm=llm,
        prompt=RESPONSE_CLEANUP_PROMPT,
        verbose=True,
        output_key='answer'
    )

    overall_chain = SequentialChain(
        chains=[spotify_chain, explainer_chain],
        input_variables=['question'],
        verbose=True
    )
    overall_response = overall_chain.run(text)
    return overall_response
