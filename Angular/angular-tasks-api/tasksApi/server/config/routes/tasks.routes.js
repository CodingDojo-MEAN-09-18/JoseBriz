const task_controller = require('../../controllers/tasks.controller');

const router = require('express').Router()

module.exports = router
.get('/', (request,response) => response.redirect('/tasks'))
.get('/tasks', task_controller.index)
.post('/tasks', task_controller.create)
.get('/tasks/:_id', task_controller.show)
.put('/tasks/:_id', task_controller.update)
.delete('/tasks/:_id', task_controller.destroy);

