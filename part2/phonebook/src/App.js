import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '643-213-5214' },
    { name: 'Homer Simpson', number: '422-521-5675'},
    { name: 'Babe Ruth', number: '875-432-6743'}
  ]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ filteredName, setFilteredName ] = useState('');

  const addName = (event) => {
    event.preventDefault();
    if (persons.some(check => check.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
      return;
    }
    const newPerson = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(newPerson))
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleSearchName = (event) => {
    setFilteredName(event.target.value);
  }

  const displayNames = () => {
    const foundName = persons.find(o => o.name.toLowerCase() === filteredName.toLowerCase())

    if ( persons.some(check => check.name.toLowerCase() === filteredName.toLowerCase())) {
      return <li>{foundName.name} {foundName.number} </li>
    } else {
       return persons.map(person => <li key={person.name}> {person.name} {person.number} </li>)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filteredName={filteredName} handleSearchName={handleSearchName} />

      <h2>Add a new number</h2>

      <PersonForm 
        addName={addName} 
        newName={newName} 
        handleNameChange={handleNameChange} 
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange} 
      />

      <h2>Numbers</h2>

      <ul>
        <People displayNames={displayNames()} />
      </ul>
     
      
    </div>

  )
}

const Filter = ({ filteredName, handleSearchName }) => (
  <div>
    <span>find name </span>
    <input
        value={filteredName} 
        onChange={handleSearchName} />
  </div>
)

const People = ({ displayNames }) => (
  displayNames
)

const PersonForm = ({ addName, newName, handleNameChange, newNumber, handleNumberChange }) => (
  <form onSubmit={addName}>

        <div>name: <input 
          value={newName}
          onChange={handleNameChange} />
        </div>

        <div> number <input 
          value={newNumber}
          onChange={handleNumberChange}
        />

        </div>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
)


export default App