$(document).ready(() => {

    var socket = io.connect();

    $('#clickJoin').click(() => {
        const user = prompt("Welcome to the chatroom", "Enter name to join");
        if (user != null) {
            const chat_html = `<p>Hello ${user}!</p>`
            $('#head').empty()
            $('#head').append(chat_html);
            $('#head').append('<button>Leave</button>');
            socket.emit('new_user_joins', user);
        }
    });

    socket.on('new_user_event', (user) => {
        console.log(`Old user says:  Yeah, ${user.name} just joined in position ${user.id}`);
    });

    socket.on('you_joined', (users) => {
        const your = users[users.length-1]
        console.log(`New user says:  Thanks, I see that ${users.length} counting me users are here`);
        console.log('I am ' + your.name);
        chatSetup(your);
        generateChatRoom(users);
    });

    function chatSetup(user){
        console.log(user.name);
        let input_area = `
                        <form>
                            <input type="text" placeholder="...start chatting..." name="${user.name}" id="${user.id}" alt-data="${user.name}">
                            <button type="submit">Submit</button>          
                        </form>
        `
        $('#chatArea').append(input_area);
    }

    function generateChatRoom(users) {
        for (const user of users) {
        let output_area = `
                        <div id="${user.id}" alt-data="${user.name}">
                            <h6>${user.name}</h6>
                            <p>...what this user has written...</p>
                            <p>...goes here...</p>
                        </div>
        `
        $('#chatRoom').append(output_area);
        };
    };
});