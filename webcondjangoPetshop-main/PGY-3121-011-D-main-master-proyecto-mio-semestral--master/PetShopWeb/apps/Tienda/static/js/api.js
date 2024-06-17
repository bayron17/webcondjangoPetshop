function load(){
    api();
}
function api(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Santiago,cl&appid=471c074182d2fc697bb63ea0667a24b6')
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            let clima = document.getElementById("clima");
            clima.innerHTML += (data.main.temp - 273.15).toFixed(1) + "°C";
        })
        console.log(clima);
}

