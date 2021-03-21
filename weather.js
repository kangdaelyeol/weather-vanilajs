const COORDS = "coords"
const API_KEY = "82ca6ec2c14e98cc06f5a2f15c182acd"
const wea = document.querySelector(".js-weather");

function getWeather(lat, lgt){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lgt}&appid=${API_KEY}`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const tem = json.main.temp;
        const name = json.name;
        wea.innerText = `tem: ${tem} @ name: ${name}`
    })
}

function saveCoords(location){
    localStorage.setItem(COORDS, JSON.stringify(location));
}

function successLoc(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const location = {
        latitude,
        longitude
    }
    saveCoords(location);
    getWeather(location.latitude, location.longitude);
}

function errorLoc(){
    console.log("error Loc");
}
function askforCoords(){
    navigator.geolocation.getCurrentPosition(successLoc, errorLoc)
}


function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askforCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();