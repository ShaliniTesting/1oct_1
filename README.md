# Node.js Express Tutorial

A minimalist Node.js tutorial demonstrating Express.js framework integration with multiple endpoints.

## Overview

This project showcases fundamental Express.js routing concepts through a simple HTTP server with two endpoints:
- `/hello` - Returns "Hello world"
- `/good-evening` - Returns "Good evening"

## About This Tutorial

This project demonstrates Node.js HTTP server implementation using the Express.js framework.
Express.js is a minimal and flexible Node.js web application framework that provides a robust
set of features for web and mobile applications while maintaining simplicity for beginners.

### Why Express.js?

While Node.js provides a built-in `http` module for creating servers, Express.js offers:
- Cleaner, more readable routing code
- Automatic request parsing and response handling
- Easier endpoint addition and maintenance
- Industry-standard patterns used in production applications

This tutorial uses Express.js to introduce framework concepts while maintaining the
straightforward request-response patterns essential for understanding HTTP fundamentals.

## Prerequisites

- Node.js v18.0.0 or higher
- npm v9.0.0 or higher

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

Start the server:
```bash
npm start
```

The server will start on `http://localhost:3000`

## Endpoints

### GET /hello

Returns a plain text greeting.

**Request:**
```bash
curl http://localhost:3000/hello
```

**Response:**
```
Hello world
```

### GET /good-evening

Returns a plain text evening greeting.

**Request:**
```bash
curl http://localhost:3000/good-evening
```

**Response:**
```
Good evening
```

## Testing Endpoints

### Method 1: Web Browser
1. Start the server: `npm start`
2. Open your browser and navigate to:
   - `http://localhost:3000/hello` (should display "Hello world")
   - `http://localhost:3000/good-evening` (should display "Good evening")

### Method 2: cURL (Command Line)
```bash
# Test /hello endpoint
curl http://localhost:3000/hello
# Expected output: Hello world

# Test /good-evening endpoint
curl http://localhost:3000/good-evening
# Expected output: Good evening

# Test non-existent route (should return 404)
curl http://localhost:3000/nonexistent
```

## Project Structure

```
.
├── server.js          # Main application file
├── package.json       # Project manifest
├── package-lock.json  # Dependency lock file
├── .gitignore         # Git exclusions
└── README.md          # This file
```

## Learning Objectives

This tutorial demonstrates:
- Express.js application initialization
- Route handler registration
- HTTP GET endpoint implementation
- Response generation with `res.send()`
- Server binding and startup

## Troubleshooting

**"Port 3000 already in use" error:**
- Another application is using port 3000
- Solution: Stop the other application or use a different port
  ```bash
  PORT=3001 npm start
  ```

**"Cannot find module 'express'" error:**
- Express.js not installed
- Solution: Run `npm install`

## License

ISC