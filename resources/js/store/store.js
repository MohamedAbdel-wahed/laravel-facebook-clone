import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        authUser:{},
        posts:[],
        activeTab:'timeline',
        showCommentSection:false,
    },
    getters:{},
    mutations:{
        getAuthUser(state,payload){
            state.authUser=payload
        },
        allPosts(state,payload){
            state.posts=payload
        },
        setActiveTab(state,payload){
            state.activeTab=payload
        }
    },
    actions:{
        getAuthUser(context,payload){
            context.commit('getAuthUser',payload)
        },
        allPosts(context,payload){
            context.commit('allPosts',payload)
        },
        setActiveTab(context,payload){
            context.commit('setActiveTab',payload)
        }
    },
})