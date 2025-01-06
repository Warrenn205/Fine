from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS

app = Flask(__name__, static_folder="fine/build", static_url_path="")
CORS(app, origins=["http://localhost:3000"]) 

# Serve React build index.html
@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

# API endpoint example
@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({"message": "Hello from Flask!"})

@app.route('/api/example', methods=['POST'])
def example_api():
    data = request.json
    return jsonify({"response": f"Received: {data}"})

# Redirect any unknown route to React app (supports React Router)
@app.errorhandler(404)
def not_found(_):
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
