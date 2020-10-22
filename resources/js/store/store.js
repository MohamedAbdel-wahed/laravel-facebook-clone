import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        authUser:{},
        posts:[],
        activeTab:'timeline',
        // likes:[],
        comments:[]
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
        },
        // getLikes(state,payload){
        //   state.likes=payload
        // },
        getComments(state,payload){
          state.comments=payload
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
        },
        // getLikes(context,payload){
        //   context.commit('getLikes',payload)
        // },
        getComments(context,payload){
          context.commit('getComments',payload)
        }
    },
})
