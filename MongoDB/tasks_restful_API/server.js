const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const port  = process.env.PORT || 8000;
const app = express();

app
.use(bodyParser.json());

//connect to db
mongoose.connect('mongodb://localhost:27017/tasks', {useNewUrlParser:true});
mongoose.connection.on('connected', () => console.log(`MongoDB connected to Tasks!`));

//schema
const { Schema } = mongoose;
const taskSchema = new Schema ({
    title: {
        type: String,
        required: [true, "Please give your task a title"],
        trim: true,
    },
    description: {
        type: String,
        default: "",
        required: [true, 'Task description is required'],
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
        required: true,
    },
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});
const Task = mongoose.model('Task', taskSchema);

//routes
app.get('/', (request, response) => {
    response.redirect('/tasks');
});
app.get('/tasks', (request, response) => {
    Task.find({})
        .then(tasks_db => {
            const tasks = tasks_db;
            response.json(tasks);
        })
        .catch(console.log)
});
app.post('/tasks', (request, response) => {
    //new task is created
    console.log(request.body);
    const task = new Task(request.body);
    task.save()
        .then(response.redirect('/'))
        .catch(console.log)
});
app.get('/tasks/:_id', (request, response) => {
    //a task is found by id
    console.log(request.params._id);
    Task.findById(request.params._id)
        .then(task_db => {
            const task = task_db;
            response.json(task);
        })
        .catch(console.log)
});
app.put('/tasks/:_id', (request, response) => {
    //a task is updated
    console.log(request.params._id, request.body);
    Task.findByIdAndUpdate(request.params._id, request.body)
        .then(response.redirect('/'))
        .catch(console.log)
}); 
app.delete('/tasks/:_id', (request, response) => {
    //a task is deleted 
    console.log(request.params._id, request.body)
    Task.findByIdAndDelete(request.params._id)
        .then(response.redirect('/'))
        .catch(console.log)
});

//port
app.listen(port, () => console.log(`Express listening on port ${port} for Restful Task API`));