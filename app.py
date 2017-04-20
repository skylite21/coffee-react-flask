from flask import Flask
from flask import render_template
from flask import send_from_directory
import logging
from logging.handlers import RotatingFileHandler

app = Flask(__name__)
app.config['DEBUG'] = True
# http://www.compjour.org/lessons/flask-single-page/hello-tiny-flask-app/
# @app.route('/templates/js_min/<path:filename>')
# def serve_static(filename):
#     root_dir = os.path.dirname(os.getcwd())
#     return send_from_directory(os.path.join(root_dir, 'templates', 'js_min'), filename)

@app.route("/")
def hello():
    print("hello")
    return render_template('index.html')

@app.route("/user")
def betegszabi():
    return render_template('user.html')

if __name__ == "__main__":
    app.run()
