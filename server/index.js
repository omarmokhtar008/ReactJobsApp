const express = require('express');
const cors = require('cors');
const jobData = require('./jobs.json');

const app = express();

app.use(cors());

// Middleware to respond with JSON data at the root path
app.use("/", (req, res) => {
    res.json(jobData);
});

// Define route to serve job data with optional limit
app.get('/api/jobs', (req, res) => {
    let limit = req.query._limit; // Extract the _limit query parameter
    let limitedData = jobData.slice(0, limit); // Apply the limit to the data
    res.json(limitedData); // Send the limited JSON data as the response 
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
