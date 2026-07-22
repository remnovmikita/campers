import axios from "axios";

export const NextServer = axios.create({
    baseURL: `${process.env.NEXT_SERVER_API}/api`,
    withCredentials: true,
})