const auth_router = require('./auth.routes');
const author_router = require('./author.routes');

const router = require('express').Router();


module.exports = router
  .use('/auth', auth_router)
  .use('/authors', author_router)