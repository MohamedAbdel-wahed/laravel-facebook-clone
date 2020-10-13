<template>
<div class="relative w-10">
    <div class="flex items-center hover:underline cursor-pointer" v-if="likes.length>0" @mouseover="showLikesModal=true" @mouseleave="showLikesModal=false">
        <span class="text-sm">{{likes.length}}</span> 
        <div class="p-1 ml-1 bg-blue-200 rounded-full">
            <img src="/images/svg/likes.svg" class="rounded-full w-4 h-4">
        </div>
    </div>
    <div v-if="showLikesModal" class="absolute top-0 mt-6 -ml-8 w-32 max-h-48 py-2 px-4 bg-gray-800 rounded-lg z-10">
        <h3 v-if="index<7" v-for="(name,index) in likes" :key="index" class="my-1 text-white text-xs font-semibold">{{name | strLimit(12)}}</h3>
        <h3 v-if="index==8" v-for="(name,index) in likes" :key="index" class="my-1 text-white text-xs font-semibold">and {{likes.length-8}} others</h3>
    </div>
</div>
</template>

<script>
export default {
    name: 'GetLikes',
    props:['postId'],
    data(){
        return{
            likes:[],
            showLikesModal:false
        }
    },
    mounted(){
        axios.get(`/api/posts/${this.postId}/likes`)
             .then(res=>{
                 this.likes=res.data
             }).catch(err=>console.log(err))
    }
}
</script>