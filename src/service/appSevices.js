import axios from "axios";
const API = axios.create({ baseURL: "https://contact.mediusware.com/api/" });

const getAllCountryReq = () => API.get("/contacts/");
const getUSCountryReq = () => API.get("/country-contacts/United States/");

export const AppService = {
    getAllCountryReq,
    getUSCountryReq,
};
