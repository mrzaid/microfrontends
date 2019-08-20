import Vue from 'vue';
import Sidebar from './Sidebar.vue';
// import router from '../home/router';
import store from '../store';
import singleSpaVue from 'single-spa-vue';

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#sidebar',
    render: (h) => h(Sidebar),
    // router,
    store
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
