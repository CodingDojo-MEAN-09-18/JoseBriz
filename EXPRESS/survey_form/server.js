const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req,res) => { 
  res.render('index');
});

const results=[];

app.get('/result', (req,res) => {
  console.log(results);
  const result = results[results.length - 1]
  res.render('results', {name:result.name, location:result.location, language:result.language, comment:result.comment});
});

app.post('/process', (req,res) => {
  console.log(req.body);
  results.push(req.body);
  res.redirect('/result');  	
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
  
