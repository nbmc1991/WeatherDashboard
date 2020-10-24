$(document).ready(function () {


    var appid = "bb5b2f13428854e8a798d889841af0fc";
    var searchValue = $("#search-value");
    var searchBtn = $("seachBtn");
    var forecast = $("#forecast");

   
   
    

    $("#searchBtn").on("click", function () {
        var searchValue = $("#search-value").val();
    //searchvalue variable is saving the city the user input
        $("#search-value").val("")
        weatherSearch(searchValue)


    });


    function weatherSearch(searchValue){
        $.ajax({
            method:"GET",
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue+ "&appid=bb5b2f13428854e8a798d889841af0fc&units=imperial",
            dataType: "JSON"

            
        }).then(function(response){
           
            
            createRow(searchValue)
          
            //getting items in our response 
            var temp = $(".temp").text(response.main.temp);
            var humedo =$(".humidity").text(response.main.humidity);
            // console.log(humedo);
            var icon = "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
            var speed = $("#wind-index").text(response.wind.speed);
           

           $(".wind-index").html(speed);

             // adding icon to html
            $(".icon").attr("src",icon);
         
                
           
    });
   
    
   };


//    function showForecast (response){
//        console.log(response)
   
    
//     var myqueryURL = "api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=bb5b2f13428854e8a798d889841af0fc";
   
//     $.ajax({
//         url : myqueryURL,
//         method: "GET"
//     }).then(function(respuesta){
//         $("#forecast").text(JSON.stringify(respuesta));
//     });
   
   
   

   

    //this function will create a new row to save history of searched cities
    function createRow(text){
        var listItem = $("<li>").addClass("list-group-item list-group-item-action").text(text);
        $(".search-history").prepend(listItem)
      
    }

    //this function will display the results of the weather search and will create a new div with the class of weather results to show results
    // function displayWeather(text){
    //     var weatherResults = $("<div>").addClass("weather-results").text(text);
    //     $("#results").append(weatherResults)
    
    // }
//  get times from moment and display in result div
    let now = moment().format("MMMM Do ");
    let nowDisplay = moment().format('dddd, MMMM Do')

    var currentDate = $(".footer");
   currentDate.text(nowDisplay)
   console.log(currentDate)



});



    
    // var icon = "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
    // var temp = Math.floor(data.main.temp);
    // var humidity = data.main.humidity;
    // var wind = data.wind.speed;
    // var weather = data.weather[0].description;

    // $(".icon").attr("src", icon);

    // $(".temp").append(temp);
    // $(".weather").append(weather);
