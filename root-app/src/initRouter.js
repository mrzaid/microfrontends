import { Router } from "@vaadin/router";
// import '../modules.js';   // importing Modules/Components
const modules =  require('../modules.json');

modules.routes.forEach(m => {
  var script = document.createElement("script");
  script.src = m.module;
  document.getElementsByTagName("head")[0].appendChild(script);
});

export default function (token) {
  // console.log('tokeeeeeeeeen', token);
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
