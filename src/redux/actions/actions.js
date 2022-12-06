import { useSelector } from "react-redux"

export function getCity(city) {
    return function(dispatch) {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
            .then(response => response.json())
            .then(city => {
                if (city.name === undefined) {
                    return dispatch({ type: "CITY_NOT_FOUND" })
                } else {
                    const newCity = {
                        lon: city.coord.lon,
                        lat: city.coord.lat,
                        weather: city.weather[0].main,
                        description: city.weather[0].description,
                        img: city.weather[0].icon,
                        temp: city.main.temp,
                        min: city.main.temp_min,
                        max: city.main.temp_max,
                        pressure: city.main.pressure,
                        humidity: city.main.humidity,
                        country: city.sys.country,
                        name: city.name,
                        id: city.id,
                    }

                    dispatch({ type: "GET_CITY", payload: newCity })
                }


            })
    }
}

export function deleteCity(id) {
    return { type: "DELETE_CITY", payload: id }
}

export function getCityInfo(id) {
    return { type: "GET_CITY_INFO", payload: id }
}