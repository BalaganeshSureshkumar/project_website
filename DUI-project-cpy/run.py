import os
import json

from flask import Flask, g, json, render_template, request

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/cart')
def cart():
    return render_template('cart.html')

@app.route('/signin')
def signin():
    return render_template('signin.html')

@app.route('/signup')
def signup():
    return render_template('signup.html')

@app.route('/dinein')
def dinein():
    return render_template('dinein.html')

@app.route('/menu')
def menu():
    
    with open('data/data.txt','r') as app_data:
        bike_data = app_data.read()
        with open('temp.json', 'w') as temp:
            temp.write('{"data": [' + str(bike_data) + ']}')
            temp.close()
        app_data.close()
    
    temp_data = open('temp.json', 'rb')
    bike_data = json.load(temp_data)
    temp_data.close()
    os.remove('temp.json')

    return render_template('menu.html', data = bike_data)


if __name__ == '__main__':
    app.run(host='localhost', port=8080, debug=True)
