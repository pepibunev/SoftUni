import { createPost, onClose, showHome } from "./home.js";

const homeAnchorElement = document.querySelector('a');
homeAnchorElement.addEventListener('click', showHome);

const buttonsElements = document.querySelectorAll('button');
const cancelButtonsElement = buttonsElements[0];
cancelButtonsElement.addEventListener('click', onClose);

const createPostButton = buttonsElements[1];
createPostButton.addEventListener('click', createPost);


