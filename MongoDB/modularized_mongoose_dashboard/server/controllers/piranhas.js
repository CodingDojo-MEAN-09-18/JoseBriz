const mongoose = require('mongoose');
const Piranha = mongoose.model('Piranha');

module.exports = {
    index(request,response) {
        Piranha.find({})
        .then(piranhas_db => {
            const piranhas = piranhas_db;
            response.render('index', {piranhas});
        })
        .catch(error => {
            for (let key in error.errors) {
                request.flash('get_error', error.errors[key].message)
                console.log(error.errors[key].message);
            }
        });
    },
    new(request,response) {
        response.render('new');
    },
    create(request,response) {
        Piranha.create(request.body)
            .then(piranha => {
                console.log('created ',piranha);
                response.redirect('/');
            })
            .catch(error => {
                for (let key in error.errors) {
                    request.flash('create_error', error.errors[key].message);
                }
                response.redirect('/piranha/new');
            });
    },
    show(request,response) {
        app.get('/piranha/:_id', (request, response) => {
            const which = request.params._id;
            Piranha.find({_id:which})
                .then((piranha_db) => {
                    console.log(piranha_db);
                    piranha = piranha_db;
                    response.render('piranha', {piranha});
                })
                .catch(error => {
                    console.log(error);
                    response.redirect('/');
                });    
            });
    },
    edit(request,response) {
        const which = request.params._id;
        Piranha.find({_id:which})
            .then((piranha_db) => {
                console.log(color.yellow(piranha_db));
                piranha = piranha_db;
                response.render('edit', {piranha});
            })
            .catch(error => {
                console.log(error);
                response.redirect('/');
            });
    },
    update(request,response) {
        const which = request.params._id;
        for ([entry,data] of Object.entries(request.body)) {
            if (data != '') {
                console.log(which,entry,data);
                let key = entry
                let what = {[key]:data};
                console.log(what)
                Piranha.findByIdAndUpdate(which,what)
                    .then((piranha_db) => console.log(`Successfully updated`))
                    .catch(error => console.log(error));
            }
        }
        response.redirect('/');
    },
    delete(request,response) {
        const which = request.params._id;
        Piranha.remove({_id:which})
            .then(() => {
                console.log('deleted successfully')
                response.redirect('/');
            })
            .catch((error) => console.log(error));
                response.redirect('/');
    },
};

        