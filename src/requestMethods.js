import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjI2MGNiY2UxZDg5MWFmNzY0ZDVlMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MTUyMjUwMSwiZXhwIjoxNjYxNzgxNzAxfQ.BFOw_31giww8bMYPyBPxHme0_NlYjXPlwcs9edMS6N8";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
