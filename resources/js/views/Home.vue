<template>
    <div class="transform translate-y-16 flex">
        <List />
        <div id="home" class="flex-1 h-screen overflow-y-scroll"> 
            <Stories />
            <div class="mt-12 pl-6 pr-24 mx-16">
                <NewPost /> 
            </div>
            <HomePosts />
        </div>
        <Contacts />
    </div>
</template>

<script>

import {mapState} from 'vuex'
import List from '../components/List'
import Contacts from '../components/Contacts'
import Stories from '../components/Stories'
import NewPost from '../components/NewPost'
import HomePosts from '../components/HomePosts'
export default {
    name: 'Home',
    components:{
        List,
        Contacts,
        Stories,
        NewPost,
        HomePosts
    },
    data(){
        return {
            
        }
    },
}
</script>

<style scoped>

#home::-webkit-scrollbar {
	width: 2px;
	background-color: #F5F5F5;
}

#home::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 3px;
	background-color: #F5F5F5;
}

#home::-webkit-scrollbar-thumb {
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #888;
}

</style>