<template>
<div class="pb-16 transform translate-y-16" id="profile">
   <Head />
   <div class="py-4 px-64 border-t">
       <div v-if="activeTab==='timeline'">
            <Timeline />
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
import Head from '../components/profile/Head'
import Timeline from '../components/profile/Timeline'

export default {
    name: 'Profile',
    components:{
        Head,
        Timeline
    },
    data(){
        return{

        }
    },
    computed: {
        ...mapState([
            'activeTab'
        ])
    },
    mounted(){

    },
    methods:{

    }
}
</script>
