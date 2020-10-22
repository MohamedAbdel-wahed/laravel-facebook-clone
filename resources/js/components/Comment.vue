<template>
<div class="w-1/3">
    <div @click="showCommentsModal=true" class="flex justify-center items-center px-2 py-1 hover:bg-gray-100 cursor-pointer rounded-lg">
        <img src="/images/svg/comment.svg" class="w-6 h-6 rounded-full">
        <span class="text-sm ml-2 font-bold text-gray-500">Comment</span>
    </div>
    <button v-if="showCommentsModal" @click="showCommentsModal=false" class="w-full h-full fixed inset-0 bg-gray-800 opacity-25 z-10"></button>
    <div v-if="showCommentsModal" class="w-5/12 h-115 fixed top-0 mr-10 transform -translate-x-16 mt-20 mb-10 pt-2 pb-6 px-6 bg-white border border-gray-300 rounded-lg z-10 shadow-md">
          <div @click="showCommentsModal=false" class="float-right p-3 rounded-full hover:bg-gray-100 cursor-pointer">
              <img src="/images/svg/close.svg" class="w-4 h-4 rounded-full">
          </div>

          <NewComment :postId="postId" />

          <GetComments :postId="postId" />

    </div>
</div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'Comment',
    props:['postId'],
     components:{
        NewComment: ()=> import(/* webpackChunckName: "NewComment" */ './NewComment'),
        GetComments: ()=> import(/* webpackChunckName: "GetComments" */ './GetComments')
    },
    data(){
        return {
            showCommentsModal:false
        }
    },
    methods:{

    },
}
</script>
