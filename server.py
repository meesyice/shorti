from flask import Flask, render_template, request, redirect, url_for
from shortner import shorten
from db import init

app = Flask(__name__)

@app.route('/')
@app.route('/home/')
def home():
    return render_template('home.html')

@app.route('/result/', methods=['GET', 'POST'])
def result():
    if request.method == 'POST':
        print(request.form.get('url'))
        x = shorten(request.form.get('url'))
        return render_template('result.html',short_url=x)
    elif request.method == 'GET':
        return redirect(url_for('home'))

@app.route('/urlshortner/')
def urlshortner():
    url = request.args.get('url')
    data = shorten(url)
    return render_template('result.html', data=data)

if __name__ == '__main__':
    init()
    app.run(debug=True, host='0.0.0.0', port=80)
