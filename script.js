$(document).ready(function(){
//choose where to encapsulate each var
var latitude;
var longitude;
var cities = [];
$("#btn1").on('keydown click', function (event){
    console.log('event Listener trigger');
    event.preventDefault();
    $(".card").css("visibility", "visible");
    console.log(event.target.previousElementSibling.value);
    call5Day(event.target.previousElementSibling.value);
});

function call5Day(text){

    cities.push(text);//need to query the city name and append it to cities []
    var apiKey = "23fd1f20c53a56b7531bf24a86c7d691";
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + text + "&units=imperial" + "&appid=" + apiKey;
    cities.cityName = text;//check this, prob not right
    console.log(cities);
    
    $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){
        //grab all params(temp,wind,humidity,icon,)
        var date = new Date(response.list[0].dt_txt).toLocaleDateString();
        var temp = response.list[3].main.temp;
        var icon = response.list[3].weather[0].icon;
        var altDesc = response.list[3].weather[0].description;
        var humidity = response.list[3].main.humidity;
        
        $("#date0").html(date);
        $("#img0").attr({
            src : "http://openweathermap.org/img/wn/" + icon + "@2x.png",
            alt : altDesc})
                    .html(altDesc);
        $("#temp0").html(temp);
        $("#hum0").html(humidity);
        console.log(response.list[0].main.humidity);
        console.log(response.list[0].wind.speed);
        //append vars
        
        console.log(date);

        latitude    = response.city.coord.lat;
        longitude   = response.city.coord.lon;
        callOneCall(latitude, longitude);
        // appendResponse(//not sure yet);
    });
    var history= JSON.parse(window.localStorage.getItem("history")) || []

    };

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
    };
//append result to correct div
    function appendResponse(selector){
        $("h5#0").html(cityName);
    

    }    

//clear div function


//set local storage


//get local storage

//var icon = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
    
});