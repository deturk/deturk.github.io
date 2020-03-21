const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?zip=83263,us&units=imperial&appid=7888257a900f09d918661c7cc6513fa9';
fetch(weatherURL)
  .then((response) => response.json())
  .then((weatherObject) => {
    console.log(weatherObject);

//TESTING
    let weather = {};

    weather.currentWeather = weatherObject.weather[0].main;
    weather.currentTemp = Math.round(weatherObject.main.temp);
    weather.high = Math.round(weatherObject.main.temp_max);
    weather.low = Math.round(weatherObject.main.temp_min);
    weather.humidity = weatherObject.main.humidity;
    weather.windSpeed = Math.round(weatherObject.wind.speed);


//WEATHER ICON

    const imagesrc = 'images/weather-icon/' + weatherObject.weather[0].icon + '.png';  
    const desc = weatherObject.weather[0].description;  

    document.getElementById('weather-icon').setAttribute('src', imagesrc); 

    document.getElementById('weather-icon').setAttribute('alt', desc);

    // console.log(weather);

    let t = weather.currentTemp;
    let s = weather.windSpeed;
    if(weather.low <= 50 && s > 3){
        weather.windChill = Math.round(35.74 + 0.6215*t - 35.75*Math.pow(s, 0.16)  + 0.4275*t*Math.pow(s, 0.16)) + '&deg;F';
    } else{
        weather.windChill = 'N/A';
    }

    document.getElementById('current-weather').innerHTML = '<b>Currently:</b> ' + weather.currentWeather;
    document.getElementById('current-temp').innerHTML = '<b>Temperature:</b> ' + weather.currentTemp  + '&deg;F';
    document.getElementById('high').innerHTML = '<b>High:</b> ' + weather.high + '&deg;F';
    document.getElementById('low').innerHTML = '<b>Low:</b> ' + weather.low + '&deg;F';
    document.getElementById('humidity').innerHTML = '<b>Humidity:</b> ' + weather.humidity + ' %';
    document.getElementById('wind-chill').innerHTML = '<b>Wind Chill:</b> ' + weather.windChill;
    document.getElementById('wind-speed').innerHTML = '<b>Wind Speed:</b> ' + weather.windSpeed + ' mph';

});
