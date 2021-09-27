from flask import Flask, render_template, request, redirect, url_for
from shortner import shorten
from db import init, get_url

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

@app.route('/<shorti>')
def redir(shorti):
    url = get_url(shorti)
    if not url:
        return render_template('error.html')
    else:
        if url.startswith("http"):
            return redirect(url)
        else:
            return redirect('http://' + url)

@app.route('/.well-known/pki-validation/93FE94C8A081732F4626DDE330BA7D18.txt')
def ssl():
    return '''
    D11E4FE1BF9C546D39BF2AAEF4AFF33875DA2158071F74916AF15977DD0818AF
    comodoca.com
    45ea5bb18aee4a4
    '''

if __name__ == '__main__':
    init()
    app.run(debug=True, host='0.0.0.0', port=80)
