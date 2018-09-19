const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios')
const port = process.env.PORT || 8000;

const app = express();

//static files
app.use(express.static('static'));

//templating
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//capturing posted data
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req,res) => { 
  res.render('index');
});  
app.get('/people', (req,res) => {
  axios.get('https://swapi.co/api/people')
  .then((data) => {
    // log the data to be sure we have it before we dive into manipulating the DOM
    console.log("got the data", data.data);
    res.send(data.data);
    })
  .catch((error) => {
    // see if there is an error before moving on
    // console.log("got errors", error);
    res.json(error);
  });     
});  
app.get('/planets', (req,res) => {
  axios.get('https://swapi.co/api/planets')
  .then((data) => {
    // log the data to be sure we have it before we dive into manipulating the DOM
    console.log("got the data", data.data);
    res.send(data.data);
    })
  .catch((error) => {
    // see if there is an error before moving on
    // console.log("got errors", error);
    res.json(error);
  });     
});  

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

  