const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

app.use(express.static('views'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req,res) => { 
  res.render('index');
});

let results={};

app.get('/result', (req,res) => {
  console.log(results);
  // const result = results
  res.render('results', {name:results.name, location:results.location, language:results.language, comment:results.comment});
});

app.post('/process', (req,res) => {
  console.log(req.body);
  // results.push(req.body);
  results = req.body;
  res.redirect('/result');  	
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
  
