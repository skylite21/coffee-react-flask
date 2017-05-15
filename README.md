# coffee-react-flask

This is a flask based web app which can be a starting point for any kind of web app. If you want to use react with coffee, try this out. If you dont like it, dont :)
I stopped working on this, and switched to flask with angular.

# Installing

Install python3, pip, virtualenv. Create a virtualenv, activate it.
do a pip install -r requirements.txt

Install npm, gulp, do npm install.

# Running

Do gulp watch, and python app.py inside the directory.

Edit only static/coffee files, gulp will create the minified js from that.

# Debug
````
  pip install wdb.server 

````
globally, then run it in virtualenv:
````
  wdb.server.py &

````
  wdb will popup if debugger is active

