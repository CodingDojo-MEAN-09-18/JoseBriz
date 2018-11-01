const path = require('path');
const player_controller = require('../../controllers/player.controller');

const router = require('express').Router()

module.exports = router
.get('/', player_controller.index)
.post('/', player_controller.create)
.get('/:_id', player_controller.show)
.put('/:_id', player_controller.update)
.delete('/:_id', player_controller.destroy)
.all("*", (request, response) => {
    response.sendFile(path.resolve("dist/public/index.html"))
})

