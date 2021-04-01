import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '643-213-5214' }
  ]) 
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');

  const addName = (event) => {
    event.preventDefault();
    if (persons.some(check => check.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
      return;
    }
    console.log(persons)
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

  return (
    <div>
      <h2>Phonebook</h2>

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

      <h2>Numbers</h2>

      <ul>
        {persons.map(person => <li key={person.name}> {person.name} {person.number} </li>)}
      </ul>
     
      
    </div>

  )
}

export default App