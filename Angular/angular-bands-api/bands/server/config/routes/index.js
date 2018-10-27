const band_router = require('./band.routes');

const router = require('express').Router();

module.exports = router
  .use('bands', band_router);