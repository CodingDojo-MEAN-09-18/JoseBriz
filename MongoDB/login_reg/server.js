const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const port = process.env.PORT || 8000;
const validator = require('validator');
const bcrypt = require('bcryptjs');
const app = express();

//build app
app
.use(express.static(path.join(__dirname, 'static')))
.use(bodyParser.urlencoded({extended:true}))
.use(session({
    secret:'dojo',
    resave: false,
    saveUninitialized: true,
    cookie: {secure:false, maxAge: 60000}
}))
.use(flash())
.set('view engine', 'ejs')
.set('views', path.resolve('views'))

//mongodb connection
mongoose.connect('mongodb://localhost:27017/messageboard', {useNewUrlParser:true});
mongoose.connection.on('connected', () => console.log('MongoDB connected'));

//schemas
const userSchema = new Schema ({
    first_name: {
        type: String,
        required: [true, 'First name is required']
    },
    last_name: {
        type: String,
        required: [true, 'Last name is required']
    },
    email: {
        type: String,
        required: [true, 'Please enter an email address'],
        unique: true,  //creates a unique index based on the entered email
        validate: {
            validator(email) {
                return validator.isEmail(email);
            },
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: 8,
        validate: {
            validator: (value) => {
                return /^(?=.*[a-z])(?=[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test(value);
            },
            message: "Password requirements: at least one number, uppercase and special character and be at least 8 characters long"
        }
    },
    date_of_birth: {
        type: Date,
        required: [true, 'Please enter your birth date']
    }
}, {timestamps: true});

//Hash PW:
//we use this hash a password only if it is a new password of if it has been changed.  if it is already a hashed pw, don't hash
//we ask 'has this field been modified?' 
//attached to the instance created from the model, so it is called in the context of an instance, therefore we use 'this' and not an es6 function
userSchema.pre('save', function(next) {
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

//to validate password, we use the userSchema and statics.  what this does is like prototype but for the model.  So we call the statics object and create a new method for it with a name we assign.  Statics is static information to a Class
//we will just return bookean to be handeld eslewhere - separation of concerns 
userSchema.statics.validatePassword = function(password_from_form, stored_hashed_password) {
    return bcrypt.compare(password_from_form, stored_hashed_password);
};

const User = mongoose.model('User', userSchema);

app.get('/', (request, response) => {
    response.redirect('/user');
});

//index displays login form
app.get('/user', (request, response) => {
    response.render('index');
});

//go to registration form
app.get('/user/new', (request, response) => {
    response.render('registration');
});

//create new user 
app.post('/new', (request,response) => {
    console.log(request.body);
    User.create(request.body)
        .then(user => {
            //send an email to validate or confirm registration
            //in this case, just render dashbord
            response.redirect(`/new/${user._id}`)
        })
        .catch(error => {
            for (let key in error.errors) {
                console.log(error.errors[key].message)
                request.flash('post_quote', error.errors[key].message);
            }
            response.render('registration');
        })
});

//show new user
app.get('/new/:id', (request,response) => {

});

//login
app.post('/login', (request,response) => {
    User.findOne({email: request.body.email})
        .then(userInfo => {
            if (!userInfo) {
                throw new Error();
            }
            return User.validatePassword(request.body.password, userInfo.password)
                .then(() => {
                    //add session id
                    request.session.user_id = user._id;
                    request.session.email = user.email
                })
        })
        .catch(error => {
            //re-render the form so user does not need to re-enter all the information.  If doing re-direct, they would have to type everything again
            response.render('/', {error: 'Email and password combination does not exist'})
        });
});

//logout
app.post('/logout', (request,response) => {

});

//port connection
app.listen(port, () => console.log(`Express listening on port ${port}`));

