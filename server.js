// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder 'website'
app.use(express.static('website'));


// Setup Server
const port = 8000;
function listening () {
    console.log(`server at localhost: ${port}`);
}
// Server is running at localhost 8000
const server = app.listen(port, listening);

//intializing GET route
app.get('/getData', (req, res) => {
//Respond with projectData object when GET request is made to OpenWeatherMap API
    res.send(projectData);
});

//intializing POST route
app.post('/postData', (req, res) => {
    //Storing date property of body data in projectData object
    projectData.date = req.body.date;
    //Storing temp property of body data in projectData object
    projectData.temperature = req.body.temperature;
    //Storing user entry in projectData object
    projectData.userContent = req.body.userContent;
});