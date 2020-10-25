<template>
<div class="flex">
    <div class="w-5/12 mr-2 h-135">
        <Info />
    </div>
    <div :class="[ posts.length > 1 ? ['h-135' ,'overflow-auto'] : '' ]" class="w-7/12 ml-4 pb-12" id='profile_posts'>
        <Posts :profileOwner="profile_owner"/>
    </div>
</div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'Timeline',
    props:['profile_owner'],
    components:{
        Posts: () => import(/* webpackChunckName: "Posts" */ './Posts'),
        Info: () => import(/* webpackChunckName: "Info" */ './Info')
    },
    data(){
        return{

        }
    },
    computed:{
       ...mapState([
         'posts'
      ])
    }
}
</script>

<style scoped>
#profile_posts::-webkit-scrollbar {
    width: 1px;
    background-color: #F5F5F5;
}

#profile_posts::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 2px;
    background-color: #F5F5F5;
}

#profile_posts::-webkit-scrollbar-thumb {
    border-radius: 2px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #888;
}
</style>
