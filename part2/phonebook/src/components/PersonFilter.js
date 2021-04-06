import React from 'react';

const PersonFilter = ({ search, setSearch }) => {
    return (
        <div>
            <input 
                value={search}
                onChange={event => setSearch(event.target.value)}
            />
        </div>
    );
};

export default PersonFilter;