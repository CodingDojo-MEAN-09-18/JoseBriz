const express = require('express');
const session = require('express-session');
const body_parser = require('body-parser');
const cookie_parser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');
const color = require('colors');

const app = express();
const port = process.env.PORT || 8000;

const sessionConfig = require('./server/config/session');

require('./server/config/database');

app
.use(body_parser.urlencoded({extended:true}))
.use(body_parser.json())
.use(logger('dev'))
.use(session(sessionConfig))
.use(cookie_parser('abcdElmo4321'))
.use(express.static(path.join(__dirname, 'dist/public')))
.use((request, response, next) => {
    console.log(color.yellow(`server got incoming request for ${request.url}`));
    next();
})
.use('/api', require('./server/config/routes'))
.use(require('./server/config/routes/catch-all.route'));

app.listen(port, () => console.log(`Express listening on port ${port}`));