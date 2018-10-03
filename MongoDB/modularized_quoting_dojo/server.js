//requirements
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const color = require('colors');
const mongoose = require('mongoose');
const {Schema} = mongoose;
const session = require('express-session');
const flash = require('express-flash');
const port = process.env.PORT || 8000;
const app = express();

//build app
app
.use(express.static(path.join(__dirname, 'static')))
.use(bodyParser.urlencoded({extended:true}))
.use(session({
    secret:'dojo',
    resave: false,
    saveUninitialized: false,
    cookie: {secure:false, maxAge: 60000}
}))
.use(flash())
.set('view engine', 'ejs')
.set('views', path.resolve('views'))

//mongodb connection
mongoose.connect('mongodb://localhost:27017/quoting_dojo', {useNewUrlParser:true});
mongoose.connection.on('connected', () => console.log('MongoDB connected'));

//schema
const quoteSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name'],
        trim: true,
    },
    quote: {
        type: String,
        required: [true, 'Please enter a quote'],
        minlength: [10, 'Make your quote longer than 10 characters'],
    },
}, {timestamps: {createdAt: 'created_at', updatedAt: false}});
const Quote = mongoose.model('Quote', quoteSchema);

//routes used to be here, now just require and invoke with (app)
require('./server/config/routes.js')(app)

//port connection
app.listen(port, () => console.log(`Express listening on port ${port}`));
