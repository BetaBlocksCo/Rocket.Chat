#!/usr/bin/python

import http.server

import html
import io
import os
import re
import httplib2
import json
import socketserver
import sys
import urllib.parse
from base64 import b64decode, b64encode
import urllib.parse as urlparse
from urllib.parse import parse_qs

SUFFIX = urllib.parse.quote('.xhtml')
httplib = httplib2.Http(".cache")

class Handler(http.server.SimpleHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "http://localhost:8000")
        self.send_header("Access-Control-Allow-Headers", "Authorization")
        self.end_headers()

    def do_GET(self):
        auth_token = self.headers.get("Authorization")
        payload = "{\n\t\"resume\": \"%s\"\n}"%(auth_token.split(" ")[1])
        if (len(self.path.split('?')) != 2):
            self.send_response(401)
            self.send_header('WWW-Authenticate', 'Basic realm=\"Secure HTTP Environment\"')
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            payload = "{\n\t\"error\": \"Unauthorized\",\n\t\"message\": \"userId required\"\n}".encode()
            self.wfile.write(payload)
            return
        parsed = urlparse.urlparse(self.path)
        channelId = parse_qs(parsed.query)['channelId'][0]
        (_, content) = httplib.request("http://localhost:8888/api/v1/login", "POST", payload)
        response = json.loads(content.decode('utf-8'))
        if (response["status"] == "error"):
            self.send_response(401)
            self.send_header('WWW-Authenticate', 'Basic realm=\"Secure HTTP Environment\"')
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            payload = "{\n\t\"error\": \"Unauthorized\"\n}".encode()
            self.wfile.write(payload)
            return
        headers = {
            "X-User-Id": response['data']['userId'],
            "X-Auth-Token": response['data']['authToken']
        }
        payload = '{}'
        (_, content) = httplib.request("http://localhost:8888/api/v1/channels.list.joined", "GET", payload, headers)
        response = json.loads(content.decode('utf-8'))
        if (response["channels"] == ""):
            self.send_response(401)
            self.send_header('WWW-Authenticate', 'Basic realm=\"Secure HTTP Environment\"')
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            payload = "{\n\t\"error\": \"Unauthorized\"\n}".encode()
            self.wfile.write(payload)
            return
        user_authed = False
        for channel in response["channels"]:
            if channel["_id"] == channelId:
                user_authed = True
        if user_authed:
            f = self.send_file(self.path.split('?')[0])
            if f:
                self.wfile.write(f.read())

    def send_file(self, path):
        path = self.translate_path(path)
        (dirname, filename) = os.path.split(path)
        try:
            list = os.listdir(dirname)
            list.sort(key=lambda a: a.lower())
        except os.error:
            list = []

        path = '.%s' % (self.path.split('?')[0])
        encoded_image = open(path, 'rb').read()
        f = io.BytesIO()
        f.write(encoded_image)
        f.seek(0)
        self.send_response(200)
        self.send_header('Content-Type', 'image/jpeg')
        self.send_header('Content-Disposition', 'attachment; filename="test.jpeg"')
        self.send_header("Content-Length", str(len(encoded_image)))
        self.send_header("Access-Control-Allow-Origin", "http://localhost:8000")
        self.send_header("Access-Control-Allow-Headers", "Authorization")
        self.end_headers()
        return f

if __name__=='__main__':
    httpd = socketserver.TCPServer(("", 8080), Handler)
    print("Serving on 0.0.0.0:8080 ...")
    httpd.serve_forever()
