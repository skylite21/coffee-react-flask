from flask import Flask, redirect, request, url_for, jsonify
from flask import render_template
# from flask import send_from_directory
# import logging
# from logging.handlers import RotatingFileHandler
from wdb.ext import WdbMiddleware

app = Flask(__name__)
app.debug = True
app.wsgi_app = WdbMiddleware(app.wsgi_app)

# app.config['DEBUG'] = True
# http://www.compjour.org/lessons/flask-single-page/hello-tiny-flask-app/
# @app.route('/templates/js_min/<path:filename>')
# def serve_static(filename):
#     root_dir = os.path.dirname(os.getcwd())
#     return send_from_directory(os.path.join(root_dir, 'templates', 'js_min'), filename)

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               'favicon.ico', 
							   mimetype='image/vnd.microsoft.icon')

@app.route("/")
def hello():
    print("hello")

    return render_template('index.html')


def check_user(user, password):
    return True


@app.route("/login", methods=['POST'])
def login():
    user = request.args.get('name')
    password = request.args.get('password')
    check_user(user, password)
    user = "skylite"
    # sign the userhash!!
    # send_from_directory('static', "js_min/pages/page_home.js")
    return jsonify(user=user, userhash="asdas2")


@app.route("/user")
def user_page():
    return render_template('user.html')


if __name__ == "__main__":
    app.run(host='127.0.0.1', use_debugger=False)
