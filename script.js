  const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '19d25f1e4amsh0505c5f6e7b9cd5p1033cfjsn7b494ef9a06c',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
    const getWeather = (city) => {
      fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
          cityName.innerHTML = city
          cloud_pct.innerHTML = response.cloud_pct
          feels_like.innerHTML = response.feels_like
          humidity.innerHTML = response.humidity
          humidity1.innerHTML = response.humidity
          max_temp.innerHTML = response.max_temp
          min_temp.innerHTML = response.min_temp
          sunrise.innerHTML = response.sunrise
          sunset.innerHTML = response.sunset
          temp.innerHTML = response.temp
          temp1.innerHTML = response.temp
          wind_degrees.innerHTML = response.wind_degrees
          wind_speed.innerHTML = response.wind_speed
          wind_speed1.innerHTML = response.wind_speed
          console.log(response);
        })
        .catch(err => console.error(err));
    }
    submit.addEventListener("click", (e) => {
      e.preventDefault();
      getWeather(city.value);
    })
    getWeather("Delhi");

    let tr = document.querySelector("table>tbody").querySelectorAll("tr");
    const cities = ["lucknow", "agra", "kolkata", "mumbai", "indore", "pune"];
    
    for (let i = 0; i < cities.length; i++) {
      fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + cities[i],
        options
      )
        .then((response) => response.json())
        .then((response) => {
          let allparams = {
            0: response.cloud_pct,
            1: response.feels_like,
            2: response.humidity,
            3: response.max_temp,
            4: response.min_temp,
            5: response.sunrise,
            6: response.sunset,
            7: response.temp,
            8: response.wind_degrees,
            9: response.wind_speed,
          };
    
          for (let j = 0; j < 10; j++) {
            let id = tr[i].querySelectorAll("td")[j];
    
            id.innerHTML = allparams[j];
          }
        });
    }