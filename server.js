// Import Express.js - a web application framework for Node.js
const express = require('express');

// Create Express application instance
// This replaces http.createServer() from the core module approach
const app = express();

// Configure server port, allowing override via environment variable
// Default: 3000 (standard development port for Node.js tutorials)
const PORT = process.env.PORT || 3000;

// Route handler for GET /hello
// Express.js automatically handles URL parsing and method matching
app.get('/hello', (req, res) => {
  // res.send() automatically sets Content-Type and status code
  res.send('Hello world');
});

// Route handler for GET /good-evening
// Demonstrates how easily additional endpoints can be added
app.get('/good-evening', (req, res) => {
  res.send('Good evening');
});

// Start server and bind to configured port
// Express.js internally calls http.createServer() and server.listen()
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Try: http://localhost:${PORT}/hello`);
  console.log(`Try: http://localhost:${PORT}/good-evening`);
});
