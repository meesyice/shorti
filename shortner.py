import uuid
import hashlib

def hash_url(url):
    salt = uuid.uuid4().hex
    return hashlib.sha256(salt.encode() + url.encode()).hexdigest() + ':' + salt

def check_hash(hashed_url, url):
    password, salt = hashed_url.split(':')
    return password == hashlib.sha256(salt.encode() + url.encode()).hexdigest

def shorten_url(hashed_url):
    short_url = hashed_url[0:5]
    if exists(short_url):
        short_url = shorten_url(hashed_url[5:])
        save(short_url,hashed_url)
        return short_url
    else:
        return short_url

def exists(short_url):
    return

def save(short_url,hashed_url):
    return
