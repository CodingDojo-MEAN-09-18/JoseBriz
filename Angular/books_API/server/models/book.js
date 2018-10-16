const mongoose = require('mongoose');
const {Schema} = mongoose;


const bookSchema = new Schema({
    title: {
        type: String,
        required: [true, `Please enter book\'s title`],
        trim: true,
        // validate: {function(){if(this.length < 3) {throw new Error();}}, message: "Book title must be longer than 2 characters"} 
    },
    publication_year: {
        type: Number,
        required: [true, 'Please include book\'s publication year'],
        // validate: {function(){}, message: "Publication year must be this year or earlier"}
    },
    author: [
        {
            type: Schema.Types.ObjectId, 
            ref:'Author',
        }
    ],
});

module.exports = mongoose.model('Book', bookSchema)

