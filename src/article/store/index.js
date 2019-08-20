const ArticleModule = {
    namespaced: true,
    
    state: { 
        count: 0,
        articles: [
            {id: 'article-1', title: 'Article #1', description: 'my', image: 'https://contentwriter.in/wp-content/uploads/2018/06/Service3-1024x598.jpg'},
            {id: 'article-2', title: 'Article #2', description: 'my', image: 'https://www.geartechnology.com/blog/wp-content/uploads/2016/09/articles-004.jpg'},
            {id: 'article-3', title: 'Bunnies Ruin Captial', description: 'my', image: 'https://study.com/cimages/videopreview/practice_analyzing_and_interpreting_an_article_v2_133899.jpg'},      
            {id: 'article-4', title: 'Book Article', description: 'my', image: 'http://www.starracing.com/web/?showimage_zopa=submit+your+article.jpg'},      
        ]
    },
    
    mutations: {
        increment(state) {
            state.count++
        }
    },

    actions: {
        incrementIfOddOnRootSum({ state, commit, rootState }) {
            if ((state.count + rootState.count) % 2 === 1) {
                commit('increment')
            }
        }
    },

    getters: {
        doubleCount(state) {
            return state.count * 2
        },
        sumWithRootCount(state, getters, rootState) {
            return state.count + rootState.count
        }
    }
}

export default ArticleModule;