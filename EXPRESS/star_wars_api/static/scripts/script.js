$(document).ready(function(){
    $('#peopleBtn').click(function(){
        //request over to our own server for handling
        $.ajax({
            url:'/people',
            dataType: 'json',
            success: (data) => {
            //log data to be sure we have it before working with the DOM
            console.log('data from SWAPI:',data.results);
            let people = data.results;
            for (person of people) {
                $('#placeholder').append(`<li>${person.name}</li>`);
            };
            }});
        return false
    });
    $('#planetsBtn').click(function(){
        //request over to our own server for handling
        $.ajax({
            url:'/planets',
            dataType: 'json',
            success: (data) => {
            //log data to be sure we have it before working with the DOM
            console.log('data from SWAPI:',data.results);
            let planets = data.results;
            for (planet of planets) {
                $('#placeholder').append(`<li>${planet.name}</li>`);
            };
            }});
        return false
    });
});