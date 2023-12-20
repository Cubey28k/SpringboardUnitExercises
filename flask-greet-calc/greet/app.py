from flask import Flask

app = Flask(__name__)

"""returns a welcome message"""
@app.route('/welcome')
def welcome():
    return"welcome"

"""returns a welcome home message"""
@app.route('/welcome/home')
def welcome_home():
    return"welcome home"

"""returns a welcome back message"""
@app.route('/welcome/back')
def welcome_back():
    return"welcome back"