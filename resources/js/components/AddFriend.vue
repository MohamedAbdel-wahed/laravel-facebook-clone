<template>
  <div>
      <button
          v-if="!isPending && !isFriend"
          @click="addFriend()"
          class="px-4 py-1 font-semibold text-white text-sm tracking-wide bg-blue-500 hover:bg-blue-600 focus:outline-none rounded-lg"
      >
          add friend
      </button>
      <div v-if="isPending && !isFriend" class="flex justify-end">
            <button
                v-if="friendship.reciever_id === profile_owner.id"
                @click="addFriend()"
                class="px-4 py-1 font-semibold text-gray-800 text-sm tracking-wide bg-white border border-gray-400 rounded-lg shadow-sm hover:bg-gray-900 hover:text-white focus:outline-none"
            >
               remove request
            </button>
            <div v-if="friendship.sender_id === profile_owner.id" class="flex justify-end items-center">
                <button
                  @click="acceptRequest()"
                      class="px-4 py-1 font-semibold text-white bg-blue-500 text-sm tracking-wide hover:bg-blue-600 focus:outline-none rounded-lg"
                  >
                      accept
                </button>
                <button
                @click="rejectRequest()"
                    class="ml-3 px-4 py-1 font-semibold text-gray-900 bg-white text-sm tracking-wide border border-gray-300 hover:text-red-400 focus:outline-none rounded-lg"
                >
                    reject
                </button>
            </div>
      </div>
      <button 
      @click="removeFriend()"
      v-if="isFriend && !isPending"
      class="px-4 py-1 font-semibold text-gray-800 text-sm tracking-wide bg-white border border-gray-300 rounded-lg shadow-sm hover:text-red-400 focus:outline-none"
      >
      remove friend
      </button>
  </div>
</template>

<script>
export default {
  name: "AddFriend",
  props: ["profile_owner", "authUser"],
  data() {
    return {
      friendship: null,
      isPending: false,
      isFriend: false
    }
  },
  created() {
    axios
      .get(`/api/profile/${this.profile_owner.id}/isPending`)
      .then((res) => {
        this.manageResponseData(res.data)
      })
      .catch((err) => console.log(err));
  },
  methods: {
    manageResponseData(data){
          this.friendship= data.friendship
          this.isPending= data.isPending
          this.isFriend= data.isFriend
    },
    addFriend() {
      axios
        .post(`/api/profile/${this.profile_owner.id}/add`)
        .then((res) => {
            this.manageResponseData(res.data)
        })
        .catch((err) => console.log(err));
    },
   
    acceptRequest(){
      axios.post(`/api/profile/${this.profileId}/accept-request`)
          .then(res=>{
          console.log(res.data)
              this.manageResponseData(res.data)
          }).catch(err=> console.log(err))
    },
    rejectRequest(){
      axios.post(`/api/profile/${this.profile_owner.id}/reject-request`)
            .then(res=>{
              this.manageResponseData(res.data)
              console.log(res.data)
            }).catch(err=>console.log(err))
    },
    removeFriend(){
      axios.post(`/api/profile/${this.profile_owner.id}/remove-friend`)
           .then(res=>{
             this.manageResponseData(res.data)
             console.log(res.data)
           }).catch(err=>console.log(err))
    }
  }
};
</script>
