import ApiService from "./ApiService";

export default class AuthenticationApiService extends ApiService {

    constructor(){
        super('/');
    }

    login(username, password){
        const loginDTO = {
            "username": username,
            "password": password
        };

        return this.post('login', loginDTO);
    }

    isTokenValid(token){
        return this.post('isTokenValid', token);
    }

    logout(){
        return this.post('logout');
    }

}

