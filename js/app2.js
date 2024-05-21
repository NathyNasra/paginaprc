async function fetchWeather(city) {
    // Definir la URL de la API del clima
    const url = "https://api.openweathermap.org/data/2.5/weather";
    // Clave de API para acceder a la API del clima
    const apiKey = "21e3195e9bfeb6879e788ec605b09ab0";
    // Unidades de medida para la temperatura (en este caso, Celsius)
    const units = "metric";
    // Idioma para los datos de respuesta (en este caso, español)
    const lang = "es";

    // Realizar una solicitud GET a la API del clima
    const response = await fetch(`${url}?q=${city}&appid=${apiKey}&units=${units}&lang=${lang}`);
    // Convertir la respuesta a formato JSON
    const data = await response.json();
    // Devolver los datos del clima
    return data;
}

// Función para actualizar la tarjeta con los datos del clima
async function updateWeatherCard(city) {
    // Obtener los datos del clima para la ciudad especificada
    const weatherData = await fetchWeather(city);
    console.log(weatherData);
    // Actualizar el elemento HTML con el nombre de la ciudad
    document.getElementById("ciudad").textContent = weatherData.name;
    // Actualizar el elemento HTML con la temperatura
    document.getElementById("temp").textContent = weatherData.main.temp;
    // Actualizar el elemento HTML con la descripción del clima
    document.getElementById("clima").textContent = weatherData.weather[0].description;
    // Actualizar el elemento HTML con la humedad
    document.getElementById("humedad").textContent = weatherData.main.humidity;
    // Actualizar el elemento HTML con la velocidad del viento
    document.getElementById("viento").textContent = weatherData.wind.speed;
    // Obtener el código del icono del clima
    const iconCode = weatherData.weather[0].icon;
    // Construir la URL del icono del clima
    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
    // Actualizar el elemento HTML con el ícono del clima
    document.getElementById("weatherIcon").src = iconUrl;
    // Establecer el atributo "alt" del ícono del clima con la descripción del clima
    document.getElementById("weatherIcon").alt = weatherData.weather[0].description;
}

// Llamar a la función updateWeatherCard con la ciudad de "Buenos Aires"
updateWeatherCard("Trelew");

/*
    async es una palabra clave que se utiliza para definir funciones asincrónicas. Las funciones asincrónicas retornan una promesa y permiten utilizar la palabra clave await dentro de ellas.
    await es una palabra clave que se utiliza para esperar la resolución de una promesa. En el contexto de una función asincrónica, await pausa la ejecución de la función hasta que la promesa se resuelva y devuelve el resultado.
    En el código proporcionado, la función fetchWeather es asincrónica porque realiza una solicitud a la API del clima, que es una operación asíncrona. Al utilizar await junto con fetch, la función espera a que la solicitud se complete y devuelve los datos del clima.
    En la función updateWeatherCard, utilizamos await al llamar a fetchWeather para obtener los datos del clima para una ciudad específica. Esto asegura que la función espere a que se completen las solicitudes antes de actualizar la tarjeta con los datos del clima.
*/
