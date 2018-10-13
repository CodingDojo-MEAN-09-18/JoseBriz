//NOT IMPLEMENTED

const task_controller = require('../controllers/tasks.js');

module.exports = function(app) {
    app.get('/', task_controller.index);
    
}