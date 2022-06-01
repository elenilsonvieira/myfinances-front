import axios from "axios";

const httpClient = axios.create({
    baseURL: 'http://localhost:8080/api'
});

export default class ApiService {

    constructor(endpoint){
        this.endpoint = endpoint;
    }

    post(url, params){
        return httpClient.post(url, params);
    }

    put(url, params){
        return httpClient.put(url, params);
    }

    delete(url){
        return httpClient.delete(url);
    }

    get(url){
        return httpClient.get(url);
    }

}