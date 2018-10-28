const crud_router = require('./crud.routes');

const router = require('express').Router();

module.exports = router
  .use('cruds', crud_router);