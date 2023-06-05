import { get, post, put, del } from './api.js';

const endpoints = {
    dashboard: '/data/fruits?sortBy=_createdOn%20desc',
    byId: '/data/fruits/'
}
export async function getAllFruit(){
    return get(endpoints.dashboard);
}

export async function getById(id){
    return get(endpoints.byId + id);
}

export async function createFruit(data){
    return post(endpoints.dashboard, data);
}

export async function updateFruit(id, data){
    return put(endpoints.byId + id, data);
}

export async function deleteFruit(id){
    return del(endpoints.byId + id);
}