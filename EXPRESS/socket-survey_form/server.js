const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

//this is static files like html, js, css, images
app.use(express.static('static'));
//this is for templating with ejs; all templates in views dir
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//body parser middleware
app.use(bodyParser.urlencoded({ extended:true } ));
//root route
app.get('/', (request, response) => {
  response.render('index');
});

let results = {};

// app.get('/result', (request, response) => {
//   response.render('results', {name:results.name, location:results.location, language:results.language, comment:results.comment});
// });

app.post('/process', (request, response) => {
    results = request.body;
    console.log(results);
    response.redirect('/');  	
});

const server = app.listen(port, () => console.log(`Express server listening on port ${port}`));
const io = require('socket.io')(server);

io.on('connection', function (socket) {
  console.log('user connection detected');
  
  socket.on('submitButtonClick', (data) => {
    console.log('heard click with form data ', data);
    randNumber();
    processForm(data);  
  });

  function randNumber(){
    const number = Math.floor(Math.random() * Math.floor(1000));
    console.log('generated random number', number);
    socket.emit('randomNumber', number);    
  };

  function processForm(results){
    socket.emit('processForm', results)
  };
});





