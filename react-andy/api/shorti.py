from flask import Flask,request, redirect, jsonify, make_response
from flask_cors import CORS
from shortner import shorten, valid
from db import init, get_url

app = Flask(__name__)
cors = CORS(app)

@app.route('/api/shortener/', methods=['POST', 'OPTIONS'])
def shortner():
    if request.method == 'OPTIONS':
        return _build_cors_preflight_response()
    elif request.method == 'POST':
        urldata = request.get_json(force=True)
        if not urldata:
            return _corsify_actual_response(jsonify('invalid-data-format')), 400
        else:
            url = urldata['url']
        if valid(url):
            shorti = shorten(url)
            return _corsify_actual_response(jsonify(shorti)) , 201
        else:
            return _corsify_actual_response(jsonify('invalid-url')), 400
    else:
        return _corsify_actual_response(jsonify('unkown-error')), 400

@app.route('/api/url/<shorti>', methods=['GET', 'OPTIONS'])
def redir(shorti):
    if request.method == 'OPTIONS':
        return _build_cors_preflight_response()
    elif request.method == 'GET': 
        url = get_url(shorti)
        if not url:
            return _corsify_actual_response(jsonify('invalid-url')), 400
        else:
            if url.startswith("http"):
                return _corsify_actual_response(redirect(url, 301))
            else:
                return _corsify_actual_response(redirect('http://' + url, 301))
    else:
        return _corsify_actual_response(jsonify('unkown-error')), 400


def _build_cors_preflight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response

def _corsify_actual_response(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

if __name__ == '__main__':
    init()
    app.run(debug=True, host='0.0.0.0', port=80)
