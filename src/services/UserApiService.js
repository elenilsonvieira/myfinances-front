import ApiService from "./ApiService";

export default class UserApiService extends ApiService {

    constructor(){
        super('/user');
    }

}