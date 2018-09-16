$(document).ready(function() {

    //save searched city in local storage before anything else
    document.getElementById('button').onclick = function() {
        localStorage.setItem('last_city', document.getElementById('city').value);
    };
    const last_city = localStorage.getItem('last_city');


    //this clears local storage to start fresh
    document.getElementById('clear').onclick = function() {
        localStorage.clear();
        
    };

    //automatically make weather api call if there is a city in local storage, or display message if not
    // const last_city = (localStorage.getItem('last_city'))
    
    if (localStorage.length === 0 || last_city === "") {
        $('.wea_report').append("Please enter name of a city to get weather report");
            return false;
    
    } else {

        $.get('https://api.openweathermap.org/data/2.5/weather?q='+last_city+'&units=imperial&APPID=8f54c0b062bfe33557da58c53ef0b917', function(wea_info) {
            // console.log(wea_info);
            for(var i = 0; i < wea_info.weather.length; i++){
                var wea_str = "";
                wea_str += "<ul>";
                wea_str += "<li>"+wea_info.weather[i].description+"</li>"
                wea_str += "</ul>";
            }
            var html_str = `
                            <div id="wea_data">
                                <h1>${wea_info.name},</h1>
                                <h2>${wea_info.sys.country}</h2>
                                <p>${wea_str}</p>
                                <table class="table">
                                    <tr>
                                        <th></th>
                                        <th scope="col">Current</th>
                                        <th scope="col">Max</th>
                                        <th scope="col">Min</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">Temperature</th>
                                        <td>${wea_info.main.temp}&deg;F</td>
                                        <td>${wea_info.main.temp_max}&deg;F</td>
                                        <td>${wea_info.main.temp_min}&deg;F</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Wind speed</th>
                                        <td>${wea_info.wind.speed} miles/hr</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Humidity</th>
                                        <td>${wea_info.main.humidity}%</td>
                                    </tr>
                                </table>
                            </div>    
                            `
            $('.wea_report').append(html_str);
        }, 'json');
    }
    // don't forget to return false so the page doesn't refresh
    return false;
});