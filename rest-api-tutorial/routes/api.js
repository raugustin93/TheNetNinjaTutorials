const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninjas');

// get list of ninjas from databases
router.get('/ninjas', (request, response) => {
    response.send({type: 'GET'})
}) 

// add a ninja to db
router.post('/ninjas', (request, response) => {
    // request.body;
    // console.log(request.body);
    // let ninja = new Ninja(request.body); && ninja.save(); 
    // or 
    Ninja.create(request.body).then( function(ninja) {
        response.send(ninja);
    }
    )

}) 

// update a ninja to db
router.put('/ninjas/:id', (request, response) => {
    response.send({type: 'PUT'})
}) 

router.delete('/ninjas/:id', (request, response) => {
    response.send({type: 'DELETE'})
}) 

module.exports = router;
