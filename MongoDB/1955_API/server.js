const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

app
.use(bodyParser.json())
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'ejs')


//connect to db
mongoose.connect('mongodb://localhost:27017/1999_api', {useNewUrlParser:true});
mongoose.connection.on('connected', () => console.log('MongoDB connected to 1999 API database'));

//schema
const {Schema} = mongoose;
const personSchema = new Schema({
    name:{
        type: String, 
        required: [true, 'Please write the name of someone that was born in 1955'], 
        trim: true}
    }, {timestamps: true});
const Person = mongoose.model('Person', personSchema);

//routes and controllers
app.get('/', (request, response) => {
    Person.find({})
            .then(people_db => {
                const people = people_db;
                response.json(people);
            })
            .catch(error => {
                response.json({message: "Error", error: error});
            });
});

app.get('/new/:name', (request, response) => {
    Person.create({name:request.params.name})
        .then(
            response.redirect('/')
        )
        .catch(error => {
            response.json({message: "Error", error: error});
        })
});

app.get('/remove/:name', (request, response) => {
    Person.deleteOne({name:request.params.name})
        .then(
            response.redirect('/')
        )
        .catch(error => {
            response.json({message: "Error", error: error});
        })
})
app.get('/:name', (request, response) => {
    Person.findOne({name:request.params.name})
        .then(person_db => {
            const person = person_db;
            response.json(person);
        })
        .catch(error => {
            response.json({message: "Error", error: error})
        })
})

app.listen(port, () => console.log(`Express listening on port ${port} 1999 API`))
