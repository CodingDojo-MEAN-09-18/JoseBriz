const User = require('mongoose').model('User');
const { Http } = require('@status/codes');

module.exports = {
    login(request, response) {
        console.log('request.body');
        const { username, password } = request.body;
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
          .catch(() => {
              response.status(Http.Unauthorized).json('Email/password combination not valid');
          })
    },
    logout(request, response) {
        //destroy our session
        request.session.destroy();
        //get rid of the cookies
        response.clearCookie('userID');
        response.clearCookie('expiration');
        //send back true or the user object to finish the process
        response.json(true);
    },
    register(request, response) {
        console.log('got request to create user', request.body)
        User.create(request.body)
          .then(user => {
              console.log('user has been created as', user);
              request.session.user = user.toObject();
              delete request.session.user.password; 
              response.json(request.session.user);
            // completeLogin(request, response, user);
            // send email to user saying has been created
          })
          .catch(error => {
              response
                .status(Http.UnprocessableEntity)
                .json(
                  Object.keys(error.errors)
                    .map(key => error.errors[key].message)
              );
          });
    },
};

function completeLogin(request, response, user) {
    //with toObject() we convert the mongoose document into a leaner object with mongoose-specific stuff
    request.session.user = user.toObject();
    delete request.session.user.password;
    //we create some cookies, which live on the response and are passed through the response header
    //_id is an object, so we convert it to string
    response.cookie('userID', user._id.toString());
    //session already takes care of this, but this is an exercise to create cookies.  this tells how long session lasts based on user activity
    response.cookie('expiration', Date.now() + 86400 * 1000);
    //we finally respond with the user object
    response.json(request.session.user); 
}

