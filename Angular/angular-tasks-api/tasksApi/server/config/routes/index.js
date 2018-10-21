const task_router = require('./tasks.routes');

const router = require('express').Router();

module.exports = router
  .use('tasks', task_router);