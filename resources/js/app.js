import Vue from 'vue'
import router from './router/router'
import store from './store/store'
import Root from './Root'


require('./bootstrap')

Vue.filter('formatTime', (time)=>{
  return  moment(time).fromNow()
})

Vue.filter('strLimit', (string,limit)=>{
   let newString= string.slice(0,limit)
    newString+= string.length>limit ? '...' : '' 
    return newString
})

const app = new Vue({
    el: '#app',
    router,
    store,
    components:{
        Root
    }
});
