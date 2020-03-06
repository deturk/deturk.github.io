const townURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(townURL)
  .then(response => {
      response.json()
      .then(
          response => {
            const towns = response.towns;

            const fishHaven = getTownObject('Fish Haven');
            const fishHavenName = 'fishHaven';
            getTownData(fishHaven, fishHavenName);  

            const preston = getTownObject('Preston');
            const prestonName = 'preston';
            getTownData(preston, prestonName);  

            let sodaSprings = getTownObject('Soda Springs');
            let sodaSpringsName = 'sodaSprings';
            getTownData(sodaSprings, sodaSpringsName);  

            function getTownObject(name){
                return towns.find(element => element.name === name);
            }
            
            function getTownData (town, townName) {
                document.querySelector('#'+ townName + 'Img').setAttribute('src', 'images/towns/' + town.photo);
                document.querySelector('#'+ townName + 'Motto').textContent = '"'+town.motto+'"';
                document.querySelector('#'+ townName + 'Year').textContent = town.yearFounded;
                document.querySelector('#'+townName+'Population').textContent = town.currentPopulation;
                document.querySelector('#'+townName+'Rain').textContent = town.averageRainfall;
            }

            // dataCounter();
          }
      )
  });

//   // DATA COUNTER
// function dataCounter(){
//     $('.counter').each(function () {
//         $(this).prop('Counter',0).animate({
//             Counter: $(this).text()
//         }, {
//             duration: 3000,
//             easing: 'swing',

//             step: function (now) {
//                 $(this).text(Math.ceil(now));
//             }
//         });
//     });
// }
 