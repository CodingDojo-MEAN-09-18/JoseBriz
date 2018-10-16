const author_controller = require('../../controllers').author_controller;
const router = require('express').Router();

router.get('/', author_controller.index);
router.get('/new', author_controller.new);
router.post('/', author_controller.create);
router.get('/:id', author_controller.show);
router.get('/:id/edit', author_controller.edit);
router.post('/:id/update', author_controller.update);
router.get('/:id/delete', author_controller.destroy);

module.exports = router;