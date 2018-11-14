const express = require('express');
const session = require('express-session');
const body_parser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

//config session could go in server/config and require here
const sessionConfig = {
    //create a cookie for visiting user automatically as soon as they visit
    saveUninitialized: true,
    //cookie, how it is going to encode the session
    secret: 'secredword',
    //if no changes as session is accessed, do we want to resave content anyway?
    resave: false,
    //name of the cookie that gets created
    name: 'session',
    //extends life of the cookie based on user activity; if remains active, updates and does not kick you off
    rolling: true,
    //cookie takes an object, 
    //if in production you want secure: true
    //may want httpOnly to be true, study this
    cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 360000,
    }
};

require('./server/config/database');

app
.use(body_parser.urlencoded({extended:true}))
.use(body_parser.json())
.use(logger('dev'))
.use(session(sessionConfig))
.use(cookieParser('SecretStringForDecodingCookiesUsuallyStoredInEnvironmentVariables-likeWeDoWithPort'))
.use((request, response, next) => {
    console.log(`incoming request for ${request.url}`);
    next();
})
.use(express.static(path.join(__dirname, 'dist/public')))
.use((request, response, next) => {
    console.log(request.url)
    next();
})
.use('/api', require('./server/config/routes'))
.use(require('./server/config/routes/catch-all.route'));

app.listen(port, () => console.log(`Express listening on port ${port}`));