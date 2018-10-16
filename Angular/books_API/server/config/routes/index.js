const router = require('express').Router();

module.exports = router
    .use('/books', require('./book.routes'))
    .use('/authors', require('./author.routes'));