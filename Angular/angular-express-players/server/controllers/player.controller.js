const mongoose = require('mongoose');
const Player = mongoose.model('Player');

const exists = function(v) {
    const name = v.name.toLowerCase();
    return Player.findOne({name:name})
}

module.exports = {
    index(request, response) {
        console.log('got to index');
        Player.find({})
        .then(players_db => {
            const players = players_db;
            response.json(players);
        })
        .catch(error => {
            response.json({message: "Error", error:error});
        })
    },
    create(request,response) {
        console.log('got to create')
        console.log(request.body);
        exists(request.body).then(result => {
            if (result) {
                console.log('player', result.name + " already exists")
            } else {
                Player.create(request.body)
                    .then(data => response.json(data))
                    .catch(error => response.status(406).json(error.message))
            }
        })
    },
    show(request,response) {
        console.log('got to show')
        console.log(request.params);
        Player.findById(request.params._id)
            .then(player_db => {
                const player = player_db;
                console.log('got this one from DB', player);
                response.json(player);
            })
            .catch(console.log)    
    },
    update(request,response) {
        console.log('got to update')
        console.log(request.params._id, request.body);
        Player.findByIdAndUpdate(request.params._id, request.body, {new:true})
            .then(player => response.json(player))
            .catch(error => response.status(406).json(error.message))    
    },
    destroy(request,response) {
        console.log('got to delete')
        console.log(request.params._id, request.body)
        Player.findByIdAndDelete(request.params._id)
            .then(player => response.json(player))
            .catch(console.log)    
    },
}