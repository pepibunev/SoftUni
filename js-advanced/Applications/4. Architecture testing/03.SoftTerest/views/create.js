import { createIdea } from '../api/data.js'

const section = document.getElementById("createView");
const form = document.getElementById("form");

//const addEventListeener

export function showCreate(context){
    context.showSection(section);
}