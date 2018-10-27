const band_controller = require('../../controllers/band.controller');

const router = require('express').Router()

module.exports = router
.get('/', (request,response) => response.redirect('/bands'))
.get('/bands', band_controller.index)
.post('/bands', band_controller.create)
.get('/bands/:_id', band_controller.show)
.put('/bands/:_id', band_controller.update)
.put('/bands/:_id/rate', band_controller.rate)
.delete('/bands/:_id', band_controller.destroy);
