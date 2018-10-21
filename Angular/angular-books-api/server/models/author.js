const mongoose = require('mongoose');
const { Schema } = mongoose;

const authorSchema = new Schema({
    first_name: {
        type: String,
        required: [true, 'Please enter first name'],
        minlength: [2, 'First name needs to be longer than 2 characters'],
        trim: true,
    },
    last_name: {
        type: String,
        required: [true, 'Please enter last name'],
        minlength: [2, 'Expected minimum of 2 characters for last name'],
        trim: true,
    },
    country: {
        type: String,
        required: [true, 'Please enter country of origin'],
        minlength: [3, 'Expected minimum of 3 characters for country name'],
        trim: true,
    },
    birth_date: {
        type: Date,
    },
    books: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Book',
        }
    ],
});

module.exports = mongoose.model('Author', authorSchema);
