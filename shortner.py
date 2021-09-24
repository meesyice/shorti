import uuid
import hashlib

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

    save(short_url,hashed_url)
    return short_url

def shorten(url):
    return "andy.com/" + shorten_url(hash_url(url))

def exists(short_url):
    return

def save(short_url,hashed_url):
    return
