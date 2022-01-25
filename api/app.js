const express = require('express');
const app = express();

// Load Models.
const {List, Task} = require('./db/models');
// ROUTE HANDLERS

// LIST ROUTES
app.get('/lists', (req,res) => {
    // We want to return an array of all the lists in the database
    List.find({}).then((lists) => {
        res.send(lists);
    })
} )

app.post('/lists', (req,res) => {
    // We want to create a new list and return the new list document back to the user, which includes the id.
    // The list information fields will be passed in via the JSON request body.
})

app.patch('/lists/:id', (req,res) => {
    // We want to update the specified list with the new values specified in the JSON body.
})

app.delete('/lists/:id', (req,res) => {
    // Delete the specified list.
})


app.listen(3000,() =>{
    console.log("server is listening on port 3000 ")
})