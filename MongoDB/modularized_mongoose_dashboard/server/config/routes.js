//require mongoose and declare Piranha model
const piranha_controller = require('../controllers/piranhas');

//export routing with callback = app
module.exports = (function(app) {
    app.get('/', piranha_controller.index);
    app.get('/piranha/new', piranha_controller.new);
    app.post('/piranha/new', piranha_controller.create);  
    app.get('/piranha/:_id', piranha_controller.show);  
    app.get('/piranha/edit/:_id', piranha_controller.edit);
    app.post('/piranha/edit/:_id', piranha_controller.update);
    app.get('/piranha/delete/:_id', piranha_controller.delete);
});

