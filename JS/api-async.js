const consumoApi = async (id) => {
    try {
        const respuesta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Buenos+Aires,arg&APPID=1e1e033a2019ae7af56c77434279a20d`)
        const respuestaJson = await respuesta.json()
        console.log("Trajo?", respuestaJson)
        const { createApp } = Vue
        createApp({
            data() {
                return {
                    Longitud: respuestaJson.coord.lon,
                    Ciudad_de: respuestaJson.sys.name,
                    Temperatura: respuestaJson.temp,
                }
            }
        }).mount("#api")

    } catch (error) { console.log("Hubo un error", error)} 
}