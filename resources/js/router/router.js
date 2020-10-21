import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../views/NotFound'
import Home from '../views/Home'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
        { 
        	name: 'Home', 
        	path:'/home', 
        	component: Home
        },
        { 
        	name: 'Profile',
        	path:'/profile/:id',
            component: () => import(/* webpackChunckName: 'Profile' */ '../views/Profile')
        },
        { 
        	name: 'NotFound',
            path:'*',
            component:NotFound
        },
    ]
}) 
