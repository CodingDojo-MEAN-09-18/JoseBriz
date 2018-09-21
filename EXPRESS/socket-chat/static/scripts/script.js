$(document).ready(() => {

    var socket = io.connect();


    //user clicks on join button, welcome prompt asks for name to join    
    $('#clickJoin').click(() => {
        const user = prompt("Welcome to the chatroom", "Enter name to join");
        if (user != null) {
            const chat_head = `<p>Hello ${user}!</p>`
            $('#chat_head').empty()
            $('#chat_head').append(chat_head);
            $('#chat_head').append('<button id="leave_chatroom" class="btn btn-danger">Leave</button>');
            const chat_room = `<div id="chatRoom" class="col"></div>`
            $('#rightCol').append(chat_room);
            socket.emit('new_user_joins', user);
        };
    });

    //chat entry event
    $('#chatArea').on('submit', 'form', (e) => {
        e.preventDefault();
        const chat_entry = $('#chatForm').serialize();
        $('input').val('');
        $('input').attr('placeholder','');
        console.log(chat_entry);
        socket.emit('chat_entry', chat_entry);
    })

    //existing users detect arrival of new user
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

    //new user load chat room    
    socket.on('you_joined', (users, chats) => {
        const your = users[users.length-1]
        window.name = your.id;
        console.log(`New user says:  Thanks, I see that ${users.length} counting me users are here`);
        console.log('I am ' + your.name);
        console.log(window)
        chatSetup(your);
        existingUsers(users);
        generateChatRoom(chats);
    });

    //create space where user can write and submit messages
    function chatSetup(user){
        console.log(user.name);
        let input_area = `
                        <form id="chatForm" class="form-group">
                            <input type="text" placeholder="...start chatting..." name="${user.name}" id="${user.id}" class="form-control">
                            <button type="submit" class="btn btn-success">Submit</button>          
                        </form>
        `
        $('#chatArea').append(input_area);
    };

    //create existing user list for new user
    function existingUsers(users) {
        for (const user of users) {
            let name_tag = `
                        <div id="existingUsers">
                            <p id="${user.id}">${user.name}</p>
                        </div>
            `
        $('#chatUsers').append(name_tag);
        };

    };

    //create space where conversations are displayed for new user    
    function generateChatRoom(chats) {
        for (const entry of chats) {
        let output_area = `
                            <p>${entry}</p>
        `
        $('#chatRoom').append(output_area);
        };
    };

    //append new entry
    socket.on('chat_entry', (entry) => {
        $('#chatRoom').append(entry);
    })

    //when user closes chatroom with button
    $(document).on('click','#leave_chatroom',() => {
        socket.emit('leaving_chatroom', window.name);
    });

    socket.on('goodbye', () => {
        $('.container').html('<h1>Good Bye!</h1>');
    });

    //when user closes window
    window.addEventListener('unload', (window) => {
        socket.emit('leaving_chatroom', window.self);
    }); 


    document.onclick = function(event) {
        socket.emit('event', event.which);
    }

});