from flask import Blueprint, Flask, jsonify, request, redirect, make_response
import requests
import json
import os
import base64
import sentry_sdk
from sentry_sdk.integrations.flask import FlaskIntegration

app = Flask(__name__)

cacheApiUrl = "https://jzvyvnvxld.execute-api.us-east-1.amazonaws.com/{stage}/cache"
uploadApiUrl = "https://jzvyvnvxld.execute-api.us-east-1.amazonaws.com/{stage}/upload"
businessApiUrl = "https://jzvyvnvxld.execute-api.us-east-1.amazonaws.com/{stage}/business"
profileApiUrl = "https://jzvyvnvxld.execute-api.us-east-1.amazonaws.com/{stage}/profile"

testUrl = "https://webhook.site/2d399065-ea56-45ea-b6a0-e19da9c75caa"

tokenAuth = ""
username = ""
password = ""
redirect_uri = ""
tokenUrl = ""
logoutUrl = ""
mediaBucketName = "tii-intern-media"


if(app.config.get("ENV") == "development"):
    cacheApiUrl = cacheApiUrl.format(stage="dev")
    uploadApiUrl = uploadApiUrl.format(stage="dev")
    businessApiUrl = businessApiUrl.format(stage="dev")
    profileApiUrl = profileApiUrl.format(stage="dev")
elif(app.config.get("ENV") == "production"):
    sentry_sdk.init(
    dsn="https://8537ba8551334943a20d5b615f267b36@o412197.ingest.sentry.io/5288579",
    integrations=[FlaskIntegration()]
    )
    username = "3og5ph16taqf598bchokdfs1r2"
    password = "bpuroud7lcqo5t3eomd6nvsspthu83c7e9taik2cqentf4f0o6g"
    redirect_uri = "https://apply.interninit.com"
    tokenUrl = "https://auth.interninit.com/oauth2/token"
    claimsUrl = "https://auth.interninit.com/oauth2/userInfo"
    logoutUrl = "https://auth.interninit.com/login?response_type=code&client_id=3og5ph16taqf598bchokdfs1r2&redirect_uri=https://apply.interninit.com"
    tokenAuthBytes = (username + ":" + password).encode("ascii")
    tokenAuth = base64.b64encode(tokenAuthBytes).decode("ascii")
    cacheApiUrl = cacheApiUrl.format(stage="prod")
    uploadApiUrl = uploadApiUrl.format(stage="prod")
    businessApiUrl = businessApiUrl.format(stage="prod")
    profileApiUrl = profileApiUrl.format(stage="prod")

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

@app.route("/api/auth", methods=["POST"])
def auth():
    rawBody = request.get_data()
    body = rawBody.decode("utf-8")
    auth = "Basic " + str(tokenAuth)
    req = requests.post(tokenUrl, headers={"Authorization":auth,"Content-Type":"application/x-www-form-urlencoded"}, data={"grant_type" : "authorization_code", "client_id":username, "code":rawBody, "redirect_uri":redirect_uri})
    print(req.text)
    try:
        load = json.loads(req.text)
        refresh_token = load["refresh_token"]

        response = jsonify(req.text)
        response.set_cookie("refresh_token", value=refresh_token, httponly = True)
        return response
    except KeyError:
        print("Invalid Grant")
        return jsonify("Invalid Grant")

@app.route("/api/auth/refresh")
def refresh():
    refresh = request.cookies.get("refresh_token")
    return jsonify(refresh)

@app.route("/api/auth/getheaders")
def get_headers():
    headers = request.headers
    auth_header = headers.get("Authorization")
    req = requests.get(claimsUrl, headers={"Authorization":auth_header})
    print(req.text)
    return jsonify(json.loads(req.text))

@app.route("/api/auth/exchange")
def exchange():
    auth = "Basic " + str(tokenAuth)
    refresh = request.cookies.get("refresh_token")
    req = requests.post(tokenUrl, headers={"Authorization":auth,"Content-Type":"application/x-www-form-urlencoded"}, data={"grant_type" : "refresh_token", "client_id":username, "refresh_token":refresh})
    response = jsonify(req.text)
    return response

@app.route("/api/logout")
def logout():
    resp = make_response(jsonify(logoutUrl))
    resp.delete_cookie("refresh_token")
    return resp

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
