# **SPOT-AI Music Recommendation Bot**

## **What It Does:**
SPOT-AI is a bot that can recommend music (songs, artists, etc.) to users using a simple prompt-and-answer format. However, because we are using OpenAI's GPT-3.5 as well as Spotify's API in our project, the bot is capable of looking through Spotify's database to answer general music questions (i.e. How many albums does Drake have?). 

## **How to Use:**
To use SPOT-AI via the Django application:
1. Download the requirements.txt file located in the recommender folder.
> [NOTE]
> We needed to download an older version of LangChain in order for the PALChain import to work.
2. Run the following code in the same level as `manage.py`:
```
 python manage.py migrate
 python manage.py runserver
 ```
3. Type in /SpotAI/ in the url of the application
> It should look like this:


## **Limitations and Workarounds:**

## **Made By:**
**The Valkyrie Vipers**
- Frontend Devs: Andi and Orlando
- Backend Devs: Om and Abby
- Instructor: Dhandeep


