//this could all be done in server.js, however it gets messy as you can have hundreds of routes
//by using express.Router() we are essentially creating a mini router that handles specifically /user routes
//this keeps our code more organized and is standard for express

const express = require('express')
const router = express.Router()

router.get('/', (req,res) =>{
    res.send('User List')
})

router.get('/new', (req,res) =>{
    res.send("User New Form")
})

router.post('/', (req,res) =>{
    res.send("Create user")
})


//to create a dynmic parameter we start by using ":anyName"
//this is saying get the id the user inputs in the url and we access it by req.params.id
router.get('/:id', (req, res) =>{
    console.log(req.user)
    res.send(`Get User With ID ${req.params.id}`)
})

router.put('/:id', (req, res) =>{
    req.params.id
    res.send(`Update With ID ${req.params.id}`)
})

router.delete('/:id', (req, res) =>{
    req.params.id
    res.send(`Delete User With ID ${req.params.id}`)
})

const users = [{name: "Kyle"}, {name: "Sally"}]

//page infinitely loading because its waiting for next to be run. Param is a type of middleware which runes between the request
//being run from the server and the response being returned to the user.
router.param("id", (req, res, next, id) =>{
    req.user = users[id]
    //grab id from our user then continue with the code and save in req.user. Anywhere else there is a req object you can access the user
    
    next()
})

//exporting the router from the file to use in server.js
module.exports = router