$(document).ready(function(){
    $('#to_github').submit(function(e){
        e.preventDefault();
        console.log("button pressed!")
        url = $(this).attr('action');
        $.get(url, function(response){
            var username = response.login;
            $('#placeholder').html('<h1>'+username+'</h1>')
        });
    });
});