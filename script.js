$(document).ready(function(){
//choose where to encapsulate each var
var latitude;
var longitude;
$("#btn1").on('keydown click', function (event){
    console.log('event Listener trigger');
    event.preventDefault();
    console.log(event.target.previousElementSibling.value);
    call5Day(event.target.previousElementSibling.value);
});

function call5Day(text){

    var apiKey = "23fd1f20c53a56b7531bf24a86c7d691";
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + text + "&units=imperial" + "&appid=" + apiKey;
    var cityName = text;
    
    $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){
  
        console.log(response.list[0].main.temp);
        console.log(response.list[0].main.feels_like);
        console.log(response.list[0].main.humidity);
        console.log(response.list[0].wind.speed);


        latitude    = response.city.coord.lat;
        longitude   = response.city.coord.lon;
        callOneCall(latitude, longitude);
        var newDiv1 = $('<h4 id="cityLine">');
        var newDiv2 = $('<h4 id="tempLine">');
        var newDiv3 = $('<h4 id="humidityLine">');
        var newDiv4 = $('<h4 id="windLine">');
        var newDiv5 = $('<h4 id="uvLine">');
        $('#fiveDay').append(newDiv1, newDiv2, newDiv3, newDiv4, newDiv5);
        $("h5#0").html(cityName);
        console.log(cityName);
});}

    function callOneCall(lat, lon){
        console.log(latitude);
        console.log(longitude);
        var apiKey = "23fd1f20c53a56b7531bf24a86c7d691";
        var queryURL = "http://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;

        
        $.ajax({
            url: queryURL,
            method: "GET"
            }).then(function(response){
                var uvIndex = response.current.uvi;
                console.log(response);
                });   
//append result to correct div


//clear div function


//set local storage


//get local storage

//var icon = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
    };
});