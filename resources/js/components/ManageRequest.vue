<template>
<div>
    <div v-if="isPending && !isFriend" class="flex items-center">
        <button @click="acceptRequest(profileId)" class="mr-3 px-4 py-1 font-semibold text-sm text-white bg-blue-500 hover:text-blue-200 focus:outline-none focus:bg-blue-700 rounded-lg">Accept</button>
        <button @click="rejectRequest(profileId)" class="px-4 py-1 font-semibold text-sm text-gray-900 bg-white hover:text-red-300 border border-gray-200 focus:outline-none focus:bg-red-700 rounded-lg">Reject</button>
    </div>
    <div v-if="!isPending && isFriend" class="text-green-600 text-sm">
        <p>Happy Friendship</p>
    </div>
    <div v-if="!isPending && !isFriend" class="text-red-600 text-sm">
        <p>Rejected</p>
    </div>
</div>
</template>

<script>
export default {
    name: 'ManageRequest',
    props:['profileId'],
    data(){
        return {
            friendship:null,
            isPending:true,
            isFriend:false,
            numOfRequests: null
        }
    },
    mounted(){

    },
    methods: {
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
}
</script>