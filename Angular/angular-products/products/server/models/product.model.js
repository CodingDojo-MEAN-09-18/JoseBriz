const mongoose = require('mongoose');
const {Schema} = mongoose;

function toLower(v) {
    return v.toLowerCase();
}

const productSchema = new Schema ({
    title: {
        type: String,
        required: [true, "Please add product title"],
        minlength: [4, 'Product title needs to be longer than 8 characters'],
        trim: true,
        set: toLower
    },
    price: {
        type: Number,
        required: [true, "Please enter product price"]
    },
    image: {
        type: String,
    }
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

module.exports = mongoose.model('Product', productSchema);
