# **SPOT-AI Music Recommendation Bot**

## **What It Does:**
SPOT-AI is a bot that can recommend music (songs, artists, etc.) to users using a simple prompt-and-answer format. However, because we are using OpenAI's GPT-3.5 as well as Spotify's API in our project, the bot is capable of looking through Spotify's database to answer general music questions (i.e. How many albums does Drake have?). 

## **How to Use:**
**To use SPOT-AI via the Django application:**
1. Download the requirements.txt file located in the recommender folder.
> [NOTE]
> We needed to download an older version of LangChain in order for the PALChain import to work.
2. Run the following code in the same level as `manage.py`:
```
 python manage.py migrate
 python manage.py runserver
 ```
3. Click on the server url that appears in your terminal.
3. Type in /SpotAI/ in the url of the application and hit Enter.

It should look like this:
![The url of the application should say ###.#.#.#:8000/SpotAI/](https://github.com/ahirobe/AImusicQA/assets/110489102/5b594556-f643-403e-b354-68f357286bb2)
4. In the Content box, enter a prompt in the json format, click POST, and an output should appear after a few seconds!

example json:
```
{
	"text": "Your prompt!" 
}
```
> You can end the server with Ctrl + C / Ctrl + BREAK on Windows or Command + BREAK on Mac

**To use SPOT-AI via the python file:**
1. Navigate to the `chains.py` file.
2. Add this to the end of the code, including your prompt inside of it:
```
if __name__ == '__main__':
    print(recommender('prompt'))
```
3. Run the file.
> After the prompt goes through the LangChain, your output should appear in the terminal!

## **Limitations and Workarounds:**
There are certain keywords that do not work when you try to submit it to the bot.
DO NOT USE:
- "recommend" (yes it's ironic, we know, but the GPT model won't let you ask for music recommendations directly)
    - Instead, use "name a song similar to..." or "

Furthermore, when requesting...
- track information, the limit is 50 at a time
- audio features, the limit is 100 at a time
- multiple artists, the limit is 50 at a time
> [NOTE] If you go over the limit, the bot will crash.

## **Made By:**
**The Valkyrie Vipers**
- Frontend Devs: Andi and Orlando
- Backend Devs: Om and Abby
- Instructor: Dhandeep


