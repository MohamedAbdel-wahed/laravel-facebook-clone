<template>
    <div class="w-72">
        <ul class="w-11/12 py-2 mx-3">
            <li
                class="my-2 px-10 py-2 font-bold hover:text-blue-500 hover:bg-blue-100 cursor-pointer rounded-lg text-gray-700"
            >
                <router-link
                    :to="{ name: 'Profile', params: { id: authUser.id } }"
                    class="flex items-center"
                >
                    <img
                        :src="
                            authUser.photo
                                ? `/storage/uploads/profile/${authUser.photo}`
                                : '/images/svg/default-male.svg'
                        "
                        class="w-8 h-8 rounded-full"
                    />
                    <span class="ml-2">Your Profile</span>
                </router-link>
            </li>
            <li
                class="my-2 font-bold hover:text-blue-500 hover:bg-blue-100 cursor-pointer rounded-lg text-gray-700"
            >
                <router-link :to="{ name: 'Friends', params: { id: authUser.id } }" @click="this.numOfRequests= 0" class="flex items-center px-10 py-2">
                <img
                    src="/images/svg/friends.svg"
                    class="w-8 h-8 rounded-full"
                />
                <span class="ml-2">Friends</span>
                </router-link>
            </li>
            <li
                class="my-2 font-bold hover:text-blue-500 hover:bg-blue-100 cursor-pointer rounded-lg text-gray-700"
            >
                <router-link :to="{ name: 'FriendRequests', params: { id: authUser.id } }" @click="this.numOfRequests= 0" class="flex items-center px-10 py-2">
                    <img
                    src="/images/svg/add-friend.svg"
                    class="w-8 h-8 rounded-full"
                />
                <span class="ml-2">Requests</span>
                <span class="ml-2 rounded-full bg-red-500 text-white font-semibold px-1 text-sm">{{ numOfRequests>0 ? `+${numOfRequests}` : '' }}</span>
                </router-link>
            </li>
            <li
                class="flex items-center my-2 px-10 py-2 font-bold hover:text-blue-500 hover:bg-blue-100 cursor-pointer rounded-lg text-gray-700"
            >
                <img src="/images/svg/group.svg" class="w-8 h-8 rounded-full" />
                <span class="ml-2">Groups</span>
            </li>
            <li
                class="flex items-center my-2 px-10 py-2 font-bold hover:text-blue-500 hover:bg-blue-100 cursor-pointer rounded-lg text-gray-700"
            >
                <img
                    src="/images/svg/messages.svg"
                    class="w-8 h-8 rounded-full"
                />
                <span class="ml-2">Messages</span>
            </li>
            <li
                class="flex items-center my-2 px-10 py-2 font-bold hover:text-blue-500 hover:bg-blue-100 cursor-pointer rounded-lg text-gray-700"
            >
                <img
                    src="/images/svg/newspaper.svg"
                    class="w-8 h-8 rounded-full"
                />
                <span class="ml-2">News</span>
            </li>
            <li
                class="flex items-center my-2 px-10 py-2 font-bold hover:text-blue-500 hover:bg-blue-100 cursor-pointer rounded-lg text-gray-700"
            >
                <img
                    src="/images/svg/library.svg"
                    class="w-8 h-8 rounded-full"
                />
                <span class="ml-2">Videos</span>
            </li>
            <li
                class="flex items-center my-2 px-10 py-2 font-bold hover:text-blue-500 hover:bg-blue-100 cursor-pointer rounded-lg text-gray-700"
            >
                <img
                    src="/images/svg/calendar.svg"
                    class="w-8 h-8 rounded-full"
                />
                <span class="ml-2">Events</span>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "List",
    data() {
        return {
            numOfRequests: 0
        };
    },
    computed: {
        ...mapState(["authUser"])
    },
    mounted(){
         this.newRequestListener() 
         this.getRequestNotificaton() 
    },
    methods:{
        newRequestListener() {
            Echo.channel(`request.${this.authUser.id}`).listen( 
                "NewRequest",
                request => {
                    this.numOfRequests= request.requests
                }
            );
        },
        getRequestNotificaton(){
            axios.get(`/api/notifications/requests-count`)
                 .then(res=>{
                        this.numOfRequests= res.data
            }).catch(err=> console.log(err))
        },
       
    },
};
</script>
