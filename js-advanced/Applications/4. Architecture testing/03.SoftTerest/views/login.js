import { login } from '../api/user.js';

const section = document.getElementById("loginView");
const form = section.querySelector("form");

form.addEventListener("submit", onSubmit);

export function showLogin(context){
    context.showSection(section);
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    const user = await login(email, password);
    context.updateNav();
    context.goTo("/catalog");
}
