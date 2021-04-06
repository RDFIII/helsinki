import React from 'react';

const PersonForm = ({ newName, setNewName, newNumber, setNewNumber, addPerson }) => {

    return (
        <form onSubmit={addPerson}>
            <div>
                Name: <input value={newName} onChange={event => setNewName(event.target.value)}></input>
            </div>
            <div>
                Number: <input value={newNumber} onChange={event => setNewNumber(event.target.value)}></input>
            </div>
            <div>
                <button type="submit">Add Person</button>
            </div>
        </form>
    )

}

export default PersonForm;