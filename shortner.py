import uuid
import hashlib
import validators
from db import exists,save

def hash_url(url):
    salt = uuid.uuid4().hex
    return hashlib.sha256(salt.encode() + url.encode()).hexdigest() + ':' + salt

def check_hash(hashed_url, url):
    password, salt = hashed_url.split(':')
    return password == hashlib.sha256(salt.encode() + url.encode()).hexdigest

def shorten_url(hashed_url):
    n = 5
    short_url = hashed_url[0:n]

    while(exists(short_url)):
        i = n
        n += 5
        short_url = hashed_url[i:n]
    return short_url

def shorten(url):
    hashed_url = hash_url(url)
    short_url = shorten_url(hashed_url)
    save(short_url, url, hashed_url)
    return ("shorti.xyz/" + short_url)

def valid(url):
    if not validators.domain(url):
        return False
    else:
        return True