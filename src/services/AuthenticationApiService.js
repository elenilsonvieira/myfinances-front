import ApiService from "./ApiService";
import StorageService from "./StorageService";

export const LOGGED_USER = 'loggedUser';
export const TOKEN = 'token';

export default class AuthenticationApiService extends ApiService {

    constructor(){
        super('/api');
        this.storageService = new StorageService();
    }

    async login(username, password){
        const loginDTO = {
            "username": username,
            "password": password
        };

        try{
            const response = await this.post('/login', loginDTO);

            console.log(response.data);
            const user = response.data.user;
            const token = response.data.token;

            this.storageService.setItem(LOGGED_USER, JSON.stringify(user));
            this.storageService.setItem(TOKEN, JSON.stringify(token));

            this.registerToken(token);
            return true;
        } catch(error){
            return false;
        }
    }

    isTokenValid(token){
        return this.post('/isTokenValid', token);
    }

    logout(){
        this.storageService.removeItem(LOGGED_USER);
        this.storageService.removeItem(TOKEN);

        return this.post('/logout');
    }

    getLoggedUser(){
        return this.storageService.getItem(LOGGED_USER);
    }

    getToken(){
        return this.storageService.getItem(TOKEN);
    }

    isLogged(){
        const user = this.getLoggedUser();
        const token = this.getToken();

        if(!user || !token){
            return false;
        }

        return this.isTokenValid(token);
    }

}

