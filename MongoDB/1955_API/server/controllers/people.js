//CONTROLLERS NOT IMPLEMENTED

const mongoose = require('mongoose');
const people = mongoose.model('people');

module.exports = {
    index(request, response) {
        people.find({})
            .then(people_db => {
                const people = people_db;
                response.json({message:"Success", people:people});
            })
            .catch(error => {
                response.json({message: "Error", error: error});
            });
    },
    
};

