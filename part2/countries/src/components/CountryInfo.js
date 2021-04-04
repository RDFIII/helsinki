import React from 'react';
import Weather from './Weather';

const CountryInfo = ({ country }) => {
    return (
        <div>
            <h2>{country.name}</h2>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h3>Languages:</h3>
            <ul>
                { country.languages.map(language => <li key={language.name}>{language.name}</li> ) }
            </ul>
            <img src={country.flag} alt='Flag' />
            <Weather country={country} />
        </div>
    );
};

export default CountryInfo;