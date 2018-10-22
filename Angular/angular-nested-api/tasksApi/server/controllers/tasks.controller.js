const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = {
    index(request, response) {
        Task.find({})
        .then(tasks => response.json(tasks))
        .catch(error => {
            response.json({message: "Error", error:error});
        })
    },
    create(request,response) {
        console.log('creating', request.body);
        const task = new Task(request.body);
        task.save()
            .then(response.json(task))
            .catch(console.log)
    },
    show(request,response) {
        console.log('showing', request.params._id);
        Task.findById(request.params._id)
            .then(task => response.json(task))
            .catch(console.log)    
    },
    update(request,response) {
        console.log('updating', request.params._id, request.body);
        Task.findByIdAndUpdate(request.params._id, request.body, {new: true})
            .then(task => response.json(task))
            .catch(console.log)    
    },
    destroy(request,response) {
        console.log('deleting', request.params._id, request.body)
        Task.findByIdAndDelete(request.params._id)
            .then(task => response.json(task))
            .catch(console.log)    
    },
}