const Author = require('mongoose').model('Author');
const Book = require('mongoose').model('Book');

module.exports = {
    index(request, response) {
        Book.find({})
            .populate('author')
            .then(books => {
                console.log({books});
                response.render('books/index', {books});
            })
            .catch(console.log);
    },
    show(request, response) {

    },
    edit(request, response) {
        Author.find({})
            .then(authors => {
                console.log({authors});
                response.render('books/new', {authors});
            }) 
            .catch(console.log);
    },
    new(request, response) {

    },
    update(request, response) {

    },
    craete(request, response) {
        // const book = new Book(request.body);

        // book.save()
        Book.create(request.body)
            .then(book => {
                console.log('created book', book);

                return Author.findById(book.author)
                    .then(author => {
                        author.books.push(book.id);

                        return author.save()
                    });
            })
            .then(() => response.redirect('/books'))
            .catch(error => {
                const errors = Object.keys(error.errors)
                    .map(key=>error.errors[key].messages);
                response.render('books/new', {errors});
            });
    },
    destroy(request, response) {
        Book.findByIdAndDelete(request.params.id)
            .then(book => reponse.redirect('/books/index'))
            .catch(console.log);
    },
}; 