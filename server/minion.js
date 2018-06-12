
// loading the module
const express = require('express')
const app = express()
let tasks = []
// body parser for parsing JSON
var bodyParser = require('body-parser')
app.use(bodyParser.json())

// importing the movie class from movie.js file
const Tasks = require('./tasks')

// middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/tasks',function(req,res){res.json(tasks)})

app.post('/tasks',function(req,res){
    console.log(req.body.title)
    console.log(req.body.priority)
    console.log(req.body.dateCreated)
    console.log(req.body.dateCompleted)
    console.log(req.body.isCompleted)
    let task3 = new Tasks(req.body.title,req.body.priority,req.body.dateCreated,req.body.dateCompleted,req.body.isCompleted)
    console.log(task3)
    tasks.push(task3)
    res.json(tasks)
})



app.listen(3000, () => console.log('Example app listening on port 3000!'))
