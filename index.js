const http = require("http");

const server = http.createServer((request, response) => {
    // Hago cosas de server
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Hola Clase S560");
});

server.listen(3000, "127.0.0.1", () => {
    console.log("Servidor corriendo en puerto 3000");
});