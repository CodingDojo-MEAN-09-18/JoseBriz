const crud_controller = require('../../controllers/crud.controller');

const router = require('express').Router()

module.exports = router
.get('/', (request,response) => response.redirect('/cruds'))
.get('/cruds', crud_controller.index)
.post('/cruds', crud_controller.create)
.get('/cruds/:id', crud_controller.show)
.put('/cruds/:id', crud_controller.update)
.delete('/cruds/:id', crud_controller.destroy);