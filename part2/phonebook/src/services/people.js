import axios from 'axios';
const baseUrl = 'http://localhost:3001/people';

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