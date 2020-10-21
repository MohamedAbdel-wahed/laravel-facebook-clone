<template>
<div class="">
  <a @click="loadComments()" v-if="showMore" class="m-2 text-gray-600 text-sm hover:underline cursor-pointer">View more comments</a>
  <div class="max-h-84 w-full overflow-y-scroll overflow-x-hidden mt-4" id="post_comments">
      <div class="w-10/12 m-2" v-for="(comment,index) in comments" :key="index">
          <transition name="fade">
              <div class="flex">
                  <router-link to="#">
                     <img src="/images/other/user.jpeg" class="w-10 h-10 rounded-full">
                  </router-link>
                  <div class="px-3 py-2 ml-1 bg-gray-100 rounded-lg">
                      <h1 class="flex items-center">
                          <router-link to="#" class="hover:underline">
                             <span class="text-sm font-bold text-gray-800">{{ comment.user.name }}</span>
                          </router-link>
                          <span class="ml-2 text-xs text-gray-500">{{ comment.created_at | formatTime }}</span>
                      </h1>
                     <p class="text-gray-600 text-sm break-words">{{ comment.content }}</p>
                  </div>
              </div>
          </transition>
      </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'GetComments',
    props:['postId'],
    data(){
        return {
          comments:[],
          nextPage:0,
          showMore:false
        }
    },
    mounted(){
      axios.get(`/api/posts/${this.postId}/comments`)
          .then(res=>{
            this.comments=res.data.data
            this.$store.dispatch('getComments',this.comments)
            if(res.data.current_page < res.data.last_page){
              this.showMore=true
              this.nextPage=res.data.current_page+1
            }
            else{
              this.showMore=false
            }
          }).catch(err=>console.log(err))

    },
    methods:{
      loadComments(){
          axios.get(`/api/posts/${this.postId}/comments?page=${this.nextPage}`)
              .then(res=>{
                res.data.data.forEach(data=>{
                  this.comments.unshift(data)
                })

                if(res.data.current_page < res.data.last_page){
                  this.showMore=true
                  this.nextPage=res.data.current_page+1
                }
                else{
                  this.showMore=false
                }

              }).catch(err=>console.log(err))
      }
    }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

#post_comments::-webkit-scrollbar {
    width: 1px;
    background-color: #F5F5F5;
}

#post_comments::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 2px;
    background-color: #F5F5F5;
}

#post_comments::-webkit-scrollbar-thumb {
    border-radius: 2px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #888;
}
</style>
