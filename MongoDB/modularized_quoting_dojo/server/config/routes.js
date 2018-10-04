 //require mongoose and declare Quote as model
const quote_controller = require('../controllers/quotes.js')

//export routing with a function with callback = app
module.exports = (function(app) {
    app.get('/', quote_controller.index);
    app.post('/quotes', quote_controller.create);
    app.get('/quotes', quote_controller.show);
});