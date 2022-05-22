const API_KEY = '2df7fe6f4025feb914e5a24f91ccc435';

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const weatherData = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    
    fetch(weatherData).then(response => response.json()).then(data =>{
        const weatherDiv1 = document.querySelector("#weather span:first-child");
        const weatherDiv2 = document.querySelector("#weather span:last-child");
        const dataName = data.name;
        const weather = data.weather[0].main;

        weatherDiv1.innerText = dataName;
        weatherDiv2.innerText = `${weather} / ${Math.floor(data.main.temp)}℃`;

    });
}

function onGeoError(){
    alert("error");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);