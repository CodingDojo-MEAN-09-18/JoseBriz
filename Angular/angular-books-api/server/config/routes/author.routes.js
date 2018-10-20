const author_controller = require('../../controllers/author.controller');

const router = require('express').Router();

module.exports = router
  .get('/', author_controller.index)
  .post('/', author_controller.create)
  .get('/:author_id', author_controller.show)
  .put('/:author_id', author_controller.update)
  .delete('/:author_id', author_controller.delete);

  
