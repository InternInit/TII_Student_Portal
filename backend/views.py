from flask import Blueprint, jsonify

main = Blueprint("main",__name__)

@main.route("/test_get")
def test_get():
    testList = []
    return jsonify({"test": testList})
