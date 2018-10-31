const product_controller = require('../../controllers/product.controller');

const router = require('express').Router()

module.exports = router
.get('/', product_controller.index)
.post('/', product_controller.create)
.get('/:_id', product_controller.show)
.put('/:_id', product_controller.update)
.delete('/:_id', product_controller.destroy);