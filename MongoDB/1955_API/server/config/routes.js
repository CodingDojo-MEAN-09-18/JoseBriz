//RESTFUL ROUTES NOT IMPLEMENTED

const person_controller = require('../controllers/people');

//export routing with callback = app
module.exports = (function(app) {
app.get('/', person_controller.index);
app.get('/person', person_controller.new);
app.post('/person', person_controller.create);
app.get('/person/:id', person_controller.show);
app.get('/person/:id/edit', person_controller.edit);
app.post('/person/:id/edit', person_controller.update);
app.post('/person/:id/delete', person_controller.delete);
});