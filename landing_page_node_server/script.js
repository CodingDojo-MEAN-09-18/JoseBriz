function imgBlinker() {
    $('img').fadeOut(10);
    $('img').fadeIn(100);
}
setInterval(imgBlinker, 9050);
function h1Blinker() {
    $('h1').fadeOut(20);
    $('h1').fadeIn(50);
}
setInterval(h1Blinker, 9000);
function pBlinker() {
    $('p').fadeOut(10);
    $('p').fadeIn(30);
}
setInterval(pBlinker, 8978);
function formBlinker() {
    $('p').fadeOut(50);
    $('p').fadeIn(10);
}

// setInterval(formBlinker, 8985);
// function rayPainter() {
//     for (let i = 0; i < 11; i++) {
//     $('#rays').append('<p id="yellow"></p>')
//     }
// }



$(document).ready(function(){
    h1Blinker();
    imgBlinker();
    pBlinker();
    formBlinker();
    // rayPainter();
    $('#captain').click(function(){
        const html_str = `
                        <a href="seat/reserve"><h3>N a b u c o d o n o s s o r</h3></a>
                        <p>A starkpa  skashe  sldks | Elskglep   ejske  aum  stop  auuuum</p>
                        <p>Eke tomodato  akesh  sdumain tekleketi   adostomp  aum  stop  auummmm ||\\</p>
                        <p>Prata terke trestokko \| akalasdomus arigato gozaimaz</p>
                        <p>Karat   ekake   stats   kickkatleketi   adsmandsou   auuuuummmmm||\|</p>
        `       
        $('#placeholder').html(html_str)
    })
    $('#seatmap').click(function(){
        const html_str = `
                        <form>
                            <div class="form-group">
                                Namae: <input type="text" class="form-control" placeholder="3 legible charac min"><br>
                                Prefered when: <input class="form-control" type="date" name="now!"><br>
                                from: 
                                <select class="form-control mb-3">
                                    <option value="Asia">Asia</option>
                                    <option value="Africa">Africa</option>
                                    <option value="Union">Union</option>
                                    <option value="New World">New World</option>
                                    <option value="Oceania">Oceania</option>
                                    <option value="Groenland">Groenland</option>
                                </select>
                                <p class="form-group mb-0">Vegetarian:</p>
                                <div class="form-check mb-3">
                                    <input type="checkbox" class="form-check-input" name="vegetarian" value="yes">Yes :)<br>
                                    <input type="checkbox" class="form-check-input" name="vegetarian" value="no">no  :{<br>
                                    <input type="checkbox" class="form-check-input" name="vegetarian" value="other">other \../.<br> 
                                </div>  
                                Call me at_ to confirm;; <input type="tel" class="form-control" name="telephone"> 
                                <p>/  ' Auuuuummmmm||\  |</p>
                                <a id="reserve_button" href="#"><h3>R e S e R v</h3></a>
                            </div>
                        </form>
        `       
        $('#reservation_form').html(html_str)
    })
    $('#reservation_form').on('click','a',(function(){
        $('#reserve_title').html('<h1>! _|/_    Good   _|/_  :) <h1>')
        $('#seatmap_content').html('<a href="/"><img src="spaceship.png" alt="Spaceship Karnak"></a>');
        $('#reservation_form').html('<h6 id="success">!!/    confirm-ed transmis sion  |/|</h6>');
        $('nav').remove()
        $(function () {
            setInterval(function () {
                $('#success').fadeOut(2000).fadeIn(2000)
            }, 5);
        });
    }))
})