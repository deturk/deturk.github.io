// Various in page variables
let date = new Date();
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
let weekDay = weekDays[date.getDay()];
let dayNum = date.getDate();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[date.getMonth()];
let year = date.getUTCFullYear();
let display = weekDay + ", " + dayNum + " " + month + " " + year;

const aside  = document.querySelector("aside"); 
const forecast = document.querySelector(".fore_contain"); 
const summary = document.querySelector(".summary");

    // Footer declarations
    document.getElementById("curdate").innerHTML = display;
    document.getElementById("year").innerHTML = year;


//Original function to check for loadable data
function doInputOutput() {
    // Checks to see if the pancakes aside is in the document. (Working)
    if (aside != null){
        pancakes();
    }

    // Check to see if the forecast is in the document. (Working)
//  if (forecast != null) {
//        forecasting();
//  }
//  Calling the function from the webpage with a zipcode passed in instead.

//  if (summary != null) {
//      weatherConditions();
//  }
//  Calling the function from the webpage with a zipcode passed in instead.

    
}

// Pancake function to hide the aside banner. (Working)
function pancakes() {
    if (weekDay === "Friday") {
        aside.style.display ="block";
    } else {
        aside.style.display = "none";
    }
}

// function to show the weekdays and their temps. (Working with JS variables)
function forecasting(zipCode) {

    const apiURLF = 'https://api.openweathermap.org/data/2.5/forecast?zip=' + zipCode + '&APPID=d371a45960fcec8ac86717a7368063eb&units=imperial';
    
    
    
    
    fetch(apiURLF)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        let i = 1;

        jsObject.list.forEach(
            forecast => {
                if(forecast.dt_txt.includes('18:00')) {
                    let forecastdate = new Date(forecast.dt_txt.replace(' ', 'T'));
                    let day = weekDays[forecastdate.getDay()]; 
                    //insert into each day
                    document.getElementById("day" + i).innerHTML = day;

                    // insert high temp
                    document.getElementById("tempH" + i).innerHTML = forecast.main.temp_max.toFixed(0) + "&deg;";


                    // Class note, to get min temp check documentation from OWM and find the hour that has the min temp then create an if statement for the low.
                    // insert low temp
                    // document.getElementById("tempL" + i).innerHTML = forecast.main.temp_min.toFixed(0) + "&deg;";

                    // Setting the variables for the image.
                    document.getElementById("tempL" + i).setAttribute('src', 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png');
                    document.getElementById("tempL" + i).setAttribute('alt', forecast.weather[0].icon + '.png');


                    //increase counter vairable
                    i++;
                }
            }
        )
    });
}

// function that does Hero image summary for current temps. (Working)
function weatherConditions(zipCode) {
    let temp, wind, humid, windchill, conditions;
    const apiURLW = 'https://api.openweathermap.org/data/2.5/weather?zip='+zipCode+'&APPID=d371a45960fcec8ac86717a7368063eb&units=imperial';


    fetch(apiURLW)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);
            
       

    temp = jsObject.main.temp.toFixed(0);
    wind = jsObject.wind.speed.toFixed(0);
    tempdeg = temp + "&deg;";
    windspeed = wind + " mph";
    humid = jsObject.main.humidity + "&percnt;"
    windchilldisplay = jsObject.main.feels_like.toFixed(0) + "&deg;";
    conditions = jsObject.weather[0].main;

    
    /*
    //OLD WINDCHILL CALCULATOR
    if(temp <= 50 && wind >= 3) {
        windchill = 35.74 +  0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);
    } else {
        // document.querySelector("#winddiv").style.display="none";
        windchilldisplay = tempdeg;
    }
    */

    document.getElementById("curTemp").innerHTML = tempdeg;
    document.getElementById("windSpeed").innerHTML = windspeed;
    document.getElementById("humidity").innerHTML = humid;
    document.getElementById("windchill").innerHTML = windchilldisplay;
    document.getElementById("conditions").innerHTML = conditions;
});






}


// Adaptive Menu (Working)
function adaptiveMenu() {
    let links = document.getElementById("navigation");
    if (links.className === "navigation") {
        links.className += ".responsive";
    } else {
        links.className = "navigation";
    }
}

WebFont.load({
    google: {
      families: [
         'Bebas Neue',
         'Lato',
         'Yanone Kaffeesatz'
      ]
    }
  });