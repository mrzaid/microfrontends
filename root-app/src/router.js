import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export const routes = [
  // { path: '/', component: () => import("./views/Home.vue") },
  // { path: '/article', component: () => import("@/../../article-app/dist/article-app.js").then(c => c) },
];

export default new Router({
  mode: 'history',
  routes
});
