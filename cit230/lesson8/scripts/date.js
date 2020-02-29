/* Wednesday, 20 May 2020 */

let currentDate = new Date();
let fullDate;
/*Day of Week*/
let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"

];

let dayOfWeek = currentDate.getDay();

fullDate = daysOfWeek[dayOfWeek];



/*Day of Month*/
let dayOfMonth = currentDate.getDate();
fullDate +=', ' +dayOfMonth;



/*Month*/
let months =[
    'January', 
    'February', 
    'March' ,
    'April' ,
    'May',
    'June', 
    'July' ,
    'August',
    'September', 
    'October' ,
    'November',
    'December'
]
 fullDate += ' ' +months[currentDate.getMonth()];
/*Year*/
 let year =currentDate.getFullYear();
 fullDate +=' ' +year;
 console.log(fullDate);
/*Full Date*/
document.querySelector('#current-date').textContent = fullDate;
// console.log(currentDate);
// console.log(year);