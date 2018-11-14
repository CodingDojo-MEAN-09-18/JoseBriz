const User = require('mongoose').model('User');
const { Http } = require('@status/codes');
const color = require('colors');

module.exports = {
    login(request, response) {
        console.log(color.magenta('got a login request', request.body));
        User.findOne({username})
            .then(user => {
                try {
                    return User.validatePassword(password, user.password)
                        .then(valid => {
                            if (!valid) throw new Error();
                            completeLogin(request, response, user);
                        })
                } catch (e) {
                    throw new Error();
                }
            })
            .catch(error => {
                console.log(color.red(error));
                response.status(Http.Unauthorized).json('Email/passowrd combination not valid');
            });
    },
    logout(request, response) {
        console.log(color.red('logging out user', request.body));
        request.session.destroy();
        response.clearCookie('userID');
        response.clearCookie('expiration');
        response.json(true);
    },
    register(request, response) {
        console.log(color.yellow('got to request to create user', request.body)
        );
        User.create(request.body)
            .then(user => {
                console.log(color.blue('user has been created as', user));
                request.session.user = user.toObject();
                delete request.session.user.password;
                response.json(request.session.user);
            })
            .catch(error => {
                console.log(color.red(error));
                response.status(Http.UnprocessableEntity).json(Object.keys(error.errors).map(key => error.errors[key].message));
            });
    },
}

function completeLogin(request, response, user) {
    request.session.user = user.toObject();
    delete request.session.user.password;
    response.cookie('userID', user._id.toString());
    response.cookie('expiration', Date.now() + 86400 * 1000);
    response.json(request.session.user);
}