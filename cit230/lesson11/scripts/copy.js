
// weather summary update 


const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=7888257a900f09d918661c7cc6513fa9&units=imperial';


fetch(apiURL)
    .then(response => response.json())
    .then(
        jsObject => {
            console.log(jsObject);

            let f,t,s;

             // getting current temp
            t = jsObject.main.temp;
            document.querySelector('#current-temp').innerHTML = `${t.toFixed(0)}&deg;`;

            // getting wind speed
            s = jsObject.wind.speed;
            document.querySelector('#wind-speed').innerHTML = `${s.toFixed(0)} mph`;

            if (t <= 50 && s >= 3) {
              f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
              document.querySelector('#wind-chill').innerHTML = f.toFixed(0) + '&deg;';
            } else {
              f = 'N/A'
              document.querySelector('#wind-chill-div').classList.add('hidden');
            }

              document.getElementById('weatherDesc').textContent = 
              jsObject.weather[0].main;
            
            const weatherImg = document.querySelector('#weatherImg');
            
            // setting icon
            const image = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
            weatherImg.setAttribute('src', image);
            
            // adjusting icon alt text
            let alt = jsObject.weather[0].description;
            weatherImg.setAttribute('alt', alt);
        }
    );

// Forcast fetch to get the 5 day forcast

const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=7888257a900f09d918661c7cc6513fa9&units=imperial';

fetch(forecastURL)
    .then(response => response.json())
    .then(
      jsObject => {
        console.log(jsObject);

        let counter = 1;

        jsObject.list.forEach(forecast => {
          if (forecast.dt_txt.includes('18:00')){
            console.log(forecast.dt_txt);

            let forecastdate = new Date(forecast.dt_txt.replace(' ', 'T'));
            let dayOfWeek = daysOfWeek[forecastdate.getDay()];
            
            document.getElementById(`day${counter}`).textContent = dayOfWeek;

            document.getElementById(`temp${counter}`).innerHTML = forecast.main.temp.toFixed(0) + '&deg;';

            counter++;
          }
        });

      }
    );


// aside pancakse at the park 
const checkDay = new Date();
const aside = document.querySelector('aside');

if (checkDay.getDay() !== 5) {
  aside.style.display = 'none';
} else {
  aside.style.display = 'block';
}


// attaching active class to active links
const navBar = document.querySelector('.navigation');
const links = navBar.getElementsByClassName('lnk');

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}

WebFont.load({
  google: {
    families: [
      'Lato'
    ]
  }
});

const townURL = 'https://byui-cit230.github.io/weather/data/towndata.json';