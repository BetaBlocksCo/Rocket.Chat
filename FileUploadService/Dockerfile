FROM python:3.8

WORKDIR /usr/src/app

COPY fileServer.py .
COPY requirements.txt .
COPY .env .

RUN pip install -r requirements.txt

CMD [ "python", "/usr/src/app/fileServer.py" ]
