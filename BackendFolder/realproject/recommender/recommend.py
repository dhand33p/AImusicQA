# import library
import openai

import os
from dotenv import load_dotenv, find_dotenv

# finds and loads the .env file
load_dotenv(find_dotenv())

# call the variable from the loaded file
openai.api_key = os.environ.get("openai_api_key")

def summarize(text):
	
	# create prompt
	prompt = "Reword the following content using as many words as possible: \n"
	prompt += text
	
	# ping model and generate a response
	response = openai.Completion.create(
			engine = "text-davinci-003",
			prompt = prompt,
	)
	
	# clean up response to just the actual String value and return 
	answer = response["choices"][0]["text"].strip()
	return answer

def recommend(text):
	
	# create prompt
	prompt = "Recommend a song similar to the following song: \n"
	prompt += text
	
	# ping model and generate a response
	response = openai.Completion.create(
			engine = "text-davinci-003",
			prompt = prompt,
	)
	
	# clean up response to just the actual String value and return 
	answer = response["choices"][0]["text"].strip()
	return answer

