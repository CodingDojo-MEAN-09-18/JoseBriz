const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const port = process.env.PORT || 8000;

const app = express();

app.use(session({
    secret: 'abrahadabra',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

app.use(express.static('views'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    if (request.session.views) {
        request.session.views++;
    } else {
        request.session.views = 1;
    }
    response.render('index',{views:request.session.views});
});
app.get('/reload', (request,response) => {
    request.session.views = request.session.views + 2;
    response.render('index',{views:request.session.views});
});
app.get('/reset', (request,response) => {
    request.session.views = 1;
    response.render('index',{views:request.session.views});
});


app.listen(port, () => console.log(`Express server listening on port ${port}`));


