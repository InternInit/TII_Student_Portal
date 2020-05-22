from flask import Blueprint, jsonify, request

main = Blueprint("main",__name__)

@main.route("/test_get")
def test_get():
    testList = []
    return jsonify({"testGet": testList})

@main.route("/test_post", methods=["POST"])
def test_post():
    data = request.get_json()
    return jsonify(data)
