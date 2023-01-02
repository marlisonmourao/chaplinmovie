import axios from "axios";
import { AppError } from "@utils/AppError";

const apiKey = "ecd878f5eb6f5ca388735c699adaff80";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3"
});

api.interceptors.response.use(response => response, error => {
  if(error.response && error.response.data) {
    return Promise.reject(new AppError(error.response.data.message));
  } else {
    return Promise.reject(new AppError('Erro no servidor. Tente novamente mais tarde.'))
  }
})

export { api, apiKey }