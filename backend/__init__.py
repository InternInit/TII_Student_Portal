from flask import Blueprint, Flask, jsonify, request, redirect, make_response
import requests
import json
import os
import base64

app = Flask(__name__)

app.config.from_json("./config/network-config.json")

baseApiUrl = app.config["API_ENDPOINT"]
cacheApiUrl = baseApiUrl + "cache"
uploadApiUrl = baseApiUrl + "upload"
businessApiUrl = baseApiUrl + "business"
profileApiUrl = baseApiUrl + "profile"

@app.route("/api/")
def root():
    return "root"

@app.route("/api/get_user_data", methods=["POST"])
def get_user_data():
    print(cacheApiUrl)
    page = request.get_data().decode("utf-8")
    token = request.headers.get("Authorization")
    params={"page":page}
    req = requests.get(cacheApiUrl, headers = {"Authorization" : token}, params=params)
    return jsonify(req.text)


@app.route("/api/update_user_data", methods=["POST"])
def update_user_data():
    body = request.get_data().decode("utf-8")
    body = body.split("#")

    info = json.loads(body[0])
    origin = str(body[1])
    info["origin"] = origin

    try:
        submitFlag = str(body[2])
        info["submitFlag"] = submitFlag
    except:
        pass
    headers = request.headers
    print(type(request.headers.get("Authorization")), request.headers.get("Authorization"))
    #req = requests.post(apiUrl, headers=request.headers,data = info)
    req = requests.post(cacheApiUrl, headers = {"Authorization" : headers.get("Authorization"), "Completion-State" : headers.get("Completion-State"), "Completion-Checklist" : headers.get("Completion-Checklist"), "Version": headers.get("Version"), "Checked-Industries": headers.get("Checked-Industries")}, json = info)
    return req.text

@app.route("/api/upload_user_files", methods=["POST"])
def upload_user_files():
    req = request.files
    headers = request.headers

    data = req.get("file")
    res = requests.post(url=uploadApiUrl,
                    data=data,
                    headers = {"Content-Type" : "application/octet-stream",
                               "Filename" : str(data.filename),
                               "Authorization" : headers.get("Authorization"),
                               "Source" : headers.get("Source")})
    return res.text
    '''
    req = requests.post(uploadApiUrl, headers = {"Authorization" : headers.get("Authorization"), "Content-Type" : headers.get("Content-Type")}, data = body)
    print(req.text)
    return req.text,req.status_code
    '''

@app.route("/api/upload_user_profile_picture", methods=["POST"])
def upload_user_profile_picture():
    req = request.files
    headers = request.headers
    data = req.get("file")

    res = requests.post(url=profileApiUrl,
                    data=data,
                    headers = {"Content-Type" : "application/octet-stream",
                               "Subject" : headers.get("Subject")})
    return "Ok"

@app.route("/api/remove_user_profile_picture")
def remove_user_profile_picture():
    req = request.files
    headers = request.headers
    res = requests.delete(url=profileApiUrl,
                    headers = {"Subject" : headers.get("Subject")})
    return "Ok"

@app.route("/api/get_businesses")
def get_businesses():
    req = requests.get("https://search-demo-matchmaker-cvpgbysybccgp4c3wmp6n3opau.us-east-1.es.amazonaws.com/business/_search", headers={'Content-Type' : 'application/json'}, data='{"query":{"match_all":{} },"size" : 50}')
    return jsonify(req.text)

@app.route("/api/match_businesses", methods=["POST"])
def match_businesses():
    ids = request.get_data().decode("UTF-8")
    print(ids)
    #req = requests.get("https://search-demo-matchmaker-cvpgbysybccgp4c3wmp6n3opau.us-east-1.es.amazonaws.com/business/_search", headers={'Content-Type' : 'application/json'}, data='{"query": {"ids": {"values":' + '"' + str(ids) + '"' + '}  },  "size" : 50}')
    req = requests.get("https://search-demo-matchmaker-cvpgbysybccgp4c3wmp6n3opau.us-east-1.es.amazonaws.com/business/_search", headers={'Content-Type' : 'application/json'}, data='{"query": {"ids": {"values":' + str(ids).replace("'",'"') + '}  },  "size" : 50}')
    return jsonify(req.text)

@app.route("/api/get_business_by_status", methods=["POST"])
def get_business_by_status():
    status = request.get_data().decode("UTF-8")
    headers = request.headers
    req = requests.get(businessApiUrl, headers = {"Authorization" : headers.get("Authorization"), "Content-Type" : headers.get("Content-Type"), "Status" : status})
    return jsonify(req.text)

@app.route("/api/update_business_status", methods=["POST"])
def update_business_status():
    headers = request.headers
    req = requests.post(businessApiUrl, headers = {"Authorization" : headers.get("Authorization"), "Content-Type" : headers.get("Content-Type"), "businessId" : headers.get("businessId")}, json=request.get_data().decode("utf-8"))
    return jsonify(req.text)

@app.route("/api/remove_business", methods=["GET"])
def remove_business():
    headers = request.headers
    req = requests.delete(url=businessApiUrl, headers = {"Authorization" : headers.get("Authorization"), "Content-Type" : headers.get("Content-Type"), "businessId" : headers.get("businessId")})
    return jsonify("Ok")

if __name__ == "__main__":
    app.run(debug=True)
