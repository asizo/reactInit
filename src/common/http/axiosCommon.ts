import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout : Number(process.env.REACT_APP_API_TIMEOUT),
  headers: {
    "Authorization" : "",
    "Content-type": "application/json"
  }
});
