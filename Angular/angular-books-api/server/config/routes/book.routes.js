const book_controller = require('../../controllers/book.controller');

const router = require('express').Router();

module.exports = router
  .get('/', book_controller.index)
  .post('/', book_controller.create)
  .get('/:book_id', book_controller.show)
  .put('/:book_id', book_controller.update)
  .delete('/:book_id', book_controller.delete);

  
