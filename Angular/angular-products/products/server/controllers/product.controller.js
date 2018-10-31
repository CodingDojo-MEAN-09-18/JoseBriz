const mongoose = require('mongoose');
const Product = mongoose.model('Product');

const exists = function(v) {
    const title = v.title.toLowerCase();
    return Product.findOne({title:title})
}

module.exports = {
    index(request, response) {
        console.log('got to index');
        Product.find({})
        .then(products_db => {
            const products = products_db;
            response.json(products);
        })
        .catch(error => {
            response.json({message: "Error", error:error});
        })
    },
    create(request,response) {
        console.log('got to create')
        console.log(request.body);
        exists(request.body).then(result => {
            if (result) {
                response.status(406).json(`Product ${result.title} already exists`)
            } else {
                Product.create(request.body)
                    .then(data => response.json(data))
                    .catch(error => response.status(406).json(error.message))
            }
        })
    },
    show(request,response) {
        console.log('got to show')
        console.log(request.params);
        Product.findById(request.params._id)
            .then(product_db => {
                const product = product_db;
                console.log('got this one from DB', product);
                response.json(product);
            })
            .catch(console.log)    
    },
    update(request,response) {
        console.log('got to update')
        console.log(request.params._id, request.body);
        Product.findByIdAndUpdate(request.params._id, request.body, {new:true})
            .then(product => response.json(product))
            .catch(error => response.status(406).json(error.message))    
    },
    destroy(request,response) {
        console.log('got to delete')
        console.log(request.params._id, request.body)
        Product.findByIdAndDelete(request.params._id)
            .then(product => response.json(product))
            .catch(console.log)    
    },
}