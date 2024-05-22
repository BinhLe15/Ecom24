import axios from "axios";
import querryString from 'query-string';
import config from '../config.json';

const axiosClient = axios.create({
    baseURL: config.SERVER_API,
    paramsSerializer: params => querryString.stringify(params),
});

axiosClient.interceptors.request.use(async(config) => {
    return config
})

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    throw error;
});

export default axiosClient;