import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.alamondai.com",
  timeout: 30000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'x-api-key': "J8&n7H@Lp#3qW5e2R9Y6uT4i" || "",
  }
});

export default instance; 