import { declareChildApplication, start } from 'single-spa';
import './registerServiceWorker';

declareChildApplication('navbar', () => import('./navbar/main'), () => true);
declareChildApplication('sidebar', () => import('./sidebar/main'), () => true);
declareChildApplication('auth', () => import('./auth/main'), pathPrefix('/auth'));
declareChildApplication('home', () => import('./home/main'), pathPrefix('/', ['/about']));
declareChildApplication('about', () => import('./about/main'), pathPrefix('/about'));
declareChildApplication('article', () => import('./article/main'), pathPrefix('/article'));

start();

function pathPrefix(prefix, notAllowed = []) {
    return function (location) {
        return !notAllowed.map(p => pathPrefix(p)(location)).find(a => a) && location.pathname.indexOf(`${prefix}`) === 0;
    }
}
