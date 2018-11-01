const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const reg = new RegExp('\\.js$', 'i');

// path to models
const models_path = path.resolve('server/models');

// connect to DB
mongoose.connect('mongodb://localhost:27017/players', {useNewUrlParser:true});
mongoose.connection.on('connected', () => console.log(`MongoDB connected to Player Manager Angular-Express App!`));

// synchronously read models 
fs.readdirSync(models_path).forEach(file => {
    if (reg.test(file)) {
        require(path.join(models_path, file));
    }
});