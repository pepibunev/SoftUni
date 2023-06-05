import { register } from "../api/user.js";

const section = document.getElementById("registerView");
const form = document.querySelector("form");
form.addEventListener("submit", onSubmit);

let ctx = null;
export function showRegister(context) {
    ctx = context;
    context.showSection(section);
}

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const { email, password, repeatPassword } = Object.fromEntries(formData);

    console.log(email, password, repeatPassword);

    if (!email || !password || !repeatPassword) {
        alert('Please fill in all fields');
        return;
    }

    if (email.length < 3) {
        alert('Email is too short');
        return;
    }

    if (password.length < 3) {
        alert('Password is too short');
        return;
    }

    if (password !== repeatPassword) {
        alert('Passwords do not match');
        return;
    } 

    await register(email, password);
    alert('Registration successful');
    ctx.updateNav();
    ctx.goTo('/catalog');

    // } else if (!errors.length) {
    //     await register(email, password);
    //     alert('Registration successful');
    //     ctx.updateNav();
    //     ctx.goTo('/catalog');
    // }
}