const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// set up express app
const app = express();

// connect to mongodb
mongoose.connect("mongodb://localhost/ninjago", { useNewUrlParser: true});
mongoose.Promise = global.Promise;

// body-parsing taking json 
app.use(bodyParser.json());

// initialize routes 
app.use('/api', routes);

// error handling
app.use(function(err, request, response, next){
    console.log(err);
    response.send({error: err.message});
    
})

// listen for requests --- for Heroku   process.env.port || 4000 
app.listen(4000, () => {
    console.log('Now listening at port 4000');    
})