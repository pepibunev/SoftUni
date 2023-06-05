//get, load, remove, save user data

const itemName = 'userData';

export function getUserData(){
    return JSON.parse(localStorage.getItem(itemName));
}

export function saveUserData(data){
    return localStorage.setItem(itemName, JSON.stringify(data));
}

export function removeUserData(){
    return localStorage.removeItem(itemName);
}

export function createSubmitHandler(callback){
    return function(event){
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        callback(data, form);
    };
}