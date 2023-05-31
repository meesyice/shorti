FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 4444

VOLUME [ "/app/data" ]

ENV FLASK_APP=shorti.py

CMD ["flask", "run", "--host=0.0.0.0"]

