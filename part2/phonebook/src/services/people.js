import axios from 'axios';
const baseUrl = 'http://localhost:3001/people';

const getPeople = () => (
    axios
        .get(baseUrl)
        .then(response => response.data)
);

const createPerson = (name, number) => (
    axios
        .post(baseUrl, {name, number})
        .then(response => response.data)
);


const removePerson = id => axios.delete(`${baseUrl}/${id}`);

const updatePerson = (id, updatedPerson) => (
    axios
        .put(`${baseUrl}/${id}`, updatedPerson)
        .then(response => response.data)
);

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default { getPeople, createPerson, updatePerson, removePerson };