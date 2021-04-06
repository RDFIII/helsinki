import React, { useState, useEffect } from 'react';
import peopleService from './services/people';
import PersonFilter from './components/PersonFilter';
import PeopleList from './components/PeopleList';
import PersonForm from './components/PersonForm';

const App = () => {

  const [ people, setPeople ] = useState([]);
  const [ newName, setNewName ]  = useState('');
  const [ newNumber, setNewNumber ] = useState(''); 
  const [ search, setSearch ] = useState('');

  useEffect(() => {
    peopleService.getPeople()
    .then(setPeople)
  }, [])

  const addPerson = event => {
    event.preventDefault();

    const alreadyEntered = people.find(person => person.name === newName);

    if (alreadyEntered) {
      alert('name already entered!');
    } else {
      peopleService.createPerson(newName, newNumber)
        .then(newEntry => {
          setPeople(people.concat(newEntry));
        });
    };

  };

  const deletePerson = (id, name) => {
    
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      peopleService.removePerson(id)
      .then(() => {
        setPeople(people.filter(person => person.id !== id))
      })
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <PersonFilter search={search} setSearch={setSearch}  />
      <h3>Add a new person to the phonebook</h3>
      <PersonForm 
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        addPerson={addPerson}
      />
      
      <PeopleList people={people} search={search} deletePerson={deletePerson} />

    </div>
 ); 

};



export default App;