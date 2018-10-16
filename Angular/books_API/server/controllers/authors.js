const Author = require('mongoose').model('Author');
const Book = require('mongoose').model('Book');


module.exports = {
    index(request, response) {
        Author.find({})
            .then(authors => {
                console.log(authors);
                response.render('authors/index', {authors})
            })
            .catch(console.log);     
    },
    show(request, response) {
        Author.findById(request.params.id)
            .populate('books')
            .then(author => {
                console.log(author);
                response.render('authors/show', {author})
            })
            .catch(console.log);    
    },
    edit(request, response) {
        Author.findById(request.params.id)
            .populate('books')
            .then(author => {
                console.log(author);
                response.render('authors/edit', {author})
            })
            .catch(console.log);  
    },
    new(request, response) {
        response.render('authors/new');
    },
    update(request, response) {
        Author.findByIdAndUpdate(request.params.id, request.body)
            .then(() => {
                response.redirect('/authors');
            })
            .catch(console.log);
    },
    craete(request, response) {
        console.log(request.body);
        const author = new Author(request.body);

        author.save()
            .then(author => {
                console.log('created author', author);
                response.redirect('/authors');
            }) 
            .catch(error => {
                const errors = Object.keys(error.errors).map(key=>error.errors[key].messages);
                response.render('authors/new', {errors});
            });
    },
    destroy(request, response) {
        Athor.findByIdAndDelete(request.params.id)
            .then(author => response.redirect('/authors/index'))
            .catch(console.log);
    },
};  