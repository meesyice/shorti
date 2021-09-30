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
    db.commit()

def exists(short_url):
    db, dbcursor = connect()
    x = dbcursor.execute('''
        SELECT Short_url FROM URLs WHERE Short_url = :shrturl
    ''', {'shrturl':short_url}).fetchall()
    return len(x) > 0

def save(short_url, url, hashed_url):
    date = datetime.now().strftime('%c')
    db, dbcursor = connect()
    dbcursor.execute('''
    INSERT INTO URLs (Short_url, URL, Hash, Clicks, Creation_Date)
    VALUES ( ?, ?, ?, 0, ?);
    ''',(short_url, url, hashed_url, date))
    db.commit()

def get_url(short_url):
    date = datetime.now().strftime('%c')
    db, dbcursor = connect()
    if not exists(short_url):
        return None
    dbcursor.execute('''
        UPDATE URLs SET CLICKS = CLICKS + 1 WHERE Short_url = :shrturl
    ''', {'shrturl':short_url})
    dbcursor.execute('''
        UPDATE URLs SET Last_Hit = :date WHERE Short_url = :shrturl
    ''', {'shrturl':short_url, 'date':date}) 
    fetch = dbcursor.execute('''
                SELECT URL FROM URLs WHERE Short_url = :shrturl
                ''', {'shrturl':short_url}).fetchall()
    db.commit()
    return fetch[0][0]
