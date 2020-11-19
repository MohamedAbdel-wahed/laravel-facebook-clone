<template>
    <div>
        <div class="px-4 py-3 bg-white border border-gray-200 rounded-lg">
            <h1 class="text-gray-800 font-bold text-lg">Intro</h1>
            <div class="flex items-center mt-2 ml-1">
                <img src="/images/svg/my-home.svg" class="w-4 h-4" />
                <h2 class="ml-2 text-sm text-gray-700">
                    Lives in <strong class="text-black">Cairo</strong>
                </h2>
            </div>
            <div class="flex items-center mt-3 ml-1">
                <img src="/images/svg/location.svg" class="w-4 h-4" />
                <h2 class="ml-2 text-sm text-gray-700">
                    From <strong class="text-black">Cairo</strong>
                </h2>
            </div>
            <div class="flex items-center mt-3 ml-1">
                <img src="/images/svg/heart.svg" class="w-4 h-4" />
                <h2 class="ml-2 text-sm text-gray-700">Single</h2>
            </div>
            <div class="flex items-center mt-3 ml-1">
                <img src="/images/svg/follower.svg" class="w-4 h-4" />
                <h2 class="ml-2 text-sm text-gray-700">
                    Followed by <strong class="text-black">127 people</strong>
                </h2>
            </div>
            <button
                class="w-full mt-3 mb-1 px-4 py-2 text-gray-800 font-bold text-sm bg-gray-200 hover:bg-gray-300 focus:outline-none rounded-lg"
            >
                Edit Details
            </button>
        </div>
        <!-- Photos -->
        <div class=" mt-3 px-4 py-3 bg-white border border-gray-200 rounded-lg">
            <router-link
                :to="`profile/${profile_owner.id}/photos`"
                class="float-right mt-1 text-sm text-blue-500 hover:underline"
                >See All</router-link
            >
            <h1 class="text-gray-800 font-bold text-lg">Photos</h1>
            <div class="flex flex-wrap mt-2">
                <div
                    v-for="(photo, index) in photos"
                    :key="index"
                    class="p-1 bg-white rounded-md w-1/3"
                >
                    <img
                        :src="`/storage/uploads/profile/${photo}`"
                        class="w-32 h-24 rounded-sm"
                    />
                </div>
            </div>
        </div>
        <!--Covers-->
        <div class=" mt-3 px-4 py-3 bg-white border border-gray-200 rounded-lg">
            <router-link
                :to="`profile/${profile_owner.id}/covers`"
                class="float-right mt-1 text-sm text-blue-500 hover:underline"
                >See All</router-link
            >
            <h1 class="text-gray-800 font-bold text-lg">Covers</h1>
            <div class="flex flex-wrap mt-2">
                <div
                    v-for="(cover, index) in covers"
                    :key="index"
                    class="p-1 bg-white rounded-md w-1/3"
                >
                    <img
                        :src="`/storage/uploads/cover/${cover}`"
                        class="w-32 h-24 rounded-sm"
                    />
                </div>
            </div>
        </div>
        <!-- Friends -->
        <div class=" mt-3 px-4 py-3 bg-white border border-gray-200 rounded-lg">
            <router-link
                to="#"
                class="float-right mt-1 text-sm text-blue-500 hover:underline"
                >See All</router-link
            >
            <h1 class="text-gray-800 font-bold text-lg">Friends</h1>
            <p class="mb-2 text-gray-400 font-semibold text-sm">325 friends</p>
            <div class="flex flex-wrap mt-2">
                <div class="p-1 bg-white rounded-md w-1/3">
                    <router-link to="#">
                        <img
                            src="/images/other/user.jpeg"
                            class="w-32 h-24 rounded-lg"
                        />
                    </router-link>
                    <router-link to="#" class="text-center">
                        <h1
                            class="mt-1 px-1 text-xs font-semibold text-gray-800"
                        >
                            Ahmed Rakaa
                        </h1>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Info",
    props: ["profile_owner"],
    data() {
        return {
            photos: [],
            covers: []
        };
    },
    mounted(){
        console.log(profile_owner)
    },
    methods: {
        parseImages() {
            this.photos = JSON.parse(this.profile_owner.all_photos);
            this.covers = JSON.parse(this.profile_owner.all_covers);
        }
    },
    mounted() {
        this.parseImages();
    },
    watch: {
        profile_owner: "parseImages"
    }
};
</script>
