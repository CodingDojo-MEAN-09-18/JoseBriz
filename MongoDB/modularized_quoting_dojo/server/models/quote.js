const mongoose = require('mongoose');
const {Schema} = mongoose;

//schema
const quoteSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name'],
        trim: true,
    },
    quote: {
        type: String,
        required: [true, 'Please enter a quote'],
        minlength: [10, 'Make your quote longer than 10 characters'],
    },
}, {timestamps: {createdAt: 'created_at', updatedAt: false}});

module.exports = mongoose.model('Quote', quoteSchema);
