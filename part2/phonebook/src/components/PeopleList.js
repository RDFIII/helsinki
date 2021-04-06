import React from 'react';

const PeopleList = ({ people, search, deletePerson }) => {
    return (
            <ul>
                {
                    people.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
                    .map(person => (
                        <li key={person.name}>
                            {person.name} {person.number}
                            <button onClick={() => deletePerson(person.id, person.name)}> Remove</button>
                        </li>
                    ))
                }
            </ul>
    )
}

export default PeopleList;