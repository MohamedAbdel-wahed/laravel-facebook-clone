<template>
<div class="w-1/3">
    <div @click="showCommentSection=true" class="flex justify-center items-center px-2 py-1 hover:bg-gray-100 cursor-pointer rounded-lg">
        <img src="/images/svg/comment.svg" class="w-6 h-6 rounded-full">
        <span class="text-sm ml-2 font-bold text-gray-500">Comment</span>
    </div>
  
</div>
</template>

<script> 
export default {
    name: 'Comment',
    props:['postId'],
    data(){
        return {
            showCommentSection:false
        }
    },
    updated(){
        this.$store.state.showCommentSection=this.showCommentSection
    },
    methodS:{

    },

}
</script>