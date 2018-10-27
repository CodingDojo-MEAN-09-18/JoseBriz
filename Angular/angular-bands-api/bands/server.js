const express = require('express');
const body_parser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

require('./server/config/database');

app
.use(body_parser.urlencoded({extended:true}))
.use(body_parser.json())
.use(express.static(path.join(__dirname, 'dist/public')))
.use(require('./server/config/routes/band.routes'));

app.listen(port, () => console.log(`Express listening on port ${port}`));