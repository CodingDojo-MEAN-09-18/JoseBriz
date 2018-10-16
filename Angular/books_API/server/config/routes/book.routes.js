const book_controller = require('../../controllers').book_controller;
const router = require('express').Router();

router.get('/', book_controller.index);
router.get('/new', book_controller.new);
router.post('/', book_controller.create);    
router.get('/:id', book_controller.show);    
router.get('/:id/edit', book_controller.edit);    
router.post('/:id/update', book_controller.update);    
router.get('/:id/delete', book_controller.destroy);  

module.exports = router;