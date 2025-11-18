const apikey = "a04004e41ab26a066fa6810ef5983a85";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const buttonvalue = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch(`${apiurl + city}&appid=${apikey}`);

    if (response.status == "404") {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        const data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weathericon.src = "assest/clouds.png";
        }
        else if (data.weather[0].main == "Rain") {
            weathericon.src = "assest/rain.png";
        }
        else if (data.weather[0].main == "Clear") {
            weathericon.src = "assest/clear.png";
        }
        else if (data.weather[0].main == "Mist") {
            weathericon.src = "assest/mist.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "assest/drizle.png";
        }
        else if (data.weather[0].main == "Smoke") {
            weathericon.src = "assest/smog_17640063.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";


    }

}


buttonvalue.addEventListener("click", () => {
    checkweather(searchbox.value);
})
searchbox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkweather(searchbox.value);
    }
});