const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=-34.64&longitude=-58.50&forecast_days=1&current_weather=true"

async function obtenerTemperatura() {
    try {
        const response = await fetch(apiUrl)
        const data = await response.json()



        console.log("Data de la Api:", data.current_weather.temperature);
        document.getElementById("temp").innerHTML = data.current_weather.temperature

    }
    catch (error) { console.log('Ocurrió un error', error) }

}

obtenerTemperatura()
