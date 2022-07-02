import ApiService from "./ApiService";
import StorageService from "./StorageService";

export default class AuthenticationApiService extends ApiService {

    constructor(){
        super('');
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

            this.storageService.setItem(super.LOGGED_USER, user);
            this.storageService.setItem(super.TOKEN, token);

            this.registerToken(token);
            return user;
        } catch(error){
            return null;
        }
    }

    isTokenValid(token){
        return this.post('/isTokenValid', token);
    }

    logout(){
        this.storageService.removeItem(super.LOGGED_USER);
        this.storageService.removeItem(super.TOKEN);

        return this.post('/logout');
    }

    getLoggedUser(){
        return this.storageService.getItem(super.LOGGED_USER);
    }

    getToken(){
        return this.storageService.getItem(super.TOKEN);
    }

    async isAuthenticated(){
        const user = this.getLoggedUser();
        const token = this.getToken();

        if(!user || !token){
            return false;
        }

        const tokenDTO = {
            "token": token
        };

        const response = await this.isTokenValid(tokenDTO);
        return response.data;
    }

}

