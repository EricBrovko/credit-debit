import axios from 'axios';

import config from "./config";
console.log(`process.env`, process.env.NODE_ENV);
export default axios.create({
  baseURL: config.getApiUrl(process.env.NODE_ENV)
});