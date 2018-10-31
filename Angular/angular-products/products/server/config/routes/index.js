const product_router = require('./product.routes');

const router = require('express').Router();

module.exports = router
  .use('/products', product_router);