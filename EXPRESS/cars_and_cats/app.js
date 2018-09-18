const express = require('express');
// const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;

const app = express();

app.use(express.static('views'));
app.use('/cars', express.static('views'));
app.use('/cats', express.static('views'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(bodyParser.urlencoded({extended:true}));

const cats = [{name:'Jax',about:'Born in the park, he is our youngest cat'},{name:'Tzor',about:'Out most sociable and gentle tiger, likes to regulate traffic flow!'},{name:'Tzika',about:'Born in the wild, still possesses sharp instincts.'},{name:'Salma',about:'The first tiger born in the park, she\'s our main ambassador!'},{name:'Rob',about:'Playful Rob\'s favorite time of the year!'},{name:'Tom',about:'Sneaky Tom likes to add difficulty!'},{name:'Tzor',about:'Here is Tzor, the tour guide.'},{name:'Tzor',about:'Here is Tzor, still on tour!'},{name:'Dormut',about:'Jax\'s father reminds us who\'se boss!'},{name:'Rena',about:'Jax\'s mom, Rena with old nanny Joha'},{name:'Rena',about:'This is how she keeps us all on our toes!'},{name:'Dormut',about:'He\'s such a beauty!'},{name:'Rena',about:'She\'s so beautiful!'},{name:'Dormut',about:'He does not mind sitting around all day.'},{name:'Rena and Joha',about:'Always hanging out together.'}]

app.get('/', (request, response) => {
    response.render('main');
});
app.get('/cars', (request, response) => {
    response.render('cars');
});
app.get('/cats', (request, response) => {
    response.render('cats');
});
app.get('/cats/:cat_id', (request, response) => {
    console.log(request.params);
    const which = (request.params.cat_id - 1);
    console.log(cats[which])
    const cat = cats[which];
    response.render('cat', {id:request.params.cat_id,name:cat.name,about:cat.about});
});
app.get('/cars/new', (request, response) => {
    response.render('new');
});

app.listen(port, () => console.log(`Express server listening on port ${port}`));
