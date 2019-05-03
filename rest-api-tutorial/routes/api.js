const express = require('express');
const router = express.Router();

// get list of ninjas from databases
router.get('/ninjas', (request, response) => {
    response.send({type: 'GET'})
}) 

// add a ninja to db
router.post('/ninjas', (request, response) => {
    // request.body;
    console.log(request.body);
    
    response.send({
        type: 'POST',
        name: request.body.name,
        age: request.body.age
    })
}) 

// update a ninja to db
router.put('/ninjas/:id', (request, response) => {
    response.send({type: 'PUT'})
}) 

router.delete('/ninjas/:id', (request, response) => {
    response.send({type: 'DELETE'})
}) 

module.exports = router;
