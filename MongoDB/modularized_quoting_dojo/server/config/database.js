//dependencies
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const reg = new RegExp('\\.js$', 'i')    // the \\ escapes the dot and it is read as a dot, which is what we want; the 'i' makes it case insensitive

//path to the models (2 ways to do it)
// const models_path = path.join(__dirname, '../models'); //gets to the current directory 
const models_path = path.resolve('server/models'); //starts from the process root of the project

//mongodb connection
mongoose.connect('mongodb://localhost:27017/quoting_dojo', {useNewUrlParser:true});
mongoose.connection.on('connected', () => console.log('MongoDB connected'));

fs.readdirSync(models_path).forEach(file => {
    if (reg.test(file)) {
        require(path.join(models_path, file))
    }
})
