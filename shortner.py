import uuid
import hashlib

def hash_url(url):
    salt = uuid.uuid4().hex
    return hashlib.sha256(salt.encode() + url.encode()).hexdigest() + ':' + salt

def check_hash(hashed_url, url):
    password, salt = hashed_url.split(':')
    return password == hashlib.sha256(salt.encode() + url.encode()).hexdigest

def short_url(hashed_url):
    shorturl = hashed_url[0:5]
    if exists(shorturl):
        shorturl = short_url(hashed_url[5:])
        save(shorturl,hashed_url)
        return shorturl
    else:
        return shorturl

def exists(shorturl):
    return

def save(shorturl,hashed_url):
    return
