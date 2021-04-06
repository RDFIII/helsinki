import React from 'react';

const PeopleList = ({people, search, deletePerson}) => {

    return (
        people.length ?
        <ul>    
            {
             people.filter(per => per.name.toLowerCase().includes(search.toLowerCase()))   
                .map(person => (
                    <li key={person.id}>
                        {person.name} {person.number}
                        <button onClick={() => deletePerson(person.id, person.name)}>Delete</button>
                    </li>
                )) 
                }
        </ul>   
        :
        <p>Loading phonebook...</p>
    )        

};

export default PeopleList;