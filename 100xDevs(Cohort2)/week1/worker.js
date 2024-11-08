// worker.js

const http = require('http');
const { handleRequest } = require('./subroutines');

// Each worker process will create its own HTTP server
http.createServer((req, res) => {
    handleRequest(req, res);
}).listen(8000);

console.log(`Worker process ${process.pid} started and listening on port 8000`);