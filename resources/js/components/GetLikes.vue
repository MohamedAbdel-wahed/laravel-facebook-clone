<template>
<div class="relative w-10">
    <div class="flex items-center hover:underline cursor-pointer" v-if="users.length>0" @mouseover="showLikesModal=true" @mouseleave="showLikesModal=false">
        <span class="text-sm">{{users.length}}</span>
        <div class="p-1 ml-1 bg-blue-200 rounded-full">
            <img src="/images/svg/likes.svg" class="rounded-full w-4 h-4">
        </div>
    </div>
    <div v-if="showLikesModal" class="absolute top-0 mt-6 -ml-8 w-48 max-h-48 py-2 px-4 bg-gray-800 rounded-lg z-10">
        <div class="flex" v-if="index==7" v-for="(user,index) in users" :key="index">
            <img src="/"> 
            <h3 class="my-1 text-white text-xs font-semibold">and {{users.length-8}} others</h3>
        </div>
         
        <h3 v-if="index==8" v-for="(user,index) in users" :key="index" class="my-1 text-white text-xs font-semibold">and {{users.length-8}} others</h3>
    </div>
</div>
</template>

<script>
export default {
    name: 'GetLikes',
    props:['postId'],
    data(){
        return{
            users:[],
            showLikesModal:false
        }
    },
    mounted(){
        axios.get(`/api/posts/${this.postId}/likes`)
             .then(res=>{
                 this.users=res.data
             }).catch(err=>console.log(err))
    }
}
</script>
