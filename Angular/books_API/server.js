const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

app
.use(bodyParser.urlencoded({extended:true}))
.use(express.static(path.join(__dirname, 'public')));

//connect to db
require('./server/config/database');

//connect to routes
app.use(require('./server/config/routes'));

//port connection
app.listen(port, () => console.log(`Express listening on port ${port} Books API!!`));

