# Time-Server

```markdown
# HTTP JSON API Node.js Time Server

## Project Description
This project involves creating an HTTP JSON API Time Server using Node.js. The server responds with the current date and time in JSON format when accessed via a specific URL (`/api/currenttime`). This project is designed to provide a basic understanding of setting up and running a Node.js server, handling HTTP requests, and serving JSON data.

## Setup Environment
### Install Node.js and npm on Ubuntu
1. Update the package list:
   ```bash
   sudo apt update
   ```
2. Install Node.js and npm:
   ```bash
   sudo apt install nodejs npm
   ```
3. Verify the installation:
   ```bash
   node -v
   npm -v
   ```

## Download Programs and Related Documentation
### Create Project Directory
1. Create and navigate to the project directory:
   ```bash
   mkdir time-server
   cd time-server
   ```

### Initialize Node.js Project
1. Initialize the project with default settings:
   ```bash
   npm init -y
   ```

## Process of Program Execution
### Create and Configure `app.js`
1. Create the `app.js` file:
   ```bash
   touch app.js
   ```

2. Add the following code to `app.js`:
   ```javascript
   const http = require('http');

   const server = http.createServer((req, res) => {
       if (req.url === '/api/currenttime') {
           const now = new Date();
           const response = {
               year: now.getFullYear(),
               month: String(now.getMonth() + 1).padStart(2, '0'),
               date: String(now.getDate()).padStart(2, '0'),
               hour: String(now.getHours()).padStart(2, '0'),
               minute: String(now.getMinutes()).padStart(2, '0')
           };
           res.writeHead(200, { 'Content-Type': 'application/json' });
           res.end(JSON.stringify(response));
       } else {
           res.writeHead(404, { 'Content-Type': 'text/plain' });
           res.end('Not Found');
       }
   });

   const PORT = 8000;
   server.listen(PORT, () => {
       console.log(`Server is running on port ${PORT}`);
   });
   ```

### Run the Server
1. Start the server by running `app.js`:
   ```bash
   node app.js
   ```

### Test the Server
1. Open your browser and navigate to:
   ```
   http://localhost:8000/api/currenttime
   ```
2. Expected Output:
   ```json
   {
       "year": 2021,
       "month": "09",
       "date": "24",
       "hour": "16",
       "minute": "09"
   }
   ```

## Screenshot of Execution Results
![Execution Results]() 

## Google Slides Presentation
[View Presentation](https://docs.google.com/presentation/d/1rebH7n4SO27qWUx0tCwrH-mOxPyJH9RcOST1wAm55iI/edit?usp=sharing)

## Repository Structure
```
Javascript/
└── Project/
    └── README.md
```
## Keywords
Node.js, JSON API, Time Server, HTTP Server, JavaScript, Backend Development, Web Development, RESTful API, Programming, Software Engineering
