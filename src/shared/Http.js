import axios from 'axios';

const Http = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com'
});

export default Http;
