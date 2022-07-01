import ApiService from "./ApiService";
import StorageService from "./StorageService";

export const LOGGED_USER = 'loggedUser';
export const TOKEN = 'token';

export default class AuthenticationApiService extends ApiService {

    constructor(){
        super('/');
        this.storageService = new StorageService();
    }

    async login(username, password){
        const loginDTO = {
            "username": username,
            "password": password
        };

        await this.post('login', loginDTO)
        .then( response => 
            {
                console.log(response.data);
                this.storageService.setItem(LOGGED_USER, JSON.stringify(response.data.user));
                this.storageService.setItem(TOKEN, JSON.stringify(response.data.token));
                return true;
            }
        ).catch( error => 
            {
                return false;
            }
        );
    }

    isTokenValid(token){
        return this.post('isTokenValid', token);
    }

    logout(){
        return this.post('logout');
    }

}

