import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjI2MGNiY2UxZDg5MWFmNzY0ZDVlMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDQ4MzEzNSwiZXhwIjoxNjYwNzQyMzM1fQ.DKxx_0APahyPA8YyCzl9CRP3tv5RCGuqpuzLEll-Mk8";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});
