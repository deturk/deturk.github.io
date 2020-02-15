let f, t, s;
t=50;
s=10;

if(t <= 50 && s>= 3) {
f=35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t* Math.pow(s, 0.16)
} else {
    f= 'N/A';
}

document.querySelector('current-temp').innerHTML = '${t}&deg;'; // '50&deg;';
document.querySelector('WindSpeed').innerHTML  = '${t}&deg;'; // '50&deg;'
