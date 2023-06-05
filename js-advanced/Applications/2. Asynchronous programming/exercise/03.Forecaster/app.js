function attachEvents() {
    const inputLocation = document.querySelector('input#location');
    const getWeatherButton = document.querySelector('input#submit');
    const forecast = document.querySelector('div#forecast');
    const currentWeather = document.querySelector('div#current');
    const upcomingWeather = document.querySelector('div#upcoming');

    const conditions = {
        Sunny: '&#x2600', // ☀
        "Partly sunny": '&#x26C5', // ⛅
        Overcast: '&#x2601', // ☁
        Rain: '&#x2614', // ☂
        Degrees: '&#176', // °
    }

    getWeatherButton.addEventListener('click', getWeather);

    function getWeather(){
        fetch('http://localhost:3030/jsonstore/forecaster/locations')
        .then(res => res.json())
        .then(data => {
            const city
        })
    }

}

attachEvents();