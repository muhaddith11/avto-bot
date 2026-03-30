import axios from 'axios';

// Development use local IP/port, production use relative or provided URL
const API_URL = import.meta.env.VITE_API_URL || '/api';

const api = axios.create({
  baseURL: API_URL,
});

export const getCatalog = async () => {
  const { data } = await api.get('/catalog');
  return data;
};

export const submitOrder = async (orderData) => {
  const { data } = await api.post('/order', orderData);
  return data;
};
