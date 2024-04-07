// Import required modules
const express = require('express');

// Create an instance of Express
const app = express();

// Import job data
const jobData = require('./jobs.json');

// Define routes

// Route to serve job data
app.get('/api/jobs', (req, res) => {
    res.json(jobData); // Send the JSON data as the response 
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
