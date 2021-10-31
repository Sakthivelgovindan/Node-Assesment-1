const http = require("http");
const fs = require("fs");

http.createServer(function(request, response) { 
    response.writeHeader(200, {"Content-Type": "text/html"});  // <-- HERE!
    fs.readFile('./index.html', function (err, html) {
        if (err) {
            response.write("No file found.");
            // throw err; 
        }
        response.write(html);  // <-- HERE!
        response.end();  
    });
}).listen(8080);

