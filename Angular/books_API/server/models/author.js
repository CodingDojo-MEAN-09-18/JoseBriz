const mongoose = require('mongoose');
const {Schema} = mongoose;


const authorSchema = new Schema({
    first_name: {
        type: String,
        required: [true, `Please enter author\'s first name`],
        trim: true,
        // validate: {function(){if(this.length < 3) {throw new Error();}}, message: "First name must be longer than 2 characters"} 
    },
    last_name: {
        type: String,
        required: [true, `Please enter author\'s last name`],
        trim: true,
        // validate: {function(){if(this.length < 3) {throw new Error();}}, message: "Last name must be longer than 2 characters"}
    },
    country: {
        type: String,
        required: [true, `Please add author\'s country of origin`],
        trim: true,
        // validate: {function(){if(this.length < 3) {throw new Error();}}, message: "Country of origin must be longer than 2 characters"}
    },
    birthdate: {
        type: Date,
        required: [true, 'Please include author\'s birthdate'],
        // validate: {function(){}, message: "Date must be earlier than current date"}
    },
    books: [
        {
            type: Schema.Types.ObjectId, 
            ref:'Book',
        }
    ],
});

module.exports = mongoose.model('Author', authorSchema)

