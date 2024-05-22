import axios from "axios"
import axiosClient from "./axiosClients"
import config from '../config.json';

const TeamsApi = {
    getAll: (params) => {
        const url = `/?action=get_events&from=2010-04-05&to=2023-06-06&league_id=633&APIkey=${config.API_KEY}`;
        return axiosClient.get(url, {
            params, 
        });
    }
}

export default TeamsApi;