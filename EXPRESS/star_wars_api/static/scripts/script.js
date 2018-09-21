$(document).ready(function(){
    let search = '';
    $('#peopleBtn').click(function(){
        search = 'people';
        $('#placeholder').empty();
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
        search = 'planets'
        $('#placeholder').empty();
        // console.log($('#placeholder')[0].childElementCount)
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
                // console.log($('#placeholder')[0].childElementCount)

            };
            }});
        return false
    });
    $('#placeholder')[0].onchange = ()=>{
        // let count = $('#placeholder')[0].childElementCount;
        console.log('change noted');
        // return count 
    };
    const target = $('#placeholder')[0].childElementCount;
    
    // if $('#placeholder')[0].childElementCount) === 0
    $('.navigation').toggle();
});