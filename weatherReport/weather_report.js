function showweatherDetails(){
    event.preventDefault();
    // const city = document.getElementById('city').value;
    const lat = document.getElementById('Latitude').value;
    const lon = document.getElementById('Longitude').value;
    const apiKey = 'fa4b4c7ab0a885ee54250eadec6780c4';
    // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const apiUrl =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    fetch(apiUrl)
    .then(response => response.json())
    .then(data =>{
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}<h2>
        <p> Temperature: ${data.main.temp} &#8451;</p>
        <p>Weather: ${data.weather[0].description}`
    })
    .catch(error =>{
        console.log('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p> Failed to fetch Weather. Please try again.</p>`;
    })
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);

