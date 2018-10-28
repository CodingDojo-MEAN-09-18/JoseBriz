const mongoose = require('mongoose');
const Author = mongoose.model('Author');

const idGen = function() {
    min = 1;
    max = 1000;
    return Math.floor(Math.random() * (max - min)) + min;
}

const exists = function(v) {
    const name = v.name.toLowerCase();
    return Author.findOne({name:name})
}

module.exports = {
    index(request, response) {
        Author.find({})
        .then(authors_db => {
            const authors = authors_db;
            response.json(authors);
        })
        .catch(error => {
            response.json({message: "Error", error:error});
        })
    },
    create(request,response) {
        console.log(request.body);
        exists(request.body).then(result => {
            if (result) {
                console.log('author', result.name + " already exists")
            } else {
                const id = idGen();
                const name = request.body.name;
                const author = new Author({id: id, name: name});
                author.save()
                    .then(response.json(author))
                    .catch(console.log)
            }
        })
    },
    show(request,response) {
        console.log(request.params);
        Author.findById(request.params.id)
            .then(author_db => {
                const author = author_db;
                console.log('got this one from DB', author);
                response.json(author);
            })
            .catch(console.log)    
    },
    update(request,response) {
        console.log(request.params.id, request.body);
        Author.findByIdAndUpdate(request.params.id, request.body, {new:true})
            .then(response.json(author))
            .catch(console.log)    
    },
    destroy(request,response) {
        console.log(request.params.id, request.body)
        Author.findByIdAndDelete(request.params.id)
            .then(response.json(author))
            .catch(console.log)    
    },
}