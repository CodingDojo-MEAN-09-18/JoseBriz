$(document).ready(() => {

    var socket = io.connect();


    //1  user clicks on join button, welcome prompt asks for name to join    
    $('#clickJoin').click(() => {
        const user = prompt("Welcome to the chatroom", "Enter name to join");
        if (user != null) {
            const chat_head = `<p>Hello ${user}!</p>`
            $('#chat_head').empty()
            $('#chat_head').append(chat_head);
            $('#chat_head').append('<button id="leave_chatroom" class="btn btn-danger">Leave</button>');
            const chat_room = `<div id="chatRoom" class="col"></p></div>`
            $('#rightCol').append(chat_room);
            socket.emit('new_user_joins', user);
        };
    });

    //2  new user load chat room    
    socket.on('you_joined', (users, chats) => {
        const you = users[socket.id]
        // window.name = you.id;
        console.log(`New user says:  Thanks, I see that ${Object.keys(users).length} counting me users are here`);
        console.log('I am ' + you.name);
        // console.log(window)
        chatSetup(you);
        existingUsers(users);
        generateChatRoom(chats);
    });
    
    //3   chat entry event
    $('#chatArea').on('submit', 'form', (e) => {
        e.preventDefault();
        const content = $('input').val();
        console.log(content);
        $('input').val('');
        $('input').attr('placeholder','');
        socket.emit('chat_entry', content);
    })

    //2c  existing users detect arrival of new user
    socket.on('new_user_event', (user) => {
        console.log(`Old user says:  Yeah, ${user.name} just joined in position ${user.id}`);
        const html_str = `<p id="${user.id}">${user.name}</p>`
        $('#existingUsers').append(html_str).hide().fadeIn("slow");
    });

    //remaining users detect user logout
    socket.on('user_out', (user) => {
        console.log(`Remaining user says: yeah, "#${user}" has left`);
        $('p').remove(`#${user}`);
    })

    //2  create space where user can write and submit messages
    function chatSetup(user){
        let input_area = `
                        <form id="chatForm" class="form-group">
                            <input type="text" placeholder="...start chatting..." name="${user.id}" alt-data="${user.name}" class="form-control">
                            <button type="submit" class="btn btn-success">Submit</button>          
                        </form>
        `
        $('#chatArea').append(input_area);
    };

    //2a  create existing user list for new user
    function existingUsers(users) {
        const active = Object.entries(users);
        active.forEach((user) => {
            if (user[0] != '_locals') {
                let name_tag =`
                                <div id="existingUsers">
                                    <p id="${user[0]}">${user[1].name}</p>
                                </div>    
                `
                $('#chatUsers').append(name_tag);
            }
        })
    };

    //2b  create space where conversations are displayed for new user    
    function generateChatRoom(chats) {
        console.log("all the chats, ", chats);
        for (const message of chats) {
            const msg_string = `
                            <div id="entry" class="card" style="width: 18rem;">
                                <p style="font-style: italic;" class="card-header p-0">${message.user.name}</p>
                                <p class="card-body p-0">${message.content}</p>
                            </div>
        `
        $('#chatRoom').append(msg_string);
        };
    };

    //4  append new entry
    socket.on('chat_entry', (message) => {
        console.log("emission from server to all: ",message.user.name, message.content);
        const msg_string = `
                            <div id="entry" class="card" style="width: 18rem;">
                                <p style="font-style: italic;" class="card-header p-0">${message.user.name}</p>
                                <p class="card-body p-0">${message.content}</p>
                            </div>
        `
        $('#chatRoom').append(msg_string);
    })

    //when user closes chatroom with button
    $(document).on('click','#leave_chatroom',() => {
        socket.emit('leaving_chatroom', user[socket.id]);
    });

    socket.on('goodbye', () => {
        $('.container').html('<h1>Good Bye!</h1>');
    });

    socket.on('disconnection', (user) => {
        console.log(user+" disconnected");
        $('#'+user+'').remove()
    })


});