const Author = require('mongoose').model('Author');
const Book = require('mongoose').model('Book');

module.exports = {
    index(request,response) { 
        Author.find({})
          .then(authors => response.json(authors))
          .catch(console.log);
    },
    create(request,response) {
        Author.create(request.body)
          .then(author => response.json(author))
          .catch(error => {
              const errors = Object.keys(error.errors.map(key => error.errors[key].message))
              response.status(402).json(errors);
          });
    },
    show(request,response) {
        Author.findById(request.params.author_id)
          .populate('books')
          .then(author => reqponse.json(author))
          .catch(console.log);
    },
    update(request,response) {
        Author.findByIdAndUpdate(request.params.author_id, request.body, {new:true})
          .then(author => response.json(author))
          .catch(console.log)
    },
    delete(request,response) {
        Author.findByIdAndRemove(request.params.author_id)
          .then(author => response.json(author))
          .catch(console.log)
    },
}