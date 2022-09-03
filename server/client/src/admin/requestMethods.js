import axios from "axios";

const BASE_URL = "https://sk-store1.herokuapp.com/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjI2MGNiY2UxZDg5MWFmNzY0ZDVlMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MTYxMjE1OCwiZXhwIjoxNjYxODcxMzU4fQ.KG7rdDCm4xORUMTSydkaGZUqQc_4TGRUpzm-FCHSIFg";
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjI2MGNiY2UxZDg5MWFmNzY0ZDVlMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MTYxODgzMywiZXhwIjoxNjYxODc4MDMzfQ.Al4HxYEC9Df8Wnc8qTBE9Es99tjfJtjrWQDIQGoa2xA"
console.log(TOKEN)

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
