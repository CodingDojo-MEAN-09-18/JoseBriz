const { auth_controller } = require('../../controllers');
const router = require('express').Router();

module.exports = router
.post('/login', auth_controller.login)
.delete('/logout', auth_controller.logout)
.post('/register', auth_controller.register);