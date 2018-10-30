const author_controller = require('../../controllers/author.controller');

const router = require('express').Router()

module.exports = router
.get('/', author_controller.index)
.post('/', author_controller.create)
.get('/:_id', author_controller.show)
.put('/:_id', author_controller.update)
.delete('/:_id', author_controller.destroy);