const mongoose = require('mongoose');
const {Schema} = mongoose;

//schema
const dudeSchema = new Schema ({
    name: {
        type: String,
        required: [true, 'Our only request is that you enter the name of someone born in 1955.'],
        trim: true,
    },
}, {timestamps:{createdAt: true, updatedAt: true}});

module.exports = mongoose.model('Dude', dudeSchema);