from flask import Blueprint, jsonify, request, redirect, make_response
import requests
import json

main = Blueprint("main",__name__)

cacheApiUrl = "https://jzvyvnvxld.execute-api.us-east-1.amazonaws.com/beta/cache"
uploadApiUrl = "https://jzvyvnvxld.execute-api.us-east-1.amazonaws.com/beta/upload"
username = "3og5ph16taqf598bchokdfs1r2"
password = "bpuroud7lcqo5t3eomd6nvsspthu83c7e9taik2cqentf4f0o6g"
tokenUrl = "https://auth.interninit.com/oauth2/token"
testUrl = "https://webhook.site/c2795845-3b0d-4cf1-8ac4-3da037d87588"

@main.route("/get_user_data", methods=["POST"])
def get_user_data():
    page = request.get_data().decode("utf-8")
    token = request.headers.get("Authorization").split(" ")[1]
    params={"page":page, "token":token}
    req = requests.get(cacheApiUrl, params=params)
    return jsonify(req.text)


@main.route("/update_user_data", methods=["POST"])
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
    req = requests.post(cacheApiUrl, headers = {"Authorization" : headers.get("Authorization")}, json = info)
    return req.text

@main.route("/upload_user_files", methods=["POST"])
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
@main.route("/auth", methods=["POST"])
def auth():
    rawBody = request.get_data()
    body = rawBody.decode("utf-8")
    req = requests.post(tokenUrl, headers={"Authorization":"Basic M29nNXBoMTZ0YXFmNTk4YmNob2tkZnMxcjI6YnB1cm91ZDdsY3FvNXQzZW9tZDZudnNzcHRodTgzYzdlOXRhaWsyY3FlbnRmNGYwbzZn","Content-Type":"application/x-www-form-urlencoded"}, data={"grant_type" : "authorization_code", "client_id":username, "code":rawBody, "redirect_uri":"http://localhost:3000"})
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

@main.route("/auth/refresh")
def refresh():
    refresh = request.cookies.get("refresh_token")
    if(refresh == None):
        return jsonify(refresh)
    else:
        return jsonify(refresh)


@main.route("/auth/exchange")
def exchange():
    refresh = request.cookies.get("refresh_token")
    req = requests.post(tokenUrl, headers={"Authorization":"Basic M29nNXBoMTZ0YXFmNTk4YmNob2tkZnMxcjI6YnB1cm91ZDdsY3FvNXQzZW9tZDZudnNzcHRodTgzYzdlOXRhaWsyY3FlbnRmNGYwbzZn","Content-Type":"application/x-www-form-urlencoded"}, data={"grant_type" : "refresh_token", "client_id":username, "refresh_token":refresh})
    #print(req.text)
    response = jsonify(req.text)
    return response

@main.route("/logout")
def logout():
    resp = make_response(jsonify("https://auth.interninit.com/login?response_type=code&client_id=3og5ph16taqf598bchokdfs1r2&redirect_uri=http://localhost:3000"))
    resp.delete_cookie("refresh_token")
    return resp
