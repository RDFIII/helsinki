import React from 'react';
import CountryInfo from './CountryInfo';

const CountryList = ({ countries, country, setCountry }) => {

    const filteredCountries = countries.filter(search => search.name.toLowerCase().includes(country.toLowerCase()));

    return (
        <div>

            {

                filteredCountries.length > 10 ?
                <p>Too many matches, specify another filter</p>
                :
                filteredCountries.length === 1 ?
                <CountryInfo country={filteredCountries[0]} /> 
                :
                <ul>
                    {
                        filteredCountries.map(search => (
                            <li key={search.name}>
                                {search.name} <button onClick={() => setCountry(search.name)}>show</button>
                            </li>
                        ))
                    }
                </ul>

            }

        </div>
    )

}

export default CountryList;