const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const color = require('colors');
const port = process.env.PORT || 8000;
const app = express();

const users = [];

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

io.on('connection', socket => {
    console.log('user connection detected, these are the logged users', users);
    
    socket.on('new_user_joins', (user) => {
        users[users.length] = ({name:user, id:users.length});
        // console.log(color.yellow(users), color.red(users.length));
        io.emit('new_user_event', users[users.length-1]);
        socket.emit('you_joined', users);
    })

});



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