import uuid
import hashlib
import validators
from random import randint, random
from db import exists,save

def hash_url(url):
    salt = uuid.uuid4().hex
    return hashlib.sha256(salt.encode() + url.encode()).hexdigest() + ':' + salt

def check_hash(hashed_url, url):
    password, salt = hashed_url.split(':')
    return password == hashlib.sha256(salt.encode() + url.encode()).hexdigest

def shorten_url(hashed_url):
    i = randint(5,6)
    j = i
    n = 0
    short_url = hashed_url[n:i]

    while(exists(short_url)):
        j += i
        n += i
        if j > len(hashed_url):
            return short_url.upper()
        short_url = hashed_url[n:j]
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
