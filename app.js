const http = require('http');
const url = require('url');

// Function to get the current time and format it as a JSON object
function getCurrentTime() {
    const now = new Date();
    return {
        year: now.getFullYear(),
        month: ('0' + (now.getMonth() + 1)).slice(-2), // Months are zero-based, add 1 and pad with zero
        date: ('0' + now.getDate()).slice(-2),         // Pad with zero
        hour: ('0' + now.getHours()).slice(-2),        // Pad with zero
        minute: ('0' + now.getMinutes()).slice(-2)     // Pad with zero
    };
}

// Create the HTTP server
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    // Check if the request is for the current time API
    if (parsedUrl.pathname === '/api/currenttime') {
        const currentTime = getCurrentTime();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(currentTime));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Endpoint not found' }));
    }
});

// Start the server
const port = 8000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
