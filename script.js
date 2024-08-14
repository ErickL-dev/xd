// script.js
document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'TU_API_KEY';  // Reemplaza con tu clave de API
    const ciudad = 'Lima';  // Puedes cambiar la ciudad
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&lang=es&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const clima = document.getElementById('clima');
            if (data.cod === 200) {
                clima.innerHTML = `
                    <h2>${data.name}</h2>
                    <p>Temperatura: ${data.main.temp}°C</p>
                    <p>Descripción: ${data.weather[0].description}</p>
                `;
            } else {
                clima.innerHTML = `<p>No se pudo obtener el clima para ${ciudad}. Intenta nuevamente.</p>`;
            }
        })
        .catch(error => {
            console.error('Error al obtener el clima:', error);
            const clima = document.getElementById('clima');
            clima.innerHTML = `<p>Error al obtener el clima. Revisa la consola para más detalles.</p>`;
        });
});
