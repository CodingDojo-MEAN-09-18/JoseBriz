const { auth_controller } = require('../../controllers');
const router = require('express').Router();

module.exports = router
//
.post('/login', auth_controller.login)
//
.delete('/logout', auth_controller.logout)
//
.post('/register', auth_controller.register)



//post routes:  angular expects to send data with a post
//get routes:  don't use get because crawlers tend to follow links and fetch get routes
//delete:  does not send data