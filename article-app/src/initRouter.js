import Vue from "vue";
import VueRouter from "vue-router";
import Articles from "./views/Articles.vue";
import Add from "./views/Add.vue";
import Detail from "./views/Detail.vue";

let initialized = false;
export let router = null;
export default function() {
  if (initialized) return;
  Vue.use(VueRouter);
  const routes = [
    { path: '/', name: 'home', redirect: { name: 'article' } },
    { path: '/article', name: 'article', component: Articles },
    { path: '/article/add', name: 'article-add', component: Add },
    { path: '/article/detail/:id', name: 'article-detail', component: Detail }
  ];
  router = new VueRouter({ routes });
  Vue.mixin({ router });
  // router.replace('/article');
  initialized = true;
}
