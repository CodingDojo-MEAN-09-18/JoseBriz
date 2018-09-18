$(document).ready(function(){
    $('#houses').on("click","div",function(){
        which = $(this).attr('data-id')
        $.get('https://www.anapioficeandfire.com/api/houses/'+which,function(response){
            console.log(response)
            var html_str = ""
            var name = response.name
            var region = response.region
            var coatOfArms = response.coatOfArms
            var words = response.words
            var founded = response.founded
            html_str = `
                    <h4 class="card-title">${name}</h4>
                    <h5 class="card-subtitle mb-2 text-muted">Region: ${region}</h5>
                    <h6 class="card-text">Words: ${words}</h6>
                    <p class="card-text">Founded: ${founded}</p>
                    
            `
            $('#placeholder').html(html_str)
        });
    });
});