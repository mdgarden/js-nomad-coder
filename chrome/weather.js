const API_KEY = "99cd5b30d9936ceec8426f337594342b";
const COORDS = 'coords';

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitiude:latitude,
        longitude:longitude
    };
    saveCoords(coordsObj);
}

function handleGeoError(){
    console.log("Error");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords == null){
        askForCoords();
    } else {

    }
}

function init(){
    loadCoords();
}

init();