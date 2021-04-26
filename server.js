// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');



// Start up an instance of app
const app = express();

// Setup Server
const port = 8800;
const server = app.listen(port, listening);

function listening(){
    console.log('server running');
    console.log(`running on localhost: ${port}`);
}

/* Middleware*/


const bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));




// GET and POST routes

app.get('/data', getWetData)

function getWetData(req,res){
    res.send(projectData);
}

const data = [];

app.get('/all', getData);

function getData (req, res) { 
    res.send(data);
}


app.post('/add', addData);

function addData (req, res) {
        newEntry = {
        temp: req.body.temp,
        date: req.body.date,
        resp: req.body.resp
    }
    data.push(newEntry);
    res.send(data);
    console.log(newEntry);
}

