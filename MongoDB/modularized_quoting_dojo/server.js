//requirements
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const flash = require('express-flash');
const port = process.env.PORT || 8000;
const app = express();

//build app
app
.set('view engine', 'ejs')
.set('views', path.resolve('views'))
.use(express.static(path.join(__dirname, 'static')))
.use(bodyParser.urlencoded({extended:true}))
.use(session({
    secret:'dojo',
    resave: false,
    saveUninitialized: false,
    cookie: {secure:false, maxAge: 60000}
}))
.use(flash())

//connecton to db
require('./server/config/database');

//connect to routes
require('./server/config/routes.js')(app)

//port connection
app.listen(port, () => console.log(`Express listening on port ${port} for quotes app`));
