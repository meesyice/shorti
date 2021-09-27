import sqlite3
from datetime import datetime

def connect():
    db = sqlite3.connect('andy.db')
    dbcursor = db.cursor()
    return (db,dbcursor)

def init():
    db, dbcursor = connect()
    dbcursor.execute(''' 
        CREATE TABLE IF NOT EXISTS URLs (
            Short_url TEXT UNIQUE NOT NULL,
            URL TEXT NOT NULL,
            Hash TEXT NOT NULL,
            Clicks INTEGER NOT NULL,
            Creation_Date TEXT,
            Last_Hit TEXT,
            PRIMARY KEY (Short_url)
        )
    ''')

def exists(short_url):
    db, dbcursor = connect()
    x = dbcursor.execute('''
        SELECT Short_url FROM URLs WHERE Short_url = :shrturl
    ''', {'shrturl':short_url}).fetchall()
    return len(x) > 0

def save(short_url, url, hashed_url):
    db, dbcursor = connect()
    date = datetime.now().strftime('%c')
    dbcursor.execute('''
    INSERT INTO URLs (Short_url, URL, Hash, Clicks, Creation_Date)
    VALUES ( ?, ?, ?, 0, ?);
    ''',(short_url, url, hashed_url, date))
    db.commit()