from flask import Flask, render_template, request, session, redirect, url_for, jsonify, json, g, send_from_directory
from flask_cors import CORS
import sqlite3 as sql
import torch

app = Flask(__name__, static_folder="build", static_url_path="") 
CORS(app)

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({"message": "Hello from Flask!"})

@app.route('/api/example', methods=['POST'])
def example_api():
    data = request.json
    return jsonify({"response": f"Received: {data}"})

@app.errorhandler(404)
def not_found(_):
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
