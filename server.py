from flask import Flask, render_template, request
from shortner import shorten
from db import init

app = Flask(__name__)

@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/urlshortner')
def urlshortner():
    url = request.args.get('city')
    res = shorten(url)
    return render_template('result.html', data=res)

if __name__ == '__main__':
    init()
    app.run(debug=True)
