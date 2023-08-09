FROM python:3.8.13-bullseye

ARG django_secret_key
ARG spotify_client_id
ARG spotify_client_secret
ARG openai_api_key

WORKDIR /realproject

COPY . .

RUN pip install --upgrade pip 
RUN pip install -r requirements.txt

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]