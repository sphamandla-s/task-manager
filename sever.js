const express = require("express");
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const app = express();
const port = 3005;

mongoose.connect('mongodb://localhost:27017/tasks').then(()=> {
    console.log("Connected")
}).catch(err => {
    console.log("There was an error")
    console.log(err)
});



app.use(express.static(path.join(__dirname, "public")));
app.set('views', path.join(__dirname, "src/views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended : true}));
app.use(methodOverride('_method'))


const taskRouters = require(path.join(__dirname, "src/routers/taskRouters"));

app.get('/', taskRouters)
//app.get('/tasks', taskRouters)
app.post('/tasks', taskRouters)
app.get('/newtask', taskRouters)
app.get('/task/:id/edit', taskRouters)
app.put('/tasks/:id', taskRouters)
app.delete('/tasks/:id', taskRouters)

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`)
});