const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const reg = new RegExp('\\/js$', 'i');

//path to models
const models_path = path.resolve('server/models');

//mongodb connection
mongoose.connect('mongodb://localhost:27017/1999_api', {useNewUrlParser:true});
mongoose.connection.on('connected', () => console.log('MongoDB connected to 1999 API database'));

//look for .js files in server/models dir and require them here
fs.readdirSync(models_path).forEach(file => {
    if(reg.test(file)) {
        require(path.join(models_path, file));
    };
});

