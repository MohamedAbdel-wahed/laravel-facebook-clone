import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Profile from '../views/Profile'
import NotFound from '../views/NotFound'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
        { name: 'Home', path:'/home', component: Home },
        { name: 'Profile', path:'/profile/:id', component: Profile },
        { name: 'NotFound', path:'*', component: NotFound },
    ]
}) 
