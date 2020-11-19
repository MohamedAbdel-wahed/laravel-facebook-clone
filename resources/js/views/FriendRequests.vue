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
                   <ManageRequest :profileId="request.id" />
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
            import(/* webpackChunckName: 'Contacts' */ "../components/Contacts"),
        ManageRequest: () =>
            import(/* webpackChunckName: 'ManageRequest' */ "../components/ManageRequest"),
    },
    data() {
        return {
            requests:[]
        }
    },
    computed:{
        ...mapState(['authUser'])
    },
    mounted(){
        this.getRequests()
        this.markRequestsAsRead()
    },
    methods:{
        getRequests(){
             axios.get(`/api/profile/${this.authUser.id}/requests`)
             .then(res=>{
                 this.requests= res.data
             }).catch(err=>console.log(err))
        },
         markRequestsAsRead(){
            axios.get(`/api/notifications/requests`).then(()=>{
                // readed the requests notifications in this step
            }).catch(err=>console.log(err))
        }
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
