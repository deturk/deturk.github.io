var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.getElementById("currentYear").innerHTML = days[currentDate.getDay()] + ", " + months[currentDate.getMonth()]+ " " + currentDate.getDate() + ", " + currentYear