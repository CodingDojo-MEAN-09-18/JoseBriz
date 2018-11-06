const router = require('express').Router();
const path = require('path');

//router.all catches all kinds of requests: get, post, etc...
//the * will catch all routes not matched on the router index
router.all('*', function(request, response) {
    response.sendFile(path.resolve('dist/public/index.html'))
})

module.exports = router;