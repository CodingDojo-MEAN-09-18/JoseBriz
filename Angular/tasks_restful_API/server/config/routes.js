const task_controller = require('../controllers/tasks.js');

module.exports = function(app) {
    app.get('/', (request,response) => response.redirect('/tasks'));
    app.get('/tasks', task_controller.index);
    app.post('/tasks', task_controller.create);
    app.get('/tasks/:_id', task_controller.show);
    app.put('/tasks/:_id', task_controller.update);
    app.delete('/tasks/:_id', task_controller.destroy);
}

