import Vue from 'vue';
import Vuex from 'vuex';

import AboutModule from '../about/store/index';
import ArticleModule from '../article/store/index';

Vue.use(Vuex)

export default new Vuex.Store({
    state: { 
        jwtToken: null,
        modules: [{name: "Article", path: "/article"},{name: "Article #1", path: "/article/myFirstArticle"},{name: "Article #2", path: "/article/SecondToughArticle"},{name: "About", path: "/about"}]
    },
    modules: {
        about: AboutModule,
        article: ArticleModule
    }
    // mutations: { },
    // actions: { }
})
