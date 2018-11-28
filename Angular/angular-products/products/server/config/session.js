const session = require('express-session');
const cookie_parser = require('cookie-parser');

module.exports = sessionConfig = {
    saveUninitialized: true,
    secret: 'secretProduct',
    resave: false,
    name: 'session',
    rolling: true,
    cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 360000,
    }
};

