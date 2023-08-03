from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Text

from recommender.recommend import *
from recommender.chains import * 

# says that this function can do handle POST requests
@api_view(["POST"])
def summarize_view(request):
	
	# handle data inputs
	if request.method == "POST":
		
		# get the data and provide No value if not given
		text = request.data.get("text", None)
		
		# add it to the database and save
		new_addition = Text(text=text)
		new_addition.save()

		# pull the text and summarize it
		summary = summarize(new_addition.text)
		
		# return answer & status 200 (meaning everything worked!) 
		return Response(summary, status=200)
	
# says that this function can do handle POST requests
@api_view(["POST"])
def recommend_song(request):
	
	# handle data inputs
	if request.method == "POST":
		
		# get the data and provide No value if not given
		text = request.data.get("text", None)
		
		# add it to the database and save
		new_addition = Text(text=text)
		new_addition.save()

		# pull the text and summarize it
		recommendation = recommender(new_addition.text)
		
		# return answer & status 200 (meaning everything worked!) 
		return Response(recommendation, status=200)
		