import SocketServer
import json

PORT = 8000

class Handler(SimpleHTTPServer.SimpleHTTPRequestHandler):
    def do_POST(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()

        self.wfile.write(json.dumps({"success": True}))

        content_length = int(self.headers['Content-Length'])
        json_string = self.rfile.read(content_length)
        data = json.loads(json_string)
        print (data)

httpd = SocketServer.TCPServer(("", PORT), Handler)

print ("serving at port", PORT)
httpd.serve_forever()
