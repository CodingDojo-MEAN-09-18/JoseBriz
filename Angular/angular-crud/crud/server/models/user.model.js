const uniqueValidator = require('mongoose-unique-validator');
const validator = require('validator');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        //this creates a unique index based on the username string; the uniqueValidator will determine if we have a unique failure and return an error
        unique: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        //custom validation:
        validate: {
            validator(email) {
                //return boolean; don't need a regEx because this is a built in method of require('validator') 
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


//check unique user, email, pw
//plugin is a method of Schema, takes in the function to use and options
UserSchema.plugin(uniqueValidator, { message: '{PATH} must be unique' });

//hash password:
//important to use ES5 function for validation to change context to the document that's being worked on, which is an instance of UserSchema
UserSchema.pre('save', function(next) {
    //only re-hash if has been modified...
    if (!this.isModified('password')) {
        //if not modified just exit
        return next();
    }
    //if modified, hash
    bcrypt.hash(this.password, 10)
      .then(hashedPassword => {
          this.password = hashedPassword;
          next();
      })
      //errors are passed to next, so we can catch and invoque here
      .catch(next);
});

//compare passwords,for this we create a custom method and call it validatePassword
//statics is like prototype but for the model, and we'll add the custom method:
//notice the model does not include scenario that passwords don't match
//compare returns boolean, so we'll handle unmatched passwords further down the road in another method
UserSchema.statics.validatePassword = function(candidatePassword, hashedPassword) {
    return bcrypt.compare(candidatePassword, hashedPassword);
};

module.exports = mongoose.model('User', UserSchema);
