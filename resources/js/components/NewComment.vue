<template>
<div class="mt-6">
   <textarea @keyup.enter="createComment(postId)" v-model="newComment" name="newComment" rows="2" class="w-11/12 text-sm text-gray-700 py-2 px-4 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:border-gray-300" placeholder="Type New Comment..."></textarea>
   <button @click="createComment(postId)" :class="[newComment.trim()=='' ? ['bg-gray-200','text-gray-700'] : ['bg-blue-500','hover:bg-blue-600', 'focus:bg-blue-700','text-white']]" class="float-right mr-10 px-2 py-1 font-bold text-xs rounded-lg focus:outline-none transition-all duration-200 ease-out">Comment</button>
</div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'NewComment',
    props:['postId'],
    data(){
        return {
          newComment:'',
        }
    },
    computed:{
      ...mapState(['comments'])
    },
    methods:{
      createComment(postId){
          if(this.newComment.trim()){
            axios.post(`/api/posts/${postId}/comments/create`, {
              post_id:postId,
              content:this.newComment
            })
             .then(res=>{
               this.newComment=''
                this.comments.unshift(res.data)
             })
              .catch(err=>console.log(object.values(err)[2].data.errors))
          }
        }
    }
}
</script>
