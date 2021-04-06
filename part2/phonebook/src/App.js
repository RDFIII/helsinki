import React, { useState, useEffect } from 'react';
import peopleService from './services/people';
import PersonFilter from './components/PersonFilter';

const App = () => {

  const [ people, setPeople ] = useState([]);
  const [ newName, setNewName ]  = useState('');
  const [ newNumber, setNewNumber ] = useState(''); 
  const [ search, setSearch ] = useState('');

  useEffect(() => {
    peopleService.getPeople()
    .then(setPeople)
  })

  const addPerson = event => {
    event.preventDefault();

    const alreadyEntered = people.find(person => person.name === newName);

    if (alreadyEntered) {
      alert('name already entered!');
    } else {
      peopleService.create(newName, newNumber)
        .then(newEntry => {
          setPeople.concat(newEntry);
          console.log(`${newEntry} added to Persons`)
        });
    };

  };

  return (
    <div>
      <h1>Phonebook</h1>
      <PersonFilter search={search} setSearch={setSearch}  />
    </div>
 ); 

};



export default App;