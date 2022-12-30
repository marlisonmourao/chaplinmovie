import axios from "axios";

const apiKey = "ecd878f5eb6f5ca388735c699adaff80";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3"
});

export { api, apiKey }