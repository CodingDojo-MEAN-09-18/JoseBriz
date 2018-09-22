const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const color = require('colors');
const port = process.env.PORT || 8000;
const app = express();

let users = {};
let chats = [];

app
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

app
  .use(express.static(path.join(__dirname, 'static')))
  .use(bodyParser.urlencoded({ extended:true } ))

app.get('/', (request, response) => {
    response.render('index', users);
})

const server = app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

const io = require('socket.io')(server);

class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    };
};

class Message {
    constructor(content, user) {
        this.content = content;
        this.user = user;
    };
};

//new user joins

io.on('connection', socket => {
    console.log('user connection detected, these are the logged users', color.red(users));
    
    socket.on('new_user_joins', (name) => {
        const user = new User(socket.id, name);
        users[socket.id] = user
        console.log(color.yellow(users), color.red(Object.keys(users).length));
        io.emit('new_user_event', user);
        socket.emit('you_joined', users, chats);  
        // needs fixing on client side, no longer array
    });

    socket.on('chat_entry', (entry) => {
        // console.log(entry, users[socket.id]);
        const message = new Message(entry, users[socket.id]);
        chats.push(message)
        io.emit('chat_entry', message);
    })

    socket.on('leaving_chatroom', (user) => {
        console.log('leaving_chatroom', color.blue(users[socket.id]));
        socket.emit('goodbye');
        io.emit('user_out', users[socket.id])

    });

    socket.on('disconnect', () => {
        console.log(socket.id + " disconnected!!");
        delete users[socket.id];
        io.emit('disconnection', socket.id);
        return users;
    })

});

function removeUser(users){
    Object.entries(users).splice(indexUser,1);
    console.log(users);
    return users;
}

function indexUser(user){
    const array = Object.keys(users);
    console.log(array)
    const index = array.indexOf(user)
    console.log(index);
    return index;
}

// function createId(name) {
//     const number = Math.floor(Math.random() * Math.floor(1000));
//     const user_id = name + number;
//     console.log(color.magenta(user_id));
//     return user_id
// }


// function filterUser(which) {
//     const new_arr = [];
//     for (const user of users) {
//         if(user.id != which) {
//             new_arr.push(user);
//         };
//     };
//     users = new_arr;
// };





// socket.on('alpha', function (data) { 
//     // socket.emit will respond back to the socket client that triggered this 'alpha' listener
//     socket.emit('updateClient', { data: 5 });
// });
// socket.on('beta', function (data) { 
//     // io.emit will message all socket clients 
//     io.emit('updateAllClients', { data: 5 });
// });
// socket.on('gamma', function (data) { 
//     // socket.broadcast will message all socket clients except the one that triggered the 'gamma' listener
//     socket.broadcast.emit('updateAllExceptOne', { data: 5 });
// });