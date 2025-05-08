// server_task1.js
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the homepage!');
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('About page');
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Contact page');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Invalid Request!');
    }
});

server.listen(5000, () => {
    console.log('The NodeJS server on port 5000 is now running…');
});
