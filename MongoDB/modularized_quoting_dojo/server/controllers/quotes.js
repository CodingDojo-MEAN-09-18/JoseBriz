//require mongoose and declare Quote as model
const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');

module.exports = {
    index: function(request,response) {

    },
    create: function(request,response) {
        Quote.create(request.body)
        .then(quote => {
            console.log('created quote:',quote);
            response.redirect('/');
        })
        .catch(error => {
            for (let key in error.errors) {
                request.flash('post_quote', error.errors[key].message);
            }
            response.redirect('/');
        })
    },
    destroy: function(request,response) {

    }
};