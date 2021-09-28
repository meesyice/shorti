from shorti import app
from db import init

if __name__ == "__main__":
    init()
    app.run()