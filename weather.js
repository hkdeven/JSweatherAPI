var weatherRequest = new XMLHttpRequest();

function weatherLoaded () {
  var weatherData = JSON.parse(this.responseText);
  var sunrise = weatherData.sys.sunrise;
  var sunset = weatherData.sys.sunset;
  var currentEpoch = new Date().getTime()/1000;
  var secondsSinceSunrise = currentEpoch-sunrise;
  var percentageOfDay = (currentEpoch-sunrise)/(sunset-sunrise);
  var highNoon = (sunset-sunrise)/2;
    if(secondsSinceSunrise < highNoon){
      var = (secondsSinceSunrise/highNoon)*100;
    } else {
      var percentY = (highNoon/secondsSinceSunrise)*100;
    }
  var percentY = (highNoon/secondsSinceSunrise)*100;
  console.log(percentageOfDay);
  var sun = document.getElementById("sun");
  sun.style.left = (percentageOfDay*100) +"%";
  sun.style.bottom = percentY +"%";
}

weatherRequest.addEventListener("load", weatherLoaded);
weatherRequest.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Ft.+Lauderdale,us&APPID=b809b678d51a3f4fa76bd1157e975232");
weatherRequest.send();
