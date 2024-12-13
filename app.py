from flask import Flask, render_template, request, session, redirect, url_for, jsonify, json, g
import sqlite3 as sql
import torch

app = Flask(__name__)


if __name__ == '__main__':
    app.run(host="0.0.0.0",debug=True)