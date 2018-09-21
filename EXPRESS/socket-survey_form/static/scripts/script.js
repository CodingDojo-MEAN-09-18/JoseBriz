$(document).ready(() => {

    var socket = io.connect();

    $('#studentForm').submit((e) => {
        e.preventDefault(); 
        const formData = $('#studentForm').serialize();
        socket.emit('submitButtonClick', formData); 
    });
    
    socket.on('randomNumber', (number) => {
        console.log('got the number', number);
        $('#numberDiv').text('Process ID: ' + number);
    });

    socket.on('processForm', (results) => {
        // let data = results.query;
        // data = JSON.parse(data);
        console.log('got form data from server', results);
        $('#formResult').text(results)
    });
});