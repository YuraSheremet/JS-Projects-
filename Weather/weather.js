var humidity, pressure, temperature, windSpeed, weatherSummary, button;

function getElement(id) {
    return document.getElementById(id);
}

window.onload = function() {
    humidity = getElement('current-humidity');
    pressure = getElement('current-pressure');
    temperature = getElement('current-temperature');
    windSpeed = getElement('current-wind-speed');
    weatherSummary = getElement('weather-summary');
    button = getElement('getCoordsPosition');
    button.addEventListener('click', getPosition, false);
};


function getPosition() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude,
                lon = position.coords.longitude;
            showWeather(lat, lon);   
        });
    } else {
        alert('This browser does not support geolocation!');
    }
}

function showWeather(lat, lon) {
    console.log(lat, lon);
}