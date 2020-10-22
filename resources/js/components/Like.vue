<template>
<div @click="likePost(postId)" class="w-1/3 flex justify-center items-center px-2 py-1 hover:bg-gray-100 cursor-pointer rounded-lg">
    <img :src="`/images/svg/${likeIcon}`" class="w-6 h-6 rounded-full">
    <span :class="[liked?'text-blue-500':'text-gray-500']" class="text-sm ml-2 font-bold">Like</span>
</div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'Like',
    props:['postId'],
    data(){
        return {
            liked:false,
            likeIcon:'like.svg'
        }
    },
    computed:{
      ...mapState([
        'authUser'
      ])
    },
    mounted(){
      this.getLikeStatus()
    },
    methods:{
        getLikeStatus(){
          axios.get(`/api/posts/${this.postId}/like-status`)
               .then(res=>{
                   this.liked=res.data ? true : false
                   this.likeIcon= this.liked ? 'liked.svg' : 'like.svg'
               }).catch(err=> console.log(err))
        },
        likePost(postId){
            axios.post(`/api/posts/${postId}/like`)
                 .then(res=>{
                     this.liked=!this.liked
                     this.likeIcon= this.liked ? 'liked.svg' : 'like.svg'
                 }).catch(err=>console.log(err))
        },
    }
}
</script>
