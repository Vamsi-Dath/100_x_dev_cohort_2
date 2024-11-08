// subroutines.js

function processData(input) {
    // Simulate a CPU-intensive calculation
    let result = 0;
    for (let i = 0; i < 1e7; i++) {
        result += i * input;
    }
    return result;
}

function handleRequest(req, res) {
    const input = parseInt(req.url.split('/').pop()) || 1;
    const result = processData(input);
    res.writeHead(200);
    res.end(`Result: ${result}`);
}

module.exports = {
    processData,
    handleRequest
};