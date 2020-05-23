from flask import Blueprint, jsonify, request
import requests
import json

main = Blueprint("main",__name__)

testUrl = "https://jzvyvnvxld.execute-api.us-east-1.amazonaws.com/beta/"

@main.route("/get_user_data")
def get_user_data():
    return jsonify({"UserData": {}})


@main.route("/update_user_data", methods=["POST"])
def update_user_data():
    body = request.get_data().decode("utf-8")
    body = body.split("#")

    info = json.loads(body[0])
    origin = str(body[1])
    info["origin"] = origin
    print(info)
    req = requests.post(testUrl, json = info)
    return jsonify(req.text)
