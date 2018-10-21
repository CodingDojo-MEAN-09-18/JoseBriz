const Book = require('mongoose').model('Book');
const Author = require('mongoose').model('Author');

module.exports = {
    index(request, response) { 
        Book.find({})
          .populate('author')
          .then(books => response.json(books))
          .catch(console.log);
    },
    show(request, response) { 
        Book.findById(request.params.book_id)
          .populate('author')
          .then(book => {response.json(book)})
          .catch(console.log);
    },
    create(request, response) { 
        Book.create(request.body)
            .then(book => {
                console.log('created book', book);
                return Author.findById(book.author)
                    .then(author => {
                        author.books.push(book._id);
                        return author.save()   // doing multiple returns to use same catch
                            .then(response.json(book))  
            })
        })  
        // this catch is only good for validation errors, so if expecting other kind of errors, simply console log while we learn how to handle others
        .catch(error => {
            // collect the errors into an errors array
            const errors = Object.keys(error.errors)
                // map every field that failed to a message
                .map(key => error.errors[key].message);
                console.log(errors);
                // change the response status to unprocessable entity.  if we don't change status, it will go out ot client as having no errors
                response.status(402).json(errors);
        });    
    },
    update(request, response) { 
        console.log('controller got a request to update', request.params._id, request.body);
        Book.findByIdAndUpdate(request.params._id, request.body, {new: true})
          .then(book => response.json(book))
          .catch(console.log)
    },
    delete(request, response) { 
        console.log('controller got a request to delte book id', request.params._id)
        Book.findByIdAndRemove(request.params._id)
          .then(book => response.json(book))
          .catch(console.log)
    },
}
