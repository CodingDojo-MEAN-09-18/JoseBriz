const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Please enter a book title'],
        trim: true,
    },
    publication_year: {
        type: Number,
        required: true,
        min: [4, 'Please use a 4-digit year'], 
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author'
    }
})

module.exports = mongoose.model('Book', bookSchema);

