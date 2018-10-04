//require mongoose and declare Quote as model
const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');

module.exports = {
    index(request,response) {
        response.render('index')
    },
    create(request,response) {
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
    show(request,response) {
        Quote.find({}).sort('-created_at')
        .then((quotes_db) => {
            const quotes = quotes_db;
            response.render('quotes', {quotes});
        })
        .catch(error=> {
            for (let key in error.errors) {
                console.log(error.errors[key].message);
            }
        })
    }
};