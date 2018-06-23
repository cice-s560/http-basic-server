const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
    switch(request.url) {
        case "/":
            response.statusCode = 200;
            response.setHeader("Content-Type", "text/plain");
            response.end("Welcome to root");
            break;
        case "/clase":
            response.statusCode = 200;
            response.setHeader("Content-Type", "text/plain");
            response.end("Hola Clase S560");
            break;
        case "/html":
            response.statusCode = 200;
            response.setHeader("Content-Type", "text/html");
            response.write("<div>");
            response.write("<h1>Hola con HTML</h1>");
            response.write("<p>Visita la web de la escuela <a href=\"http://cice.es\">CICE</a></p>");
            response.write("</div>");
            response.end();
            break;
        case "/image":
            const file = fs.readFileSync("./cice-logo.jpg");

            response.statusCode = 200;
            response.setHeader("Content-Type", "image/jpg");
            response.end(file)
            break;
        case "/html-file":
            const html = fs.readFileSync("./bio.html");

            response.statusCode = 200;
            response.setHeader("Content-Type", "text/html");
            response.end(html)
            break;
        default:
            response.statusCode = 404;
            response.setHeader("Content-Type", "text/plain");
            response.end("Esa url no existe");
    }
});

server.listen(3000, "0.0.0.0", () => {
    console.log("Servidor corriendo en puerto 3000");
});