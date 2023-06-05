import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { layoutTemplate } from './view/layout.js';
import { getUserData } from './utils.js';
import { homePage } from './view/home.js';
import { loginPage } from './view/login.js';
import { registerPage } from './view/register.js';
import { logout } from './data/auth.js';
import { dashboardPage } from './view/dashboad.js';
import { createPage } from './view/create.js';
import { detailsPage } from './view/details.js';
import { editPage } from './view/edit.js';
import { searchPage } from './view/search.js';

const root = document.getElementById('wrapper');

page(decorativeContext)
page('index.html', '/');
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', logoutAction);
page('/create', createPage);
page('/dashboard', dashboardPage);
page('/dashboard/:id', detailsPage);
page('/dashboard/:id/edit', editPage)
page('/search', searchPage);

page.start();

function decorativeContext(ctx, next) {
    ctx.render = renderView;
    next();
}

//TODO Inject dependancies
function renderView(content){
    const userData = getUserData();
    render(layoutTemplate(userData, content), root);

}

function logoutAction(ctx){
    logout();
    ctx.page.redirect('/');
}