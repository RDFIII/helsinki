import React from 'react';

const PeopleList = ({ people, search }) => {
    return (
            <ul>
                {
                    people.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
                    .map(person => (
                        <li key={person.name}>
                            {person.name} {person.number}
                        </li>
                    ))
                }
            </ul>
    )
}

export default PeopleList;