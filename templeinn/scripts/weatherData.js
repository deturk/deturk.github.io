function weatherData(cityCode, cityName) {
    const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?id='+ cityCode + '&units=imperial&appid=9479da382fe4e6454b2b21f3e81c03d7';
    fetch(weatherURL)
      .then((response) => response.json())
      .then((weatherObject) => {
        // console.log(weatherObject);
    
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
    
        document.querySelector('#'+ cityName + '-weather-icon').setAttribute('src', imagesrc); 
    
        document.querySelector('#'+ cityName + '-weather-icon').setAttribute('alt', desc);
    
        // console.log(weather);
    
        document.querySelector('#'+ cityName + '-current-weather').innerHTML = '<b>Currently:</b> ' + weather.currentWeather;
        document.getElementById(cityName + '-current-temp').innerHTML = '<b>Temperature:</b> ' + weather.currentTemp  + '&deg;F';
        document.getElementById(cityName + '-high').innerHTML = '<b>High:</b> ' + weather.high + '&deg;F';
        document.getElementById(cityName + '-low').innerHTML = '<b>Low:</b> ' + weather.low + '&deg;F';
      
    });
    
};
weatherData("3689147", "barranquilla");
weatherData("5850027", "laie");
weatherData("5777544", "logan");
weatherData("6539761", "rome");
