    const apikey = "aecd56047137ffbb47dd26c14935379f";
        const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");

        async function chekWeather(city) {
            try {
                const response = await fetch(apiurl + city + `&appid=${apikey}`);

                // Check if city is valid (404 error handling)
                if (response.status == 404) {
                    document.querySelector(".city").innerHTML = "Invalid City Name";
                    document.querySelector(".temp").innerHTML = "--";
                } else {
                    var data = await response.json();

                    console.log(data); // View data in console

                    // Update HTML elements
                    document.querySelector(".city").innerHTML = data.name;
                    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
                    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

                    // Example logic to change images based on weather
                    if (data.weather[0].main == "Clouds") {
                        weatherIcon.src = "/images/clouds.png";
                    }
                    else if (data.weather[0].main == "Clear") {
                        weatherIcon.src = "/images/clear.png";
                    }
                    else if (data.weather[0].main == "Rain") {
                        weatherIcon.src = "/images/rain.png";
                    }
                    else if (data.weather[0].main == "Drizzle") {
                        weatherIcon.src = "/images/drizzle.png";
                    }
                    else if (data.weather[0].main == "Mist") {
                        weatherIcon.src = "/images/mist.png";
                    }
                }

            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        }


        searchBtn.addEventListener("click", () => {
            chekWeather(searchBox.value);
        });

        chekWeather("London");