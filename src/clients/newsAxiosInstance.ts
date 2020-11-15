import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_NEWS_API_URL,
  headers: { Authorization: `Bearer ${process.env.REACT_APP_NEWS_API_KEY}` },
});
