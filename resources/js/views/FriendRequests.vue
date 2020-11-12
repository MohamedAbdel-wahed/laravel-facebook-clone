<template>
    <div class="transform translate-y-16 flex">
        <List />
        <div id="requests" class="flex-1 h-screen overflow-y-scroll"> 
            <h1 class="font-bold text-3xl my-10 text-gray-700 mx-20">Friend Requests</h1>
            <div class="mt-4 mx-20">
                <div v-for="(request,index) in requests" :key="index" class="flex justify-between items-center my-2 bg-white rounded-lg py-2 px-6">
                   <div class="flex items-center">
                        <router-link :to="{ name: 'Profile', params: {id: request.id} }">
                            <img :src="request.photo ? `/storage/uploads/profile/${request.photo}` : '/images/svg/default-male.svg'" class="w-10 h-10 border border-gray-200 rounded-full" title="view profile">
                        </router-link>
                        <router-link :to="{ name: 'Profile', params: {id: request.id} }" class="hover:underline">
                            <h1 class="ml-3 font-semibold text-gray-600">{{ request.first_name+' '+request.last_name }}</h1>
                        </router-link>
                   </div>
                   <div v-if="isPending && !isFriend" class="flex items-center">
                        <button @click="acceptRequest(request.id)" class="mr-3 px-4 py-1 font-bold text-sm text-white bg-blue-500 hover:text-blue-200 focus:outline-none focus:bg-blue-700 rounded-lg">Accept</button>
                        <button @click="rejectRequest(request.id)" class="px-4 py-1 font-bold text-sm text-white bg-red-500 hover:text-red-200 focus:outline-none focus:bg-red-700 rounded-lg">Reject</button>
                   </div>
                   <div v-if="!isPending && isFriend" class="text-green-600 text-sm">
                       <p>Happy Friendship :) </p>
                   </div>
                    <div v-if="!isPending && !isFriend" class="text-red-600 text-sm">
                       <p>Rejected </p>
                   </div>
                </div>
            </div>
        </div>
        <Contacts />
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: "FriendRequests",
    components: {
        List: () =>
            import(/* webpackChunckName: 'List' */ "../components/List"),
        Contacts: () =>
            import(/* webpackChunckName: 'Contacts' */ "../components/Contacts")
    },
    data() {
        return {
            requests:[],
            friendship:null,
            isPending:true,
            isFriend:false,
            numOfRequests: null
        }
    },
    computed:{
        ...mapState(['authUser'])
    },
    mounted(){
        axios.get(`/api/profile/${this.authUser.id}/requests`)
             .then(res=>{
                 this.requests= res.data
             }).catch(err=>console.log(err))

             this.newRequestListener() 
    },
    methods:{
        manageResponseData(data){
          this.friendship= data.friendship
          this.isPending= data.isPending
          this.isFriend= data.isFriend
        },
        acceptRequest(profileId){
            axios.post(`/api/profile/${profileId}/accept-request`)
                .then(res=>{
                console.log(res.data)
                    this.manageResponseData(res.data)
                }).catch(err=> console.log(err))
        },
        rejectRequest(profileId){
            axios.post(`/api/profile/${profileId}/reject-request`)
                    .then(res=>{
                    this.manageResponseData(res.data)
                    console.log(res.data)
                    }).catch(err=>console.log(err))
        },
    }
};
</script>

<style scoped>
#requests::-webkit-scrollbar {
    width: 2px;
    background-color: #f5f5f5;
}

#requests::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    background-color: #f5f5f5;
}

#requests::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #888;
}
</style>
