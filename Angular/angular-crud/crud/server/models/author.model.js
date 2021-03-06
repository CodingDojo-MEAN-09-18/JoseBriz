const mongoose = require('mongoose');
const {Schema} = mongoose;

function toLower(v) {
    return v.toLowerCase();
}

const authorSchema = new Schema ({
    name: {
        type: String,
        required: [true, "Please add author name"],
        minlength: [8, 'Make author name longer than 8 characters'],
        trim: true,
        set: toLower
    },
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

module.exports = mongoose.model('Author', authorSchema);
