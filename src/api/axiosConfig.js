import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'https://kanji-cors-bypass.herokuapp.com/api',
});

export default axiosConfig;
