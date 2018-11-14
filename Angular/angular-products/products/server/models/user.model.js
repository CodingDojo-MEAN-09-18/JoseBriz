const unique_validator = require('mongoose-unique-validator');
const validator = require('validator');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate: {
            validator(email) {
                return validator.isEmail(email);
            }
        }
    },
    password: {
        type: String,
        required: true,
    },
}, {timestamps: true}
);

UserSchema.plugin(unique_validator, {message: '{PATH} must be unique'});

UserSchema.pre('save', function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    bcrypt.hash(this.password, 10)
        .then(hashed_password => {
            this.password = hashed_password;
            next();
        })
        .catch(next);
});

UserSchema.statics.validatePassword = function(candidate_password, hashed_password) {
    return bcrypt.compare(candidate_password, hashed_password);
};

module.exports = mongoose.model('User', UserSchema);