import React, { useState, useEffect } from 'react';
import peopleService from './services/people';
import PersonFilter from './components/PersonFilter';
import PeopleList from './components/PeopleList';
import PersonForm from './components/PersonForm';
import Message from './components/Message';
import './index.css';

const App = () => {

  const [ people, setPeople ] = useState([]);
  const [ newName, setNewName ]  = useState('');
  const [ newNumber, setNewNumber ] = useState(''); 
  const [ search, setSearch ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ messageType, setMessageType] = useState('');

  const clear = () => {
    setNewName('');
    setNewNumber('');
  };

  useEffect(() => {
    peopleService.getPeople()
    .then(setPeople);
  }, []);

  const addPerson = event => {
    event.preventDefault();

    const alreadyExists = people.find(person => person.name === newName);

    if (alreadyExists) {
      
      window.confirm(`${alreadyExists.name} already exists, would you like to update their number?`) &&
      
      peopleService.updatePerson(alreadyExists.id, {name: alreadyExists.name, number: newNumber})
      .then(updatedPerson => {
        setPeople(people.map(person => person.id === updatedPerson.id ? updatedPerson : person));
        
        clear();
      })
      .catch(error => {
        setMessage(`${newName} has already been deleted from server`);
        setMessageType('error');
        setTimeout(() => {
          setMessage(null);
          setMessageType('')
        }, 5000)
        console.log(error)  
      });
      setPeople(people.filter(person => person.id !== alreadyExists.id))

    } else {
      peopleService.createPerson(newName, newNumber)
        .then(newEntry => {
          setPeople(people.concat(newEntry));
        });
        
        setMessage(`Successfully added ${newName} to phonebook`);
        setMessageType('success')
        setTimeout(() => {
          setMessage(null);
          setMessageType('');
        }, 5000)
    };

  };

  const deletePerson = (id, name) => {
    
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      peopleService.removePerson(id)
      .then(() => {
        setPeople(people.filter(person => person.id !== id))
      });
      setMessage(`Successfully deleted ${newName} from phonebook`);
        setMessageType('success')
        setTimeout(() => {
          setMessage(null);
          setMessageType('');
        }, 5000)
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Message message={message} messageType={messageType}  />
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