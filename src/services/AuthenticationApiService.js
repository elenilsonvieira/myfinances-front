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

        const response = await this.post('login', loginDTO);

        response.then( response => 
            {
                console.log(response.data);
                const user = response.data.user;
                const token = response.data.token;

                this.storageService.setItem(LOGGED_USER, JSON.stringify(user));
                this.storageService.setItem(TOKEN, JSON.stringify(token));

                ApiService.registerToken(token);
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

