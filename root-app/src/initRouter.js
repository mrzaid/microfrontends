import { Router } from "@vaadin/router";
import '../modules.js';   // importing Modules/Components

export default function (token) {
  console.log('tokeeeeeeeeen', token);
  const modules =  require('../modules.json');
  const routes = modules.routes.filter(r => r.showRoute).map(({path, component}) => {
    return { path, component };
  });
  const outlet = document.getElementById('outlet');
  window.vRouter = Router;
  const router = new Router(outlet, {
    baseUrl: '/'
  });
  router.setRoutes([
    { path: '/', component: 'article-app' },
    ...routes
  ]);

  if(!token) {
    Router.go('/login');
  }
}
