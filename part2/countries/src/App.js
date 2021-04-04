import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchCountry from './components/SearchCountry';
import CountryList from './components/CountryList';


const App = () => {
  
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => setCountries(response.data));
  }, []);

  return (
    <div>
      {
       
        <>
          <SearchCountry country={country} setCountry={setCountry} />
          { country && <CountryList country={country} countries={countries} setCountry={setCountry} /> }
        </>
        
      }
    </div>
  );
};

export default App;
