const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = {
    index(request, response) {
        Task.find({})
        .then(tasks_db => {
            const tasks = tasks_db;
            response.json(tasks);
        })
        .catch(error => {
            response.json({message: "Error", error:error});
        })
    },
    create(request,response) {
        console.log(request.body);
        const task = new Task(request.body);
        task.save()
            .then(response.json(task))
            .catch(console.log)
    },
    show(request,response) {
        console.log(request.params._id);
        Task.findById(request.params._id)
            .then(task_db => {
                const task = task_db;
                response.json(task);
            })
            .catch(console.log)    
    },
    update(request,response) {
        console.log(request.params._id, request.body);
        Task.findByIdAndUpdate(request.params._id, request.body)
            .then(response.redirect('/'))
            .catch(console.log)    
    },
    destroy(request,response) {
        console.log(request.params._id, request.body)
        Task.findByIdAndDelete(request.params._id)
            .then(response.redirect('/'))
            .catch(console.log)    
    },
}