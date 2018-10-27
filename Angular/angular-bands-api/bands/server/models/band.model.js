const mongoose = require('mongoose');
const {Schema} = mongoose;

function toLower(v) {
    return v.toLowerCase();
}
function toNumber(v) {
    return v.toNumber();
}

const bandSchema = new Schema ({
    name: {
        type: String,
        required: [true, "Please add band name"],
        trim: true,
        set: toLower,
    },
    country: {
        type: String,
        required: [true, 'Please add country'],
        trim: true,
        set: toLower
    },
    photo: {
        type: String,
        required: [true, "Add photo so we can vote"],
        trim: true
    },
    ratings: [
        {
          rating: {
            type: Number,
            min: 1,
            max: 5,
          },
          comment: {
            type: String,
          }
        }
      ],
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

module.exports = mongoose.model('Band', bandSchema);

