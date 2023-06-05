import { removeUserData, saveUserData } from '../utils.js';
import { get, post } from './api.js';

const endpoints = {
    login: '/users/login',
    logout: '/users/logout',
    register: '/users/register'
}

export async function login(email, password){
    const result = await post(endpoints.login, { email, password });
    saveUserData(result);
}

export async function logout(){
    get(endpoints.logout);
    removeUserData(null);
}

export async function register(email, password){
    const result = await post(endpoints.register, {email, password });
    saveUserData(result);
}