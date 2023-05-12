import axios from 'axios';

const apiBase = axios.create({
  baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiBase;