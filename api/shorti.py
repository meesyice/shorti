from cors import _build_cors_preflight_response, _corsify_actual_response
from flask import Flask, jsonify, redirect, request
from shortner import shorten, valid
from flask_cors import CORS
from db import get_url, get_clicks, exists

app = Flask(__name__)
cors = CORS(app)


@app.route('/')
def landing():
    return redirect('http://shorti.xyz')


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
            return _corsify_actual_response(jsonify(shorti)), 201
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
                return _corsify_actual_response(jsonify(url)), 200
            else:
                return _corsify_actual_response(jsonify('http://' + url)), 200
    else:
        return _corsify_actual_response(jsonify('unkown-error')), 400


@app.route('/api/clicks/', methods=['POST', 'OPTIONS'])
def clicks():
    if request.method == 'OPTIONS':
        return _build_cors_preflight_response()
    elif request.method == 'POST':
        shortidata = request.get_json(force=True)
        if not shortidata:
            return _corsify_actual_response(jsonify('invalid-data-format')), 400
        elif valid(shortidata['shorti']):
            shorti = shortidata['shorti']
            if '://' in shorti:
                http, shorti = shorti.split('://')
            padding, shorti = shorti.split('/')
        else:
            return _corsify_actual_response(jsonify('invalid-url')), 400

        if exists(shorti):
            return _corsify_actual_response(jsonify(get_clicks(shorti))), 201
        else:
            return _corsify_actual_response(jsonify('invalid-shorti')), 400
    else:
        return _corsify_actual_response(jsonify('unkown-error')), 400


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=80)
