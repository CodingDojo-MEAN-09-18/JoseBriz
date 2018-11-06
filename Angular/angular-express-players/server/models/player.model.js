const mongoose = require('mongoose');
const {Schema} = mongoose;

function toLower(v) {
    return v.toLowerCase();
}

const Positions = Object.freeze({
    Pitcher: 'pitcher',
    Catcher: 'catcher',
    First_Base: 'first base',
    Second_Base: 'second base',
    Third_Base: 'third base',
    Left_Field: 'left field',
    Center_Field: 'center_field',
    Right_Field: 'right_field',
    Bench: 'bench',
    Other: 'other',
});

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
        enum: Object.values(Positions),
    },
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

Object.assign(playerSchema.statics, {Positions})

module.exports = mongoose.model('Player', playerSchema);
