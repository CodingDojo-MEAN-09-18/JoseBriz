const Band = require('mongoose').model('Band');

module.exports = {
    index(request,response) {
        console.log('controller getting all bands')
        Band.find({})
          .then(bands => response.json(bands))
          .catch(console.log);
    },
    create(request,response) {
        console.log('controller got the request to create band', request.body)
        Band.create(request.body)
          .then(band => response.json(band))
          .catch(error => {
              const errors = Object.keys(error.errors).map(key => error.errors[key].message);
              response.status(402).json(errors);
          });
    },
    show(request,response) {
        console.log('controller got the request to show band', request.params._id)
        Band.findById(request.params._id)
          .then(band => response.json(band))
          .catch(console.log);
    },
    update(request,response) {
        console.log('controller got the request to update band', request.params._id, request.body);
        Band.findByIdAndUpdate(request.params._id, request.body, {new:true})
          .then(band => response.json(band))
          .catch(error => {
            const errors = Object.keys(error.errors).map(key => error.errors[key].message);
            response.status(402).json(errors);
        });
    },
    rate(request, response) {
        console.log('building rating in db:', request.body)
        Band.findById(request.params._id)
          .then(band => {
              band.ratings.push(request.body);
              return band.save()
          })
          .catch(console.log);
    },
    destroy(request,response) {
        console.log('controller got a request to delete band id', request.params._id);
        Band.findByIdAndDelete(request.params._id)
          .then(band => response.json(band))
          .catch(console.log)
    },
}