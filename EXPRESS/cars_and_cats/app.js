const express = require('express');
// const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;

const app = express();

app.use(express.static('views'));
app.use('/cars', express.static('views'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (request, response) => {
    response.render('main');
});
app.get('/cars', (request, response) => {
    response.render('cars');
});
app.get('/cats', (request, response) => {
    response.render('cats');
});
app.get('/cars/new', (request, response) => {
    response.render('new');
});

app.listen(port, () => console.log(`Express server listening on port ${port}`));
