const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios')
const port = process.env.PORT || 8000;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req,res) => { 
    res.render('index');
  });  

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
  });

  