import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://car-rental-api.goit.global", 
  withCredentials: false, 
});

apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if(error.response){
         return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
}
);

export default apiClient;