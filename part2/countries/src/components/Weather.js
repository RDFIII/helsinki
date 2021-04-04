import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ country }) => {

    const [weatherInfo, setWeatherInfo] = useState(null);

    useEffect(() => {
        const params = {
            access_key: '3c2ec43c9a61d4adcf0289a8723efe74',
            query: country.capital
        };

        axios
            .get('http://api.weatherstack.com/current', {params})
            .then(response => setWeatherInfo(response.data.current));
    }, [country]);

    return (
        <div>
            <h3>Current Weather in {country.capital}</h3>
            
                {
                    weatherInfo ?
                <>
                <p><strong>Temperature: </strong>{weatherInfo.temperature} Celcius</p>
                <img src={weatherInfo.weather_icons[0]} alt="Weather Image" />
                <p><strong>Wind: </strong>{weatherInfo.wind_speed} MPH, {weatherInfo.wind_dir}</p>
                </>
                :

                <p>Loading weather data...</p>

                }
            
        </div>
    )

}

export default Weather;