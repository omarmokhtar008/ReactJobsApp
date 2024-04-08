const express = require('express');
const jobData = require('./jobs.json'); // Assuming your JSON data is stored in a file called 'jobs.json'

const app = express();

// Define route to serve job data
app.get('/api/jobs', (req, res) => {
    res.json(jobData); // Send the JSON data as the response 
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
