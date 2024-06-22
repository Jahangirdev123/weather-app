const apiKey = '8d7849ea3cdde96b62503b2a5769a7b2';

document.getElementById('get-weather-btn').addEventListener('click', getWeatherData);

async function getWeatherData() {
    const cityInput = document.getElementById('city-input').value;
    if (!cityInput) {
        alert('Please enter a city or location');
        return;
    }

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        console.error(error);
        alert('Error fetching weather data');
    }
}

function displayWeatherData(data) {
    console.log(data);
    const weatherDataDiv = document.getElementById('weather-data');
    const weatherDataHTML = `
        <div class="card border-primary p-5 m-5">
            <div class="card-body">
                <h5 class='card-title'>City: ${data.name}</h5>
                <p>Temperature: ${Math.round(data.main.temp - 273.15, 2)}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Longitude: ${data.coord.lon}</p>
                <p>Weather: ${data.weather[0].description}</p>
            </div>
        </div>
    `;
    weatherDataDiv.innerHTML = weatherDataHTML;
}