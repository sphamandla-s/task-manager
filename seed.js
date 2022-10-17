const mongoose = require('mongoose');
const path = require("path");
const Task = require(path.join(__dirname, 'src/models/taskModels'));

mongoose.connect('mongodb://localhost:27017/tasks').then(()=> {
    console.log("Connected")
}).catch(err => {
    console.log("There was an error")
    console.log(err)
});




const t = new Task({title: "wash", description : 'Washfdsbhnfkjmda.fgds', date : "20/10/2022"})
t.save().then(t => {
    console.log("Add")
    console.log(t)
}).catch(e => {
    console.log("There is an Error")
    console.log(e)
})