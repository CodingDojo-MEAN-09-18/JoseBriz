const mongoose = require('mongoose');
const {Schema} = mongoose;

function toLower(v) {
    return v.toLowerCase();
}

const playerSchema = new Schema ({
    name: {
        type: String,
        required: [true, "Please add player name"],
        minlength: [4, 'Make player name longer than 4 characters'],
        trim: true,
        set: toLower
    },
    position: {
        type: String,
        trim: true,
        set: toLower
    }
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

module.exports = mongoose.model('Player', playerSchema);
