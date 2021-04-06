import axios from 'axios';
const baseUrl = '/api/persons';

const getPeople = () => (
    axios
        .get(baseUrl)
        .then(response => response.data)
)

const create = (name, number) => (
    axios
        .post(baseUrl, {name, number})
        .then(response => response.data)
);


export default { getPeople, create };