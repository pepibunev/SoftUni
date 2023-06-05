import { showHome } from "./home.js";
import { createElements } from "./utils.js";

const homeAnchorElement = document.querySelector('a');
homeAnchorElement.addEventListener('click', showHome);

function fetchPost(){
    const postId = localStorage.getItem('postId');
    loadPost(postId);
}
fetchPost();

async function loadPost(postId){
    let formElement = document.querySelector('form');
    formElement.setAttribute('dataset.Id', postId);

    try {
        const res = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts/${postId}`);

        if (!res.ok){
            const err = await err.json();
            throw new Error(err.message);
        }
        const post = await res.json();

        const themContentDivElement = document.querySelector('.theme-content');
        themContentDivElement.releaseChildren();

        const themeTitleDivElement = createElements('div', '', themContentDivElement, {'class': 'theme-title'});
        const themeNameWrapperDivElement = createElements('div', '', themeTitleDivElement, {'class': 'theme-name-wrapper'});
        const themeNameDivElement = createElements('div', '', themeNameWrapperDivElement, {'class': 'theme-name'});
        createElements('h2', post.title, themeNameDivElement, {});
        const commentDivElement = createElements('div', '', themContentDivElement, {'class': 'comment'});
        const headerDivElement = createElements('div', '', commentDivElement, {'class': 'header'});
        createElements('img', '', headerDivElement, {'src': './static/profile.png', 'alt': 'avatar'});
        const paragraphElement = createElements.querySelector('p', '', headerDivElement, {});
        paragraphElement.innerHTML = `<span>${post.username}</span> posted on time <time>${post.createDate}</time>`;
        createElements('p', post.content, headerDivElement, {class : 'post-content'});
        const comments = await loadComments(postId);

    } catch (error) {
        
    }
}


