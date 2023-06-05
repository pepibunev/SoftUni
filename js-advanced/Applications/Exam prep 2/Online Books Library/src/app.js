import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { layoutTemplate } from './view/layout.js';
import { getUserData } from './utils.js';
import { dashboardPage} from './view/home.js';
import { loginPage } from './view/login.js';
import { registerPage } from './view/register.js';
import { logout } from './data/auth.js';
import { createPage } from './view/create.js';
import { myBooksPage } from './view/my-books.js';
import { detailsPage } from './view/details.js';
import { editPage } from './view/edit.js';

const root = document.getElementById('container');

page(decorativeContext)
page('index.html', '/');
page('/', dashboardPage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', logoutAction);
page('/create', createPage);
page('/my-books', myBooksPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);

page.start();

function decorativeContext(ctx, next) {
    ctx.render = renderView;
    next();
}

function renderView(content) {
    const userData = getUserData();
    render(layoutTemplate(userData, content), root);

}

function logoutAction(ctx) {
    logout();
    ctx.page.redirect('/');
}