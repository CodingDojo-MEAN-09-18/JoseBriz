//requirements
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const color = require('colors');
const mongoose = require('mongoose');
const {Schema} = mongoose;
const session = require('express-session');
const flash = require('express-flash');
const port = process.env.PORT || 8000;
const app = express();

//build app
app
.use(express.static(path.join(__dirname, 'static')))
.use(bodyParser.urlencoded({extended:true}))
.use(session({
    secret:'dojo',
    resave: false,
    saveUninitialized: false,
    cookie: {secure:false, maxAge: 60000}
}))
.use(flash())
.set('view engine', 'ejs')
.set('views', path.resolve('views'))

//mongodb connection
mongoose.connect('mongodb://localhost:27017/messageboard', {useNewUrlParser:true});
mongoose.connection.on('connected', () => console.log('MongoDB connected'));

//schemas
const commentSchema = new Schema({
    signature: {
        type: String,
        required: [true, 'Please sign your comment']
    },
    comment: {
        type: String,
        required: [true, 'Please write a comment']
    },
}, {timestamps: {createdAt:'created_at', updatedAt:false}});
const Comment = mongoose.model('Comment', commentSchema);

const messageSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please include your name']
    },
    message: {
        type: String,
        required: [true, 'Please write a message'],
        minlength: [10, 'Make your message longer than 2 characters'],
    },
    comments: [commentSchema],
}, {timestamps: {createdAt:'created_at', updatedAt:false}});
const Message = mongoose.model('Message', messageSchema);

//routing
app.get('/', (request,response) => {
    Message.find({}).sort('-created_at')
        .then((all_messages) => {
            const messages = all_messages;
            response.render('index', {messages});
        })
        .catch(error => {
            console.log(color.yellow(error))
        })
    response.render('index');
});
//post new message
app.post('/message', (request,response) => {
    Message.create(request.body)
        .then(() => {
            Message.find({}).sort('-created_at')
                .then((all_messages) => {
                    const all_msgs = all_messages;
                    response.json({messages:all_msgs, code:201});
                })
                .catch(error => {
                    console.log(color.yellow(error))
                })
        })
        .catch(error => {
            let all_errors = [];
            for (let key in error.errors) {
                all_errors.push(error.errors[key].message)
            }
            response.json({errors:all_errors, code:406});
        });
});
//post comment
app.post('/comment/:_id', (request,response) => {
    Comment.create(request.body)
        .then((comment) => {
            Message.findOneAndUpdate({_id:request.params._id}, {$push:{comments:comment}})
                .then(() => {
                    console.log(color.magenta(comment))
                })
                .catch(error => {
                    console.log(color.blue(error));
                })
        })
        .catch(error => {
            let all_errors = [];
            for (let key in error.errors) {
                all_errors.push(error.errors[key].message)
            }
            response.json({errors:all_errors, code:406});
        });
});

//port connection
app.listen(port, () => console.log(`Express listening on port ${port}`));

