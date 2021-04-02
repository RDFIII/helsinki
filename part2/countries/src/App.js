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
    const filteredNames = [];
    
      countries.map( country => country.name)
      .map( function(name, i) { 
        if(name.toLowerCase().includes(searchTerm.toLowerCase())){
          return filteredNames.push(name)
        } })
        
        return filteredNames.map(name => {
          console.log(name)
          return <li key={name}>{name}</li>
          
        })
        
  }

  // const handleUpdatingCountries = () => {
  //     console.log(selectedCountries);
  //     countries.map( country => country.name)
  //     .map( function(name, i) { 
  //       if(name.includes(searchTerm)){
  //         setSelectedCountries(selectedCountries + name)
  //       } })
  //       console.log(selectedCountries);
        
  // }

  

  return (
    <div>
      <SearchForm handleFormChange={handleFormChange} />
      <ul>
      <CountryDisplay names={handleUpdatingCountries()}/>
      </ul>
      
    </div>
  );
}

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
  <div>
    <p>{props.names}</p>
  </div>
)



export default App;
