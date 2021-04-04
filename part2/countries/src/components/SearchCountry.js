import React from 'react';

const SearchCountry = ({ country, setCountry }) => {

    return (

        <div>
            <form>
                <input 
                    onChange={event => setCountry(event.target.value)} 
                    value={country}
                    placeholder={'Search for countries'}
                ></input>
            </form>
        </div>

    );

};

export default SearchCountry;