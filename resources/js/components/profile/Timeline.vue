<template>
<div class="flex">
    <div class="w-5/12 mr-2 h-135">
        <Info /> 
    </div>
    <div class="w-7/12 ml-4">
        <div >
            <NewPost /> 
        </div>
        <Posts />
    </div>
</div>
</template>

<script>
import NewPost from '../NewPost'
import Posts from './Posts'
import Info from './Info'

export default {
    name: 'Timeline',
    components:{
        NewPost,
        Posts,
        Info
    },
    data(){
        return{
            posts: this.$store.state.posts
        }
    },
    methods:{

    }
}
</script>