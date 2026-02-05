// Import the Express.js module
const express = require('express');
// Import File Reader
const fs = require("fs");
// Create an instance of the Express application
const app = express();
// Define a port for your server to listen on
const port = 4747;

// Set up a route to handle GET requests at the '/api/greeting' endpoint
app.get('/api/greeting', (req, res) => {
  res.status(200).json({ message: 'Hello, world! This is your new API.' });
});

app.get('/api/filter-menu', (req, res) => {
    let responseData;
    fs.readFile('data/filter-menu.json', (err, data) => {
        responseData = JSON.parse(data);
        res.status(200).json(responseData);
    });
});

app.get('/api/inventory-list/:newOrUsed', (req, res) => {
    let newOrUsed = req.params.newOrUsed; // new || used
    let responseData;
    fs.readFile(`data/inventory-list-${newOrUsed}.json`, (err, data) => {
        responseData = JSON.parse(data);
        res.status(200).json(responseData);
    });
});

// app.post('/', function (req, res) {
//     console.log(req.body.name);
//     res.end();
// });

// Start the server and listen for incoming requests
app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});