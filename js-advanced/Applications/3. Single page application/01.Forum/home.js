//showHome => home elements shown
//load posts 
//create post function => post functionality
//cancel functionality

import { createElements } from "./utils.js";

export async function showHome(e) {
    e.preventDefault();
    localStorage.clear();
    window.location = './index.html'
    
}

loadPosts();


function showComments(e){
    let postId;
    if(e.target.tagName === 'a'){
        postId = e.target.dataset.id;
    } else {
        postId = e.target.parentElement.getAttribute('dataset.id');
    }
    
    localStorage.setItem('postId', postId);

    window.location = './theme-content.html'
}

async function loadPosts() {
    let topicDivElement = document.querySelector('.topic-title');
    topicDivElement.replaceChildren();

    try {
        let response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');

        if (!response.ok) {
            let error = await response.json();
            throw new Error(error.message);
        }

        let posts = await response.json();
        for (const [postId, post] of Object.entries(posts)) {
            topicDivElement.innerHTML = `
                <div class='topic-container'>
                    <div class='topic-name-wrapper'>
                        <div class='topic-name'>
                            <a href='#', dataset.id=${postId}, class='normal'>
                               <h2>

                               </h2> 
                            </a>
                            <div class='columns'>
                                <div>
                                    <p>
                                    s
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;









            // let topicContainerDivElement = createElements('div', '', topicDivElement, { 'class': 'topic-container' });
            // let topicNameWrapperDivElement = createElements('div', '', topicContainerDivElement, { 'class': 'topic-name-wrapper' });
            // let topicNameDivElement = createElements('div', '', topicNameWrapperDivElement, { 'class': 'topic-name' });
            // let anchorElement = createElements('a', '', topicNameDivElement, { 'href': '#', 'dataset.id': postId, 'class': 'normal' });
            // //anchorElement.addEventListener('click', );
            // createElements('h2', '', post.anchorElement, {});
            // let columsDivElement = createElements('div', '', topicNameDivElement, { 'class': 'columns' });
            // let divElement = createElements('div', '', columsDivElement, {});
            // let dateParagraphElement = createElements('p', 'Date:', divElement, {});
            // createElements('time', post.createDate, dateParagraphElement, {});
            // let nickNameElement = createElements('div', '', divElement, { 'class': 'nick-name' });
            // let usernameParagraphElement = createElements('p', 'Username', nickNameElement, {});
            // createElements('span', post.username, usernameParagraphElement, {});
        }
    } catch (error) {
        alert(error.message);
    }
}

export async function createPost(event) {
    event.preventDefault();

    const formElement = document.querySelector('form');
    let formData = new FormData(formElement);

    const title = formData.get('topicName').trim();
    const username = formData.get('username').trim();
    const content = formData.get('postText').trim();
    const createDate = new Date();

    try {
        if (!title) {
            throw new Error('Title is required!');
        } else if (!username) {
            throw new Error('Username is required!');
        } else if (!content) {
            throw new Error('Content is required!');
        }

        const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
            method: "POST",
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify({ title, username, content, createDate })
        });

        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message);
        }

        formElement.reset();
        await loadPosts();

    } catch (error) {
        alert(error.message);
    }
}

export function onClose(e){
    e.preventDefault();

    const formElement = document.querySelector('form');
    formElement.reset();
}