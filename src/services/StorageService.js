export default class StorageService {
    
    setObject(key, value){
        localStorage.setItem(key, JSON.stringify(value));
    }

    getObject(key){
        const item = localStorage.getItem(key);
        return JSON.parse(item);
    }

    setItem(key, value){
        localStorage.setItem(key, value);
    }

    getItem(key){
        return localStorage.getItem(key);
    }

    removeItem(key){
        localStorage.removeItem(key);
    }
}