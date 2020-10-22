<template>
<div class="mt-16 h-screen overflow-x-hidden overflow-y-scroll" id="profile" style="height:34.5rem">

   <Head :profile_owner="profile_owner" />

   <div class="ml-10 py-4 px-56 border-t">
       <div v-if="activeTab==='timeline'">
            <Timeline :profile_owner="profile_owner" />
       </div>
       <div v-if="activeTab==='about'">
             <h1 class="my-8 font-bold text-xl text-center">About</h1>
       </div>
       <div v-if="activeTab==='friends'">
            <h1 class="my-8 font-bold text-xl text-center">Friends</h1>
       </div>
       <div v-if="activeTab==='photos'">
            <h1 class="my-8 font-bold text-xl text-center">Photos</h1>
       </div>
        <div v-if="activeTab==='archive'">
            <h1 class="my-8 font-bold text-xl text-center">Archive</h1>
       </div>
   </div>
</div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'Profile',
    components:{
        Head: ()=> import(/* webpackChunckName: 'Head' */ '../components/profile/Head'),
        Timeline: ()=> import(/* webpackChunckName: 'Timeline' */ '../components/profile/Timeline')
    },
    data(){
        return{
          peofileId:0,
          profile_owner:{},
        }
    },
    computed: {
         ...mapState([
            'activeTab',
          ])
    },
    methods:{
      getProfile(){
        this.profileId=this.$route.params.id
        axios.get(`/api/profile/${this.profileId}`)
             .then(res=>{
               this.profile_owner=res.data
             }).catch(err=>{
                if({err}.err.response.status){
                  this.$router.push({name:'NotFound'})
                }
             })
      }
    },
    created(){
       this.getProfile()
    },
    watch:{
      $route:'getProfile'
    }
}
</script>

#profile::-webkit-scrollbar {
    width: 1px;
    background-color: #F5F5F5;
}

#profile::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 2px;
    background-color: #F5F5F5;
}

#profile::-webkit-scrollbar-thumb {
    border-radius: 2px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #888;
}
</style>
