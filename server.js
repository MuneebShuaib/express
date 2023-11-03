
//import our express library
const express = require('express')

//by calling the function express() we create an app variable that allows us to set up the entire server
const app = express()

app.set('view engine', 'ejs')
//most common http requests are get, put, delete, post, patch
//most of the time on these routes u are going to send some json or rendering a file
app.get('/', (req, res) =>{
    console.log("here")
    // res.send("send message to user")

    //res.download('server.js')
    //res.sendStatus(500)
    //res.status(500).send("hi")
    //res.status(500).json({message: "Error"})
    //res.json("message: "success")

    // to render a file use res.render
    res.render('index', {text: "World"})
})

const userRouter = require('./routes/users')
//by using app.use, we can add the routes from routes/users.js and mount them onto /users route
app.use('/users', userRouter)

//our server is listening on port 3000 for a bunch of different requests
app.listen(3000)