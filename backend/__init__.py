from flask import Blueprint, Flask, jsonify, request, redirect, make_response
import requests
import json
import os
import base64
import sentry_sdk
from sentry_sdk.integrations.flask import FlaskIntegration

#main = Blueprint("main",__name__)
app = Flask(__name__)


cacheApiUrl = "https://jzvyvnvxld.execute-api.us-east-1.amazonaws.com/beta/cache"
uploadApiUrl = "https://jzvyvnvxld.execute-api.us-east-1.amazonaws.com/beta/upload"

testUrl = "https://webhook.site/2d399065-ea56-45ea-b6a0-e19da9c75caa"

tokenAuth = ""
username = ""
password = ""
redirect_uri = ""
tokenUrl = ""
logoutUrl = ""


if(app.config.get("ENV") == "development"):
    username = "12ar1kqn0474torm00iisksbtv"
    password = "1blet7j9ldoj678qk5mskc1oq8e8em02ttftnkvp4ougqc2mf3qc"
    redirect_uri = "http://localhost:3000"
    tokenUrl = "https://interninit.auth.us-east-1.amazoncognito.com/oauth2/token"
    claimsUrl = "https://interninit.auth.us-east-1.amazoncognito.com/oauth2/userInfo"
    logoutUrl = "https://interninit.auth.us-east-1.amazoncognito.com/login?response_type=code&client_id=12ar1kqn0474torm00iisksbtv&redirect_uri=http://localhost:3000"
    tokenAuthBytes = (username + ":" + password).encode("ascii")
    tokenAuth = base64.b64encode(tokenAuthBytes).decode("ascii")
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

jwtUrl = "https://jzvyvnvxld.execute-api.us-east-1.amazonaws.com/beta/auth"

@app.route("/api/")
def root():
    return "root"

@app.route("/api/get_user_data", methods=["POST"])
def get_user_data():
    page = request.get_data().decode("utf-8")
    token = request.headers.get("Authorization").split(" ")[1]
    params={"page":page, "token":token}
    req = requests.get(cacheApiUrl, params=params)
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
    req = requests.post(cacheApiUrl, headers = {"Authorization" : headers.get("Authorization"), "Completion-State" : headers.get("Completion-State"), "Completion-Checklist" : headers.get("Completion-Checklist")}, json = info)
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

if __name__ == "__main__":
    app.run(debug=True)
