import { Router } from './routes.js'

const router = new Router()
router.add('/',"/pages/home.html");
router.add("/about", "/pages/about.html");
router.add("/contact", "/pages/contact.html");
router.add(404, "/pages/404.html");

router.handle()

window.onpopstate = () => router.handle() // clickar para voltar no navegador
window.route = () => router.route()