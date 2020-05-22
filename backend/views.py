from flask import Blueprint, jsonify, request

main = Blueprint("main",__name__)

@main.route("/get_user_data")
def get_user_data():
    return jsonify({"UserData": {}})


@main.route("/update_user_data", methods=["POST"])
def update_user_data():
    data = request.get_json()
    return jsonify(data)
