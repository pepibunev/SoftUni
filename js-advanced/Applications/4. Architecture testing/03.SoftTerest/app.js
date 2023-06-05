//MVC MODEL
//app.js => controler
//views => login, register, dashboard/catalog, details, homepage
//router => paths towards all the views defined 
// api => mehods, async functions
import { showHomeView } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";
import { showCatalog } from "./views/catalog.js";
import { showDetails } from "./views/details.js";
import { showCreate} from "./views/create.js";
import { initializer } from "./router.js";
import { logout } from "./api/user.js";

document.getElementById('defSection').remove();

async function logoutFunction(){
    await logout();
    router.goTo("/");
    router.updateNav();
}

const links = {
    "/": showHomeView,
    "/create": showCreate,
    "/login": showLogin,
    "/register": showRegister,
    "/catalog": showCatalog,
    "/details": showDetails,
    "/logout": logoutFunction
}

const router = initializer(links);
router.updateNav();
router.goTo("/");


