import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Weather = ({ country }) => {

    const [weatherInfo, setWeatherInfo] = useState(null);

    useEffect(() => {
        const params = {
            access_key: process.env.REACT_APP_API_KEY,
            query: country.capital
        };

        axios
            .get('http://api.weatherstack.com/current', {params})
            .then(response => setWeatherInfo(response.data.current));
    }, [country]);

    return (
        <div>
            <h3>Current Weather in {country.capital}</h3>
                {console.log(process.env.REACT_APP_API_KEY)}
                {
                    weatherInfo ?
                <>
                <p><strong>Temperature: </strong>{weatherInfo.temperature} Celcius</p>
                <img src={weatherInfo.weather_icons[0]} alt="Weather Icon" />
                <p><strong>Wind: </strong>{weatherInfo.wind_speed} MPH, <strong>Direction:</strong> {weatherInfo.wind_dir}</p>
                </>
                :
                
                <p>Loading weather data...</p>

                }
            
        </div>
    )

}

export default Weather;