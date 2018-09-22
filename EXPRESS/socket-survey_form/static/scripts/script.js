$(document).ready(() => {

    var socket = io.connect();

    $('#studentForm').submit((e) => {
        e.preventDefault(); 
        const name = $('#name').val();
        const location = $('#location').val();
        const language = $('#language').val();
        const comment = $('#comment').val();
        const data = [{name}, {location}, {language}, {comment}]
        socket.emit('submitButtonClick', data); 
    });
    
    socket.on('randomNumber', (number) => {
        console.log('got the number', number);
        $('#numberDiv').text('Process ID: ' + number);
    });

    socket.on('processForm', (data) => {
        console.log('got form data from server', data);
        const html_str = `
                        <h5>Your sumbission:</h5>
                        <p>${data[0].name}</p>
                        <p>${data[1].location}</p>
                        <p>${data[2].language}</p>
                        <p>${data[3].comment}</p>
        `
        $('#formResult').html(html_str)
    });
});