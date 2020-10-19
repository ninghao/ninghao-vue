import axios from 'axios';

/**
 * HTTP 客户端
 */
export const apiHttpClient = axios.create({
  baseURL: 'http://localhost:3000',
});
