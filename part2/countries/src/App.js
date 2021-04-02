import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {

  const [countries, setCountries] = useState([]);
  const [names, setNames] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFormChange = (event) => {
    setSearchTerm(event.target.value);
  
  }

  const handleUpdatingCountries = () => {
    const filteredCountries = [];
    
      countries.map( country => {
        if(country.name.toLowerCase().includes(searchTerm.toLowerCase())){
          return filteredCountries.push(country)
        }
      })
      
      if (filteredCountries.length === countries.length) {
        return <h2>Search countries</h2>
      } else if (filteredCountries.length > 10) {
        return <p>Too many matches, specify another filter</p>
      } else if (filteredCountries.length === 1) {
        console.log(filteredCountries[0])
        return <CountryOfOne 
                  name={filteredCountries[0].name} 
                  capital={filteredCountries[0].capital} 
                  population={filteredCountries[0].population}
                  languages={filteredCountries[0].languages.map(l => <li key={l.name}>{l.name}</li> )}
                  flag={filteredCountries[0].flag}
                />
      } else {
        return filteredCountries.map( country => {
          return <li key={country.name}>{country.name}</li>
        })
      }
    }
 

  return (
    <div>
      <SearchForm handleFormChange={handleFormChange} />
      <CountryDisplay names={handleUpdatingCountries()}/>
    </div>
  );
}

const CountryOfOne = ({ name, capital, population, languages, flag }) => (
  <div>
    <h2>{name}</h2>
    <p>Capital: {capital}</p>
    <p>Population: {population}</p>
    <h3>Languages</h3>
    <ul>{languages}</ul>
    <img src={flag} />
  </div>
)

const SearchForm = ({ handleFormChange }) => (
  <div>
    <form>
      <input 
        type="text"
        placeholder="Search"
        onChange={handleFormChange}
        />
    </form>
  </div>
)

const CountryDisplay = (props) => (
  props.names
)



export default App;
