$(document).ready(function(){
    var points = 0
    var adder = 0
    $(this).on('click','a',function(e){
        e.preventDefault();
        var level = $(this).attr('data-id')
        console.log("answer this "+level+" question")
        if(level === 'hard'){
            adder = 300
        } else if(level === 'medium'){
            adder = 200
        } else {
            adder = 100
        }
        // console.log(adder)        
        // console.log("good luck! your point total is "+points)
        $.get('https://opentdb.com/api.php?amount=1&difficulty='+level,function(response){
            // console.log(response)
            var cat = response.results[0].category
            var difficulty = response.results[0].difficulty
            var Q = response.results[0].question
            var A = []
            correct_answer = response.results[0].correct_answer
            A.push(correct_answer)
            incorrect_answers = response.results[0].incorrect_answers
            for (var answer in incorrect_answers){
                A.push(incorrect_answers[answer])
            }
            for (var i = 0; i < A.length; i++) {
                var answer = A[i]
                for (var j = i - 1; j > - 1 && A[j] > answer; j--) {
                    A[j + 1] = A[j]
                }
                A[j + 1] = answer
            }
            // console.log(A) // this is the sorted answer list
            var html_body = `
                            <div class="card p-3">
                            <p class="m-3 border-round">Category: ${cat}</p>
                            <h4 class="card-title">${Q}</h4>
                            <ul id="answers" class="card-body"></ul>
                            </div>
            `
            $('#placeholder').html(html_body)
            for(a in A){
                $('#answers').append('<li data-id="'+A[a]+'"><h4>'+A[a]+'</h4></li>');
            }
        });
    });
    $('#placeholder').on("mouseover","li",function(){
        $(this).css("color","orange");
        $(this).mouseleave(function(){
            $(this).css("color","black");
        });
    });    
    $('#placeholder').on("click","li",function(){
        var answer = $(this).attr('data-id')
        var html_str = ""
        if(answer == correct_answer){
            points = points + adder
            html_str += "<h4 class='mt-3 right'>Correctomundo!!! You made "+adder+" points!</h4>"
        } else {
            html_str += "<h4 class='d-block mt-3 wrong'>That is not the answer! The correct answer was: <span style='color:blue; font-weight:bold; font-style:italic'>"+correct_answer+"</span>."
        }
        $('#placeholder').html(html_str);
        $('#point_total').html(points);
    });
});

