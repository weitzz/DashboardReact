import axios from "axios";

const api = axios.create({
  baseURL: `https://my-json-server.typicode.com/tractian/fake-api/`,
  // headers: {
  //   "Content-type": "application/json",
  // },
  // timeout: 15000,
});

export default api;
