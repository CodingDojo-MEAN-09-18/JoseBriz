//dependencies
const mongoose = require('mongoose');
const {Schema} = mongoose;

//schema
const piranhaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please name your piranha'],
        trim: true,
    },
    age: {
        type: Number,
        required: [true, 'What is the age of this creature in years?'],
    },
    about: {
        type: String,
        required: [true, 'Write something about it!']
    },
}, {timestamps:{createdAt: true, updatedAt: true}});

const Piranha = mongoose.model('Piranha', piranhaSchema);

module.exports = Piranha;
