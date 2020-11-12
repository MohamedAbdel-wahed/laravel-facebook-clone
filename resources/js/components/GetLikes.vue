<template>
    <div class="w-10">
        <div
            class="flex items-center hover:underline cursor-pointer"
            v-if="users.length > 0"
            @click="showAllLikesModal = true"
            @mouseover="showSomeLikesModal = true"
            @mouseleave="showSomeLikesModal = false"
        >
            <span class="text-sm">{{ users.length }}</span>
            <div class="p-1 ml-1 bg-blue-200 rounded-full">
                <img src="/images/svg/likes.svg" class="rounded-full w-4 h-4" />
            </div>
        </div>
        <div
            v-if="showSomeLikesModal"
            class="absolute top-0 mt-36 w-48 max-h-56 py-2 px-4 bg-gray-800 rounded-lg z-10"
        >
            <div
                class="flex items-center my-1"
                v-if="index < 3"
                v-for="(user, index) in users"
                :key="index"
            >
                <img
                    :src="
                        user.photo
                            ? `/storage/uploads/profile/${user.photo}`
                            : '/images/svg/default-male.svg'
                    "
                    class="border border-gray-600 w-4 h-4 rounded-full"
                />
                <h1 class="ml-1 text-white text-xs">
                    {{
                        (user.first_name + " " + user.last_name) | strLimit(17)
                    }}
                </h1>
            </div>
            <h3
                v-if="users.length > 3"
                class="mx-2 my-1 text-white text-xs font-semibold"
            >
                and {{ users.length - 3 }} others
            </h3>
        </div>
        <button
            v-if="showAllLikesModal"
            @click="showAllLikesModal = false"
            class="w-full h-full fixed inset-0 bg-gray-800 opacity-25 z-20"
        ></button>
        <div
            v-if="showAllLikesModal"
            class="w-3/12 fixed top-0 mt-32 p-2 bg-white border border-gray-300 rounded-lg z-20"
        >
            <div
                @click="showAllLikesModal = false"
                class="float-right p-3 rounded-full hover:bg-gray-100 cursor-pointer"
            >
                <img src="/images/svg/close.svg" class="w-4 h-4 rounded-full" />
            </div>
            <div
                v-if="users.length > 0"
                class="mt-6 h-100 overflow-auto px-3 py-3"
                id="post_likes"
            >
                <router-link
                    @click="showAllLikesModal = false"
                    :to="{ name: 'Profile', params: { id: user.id } }"
                    v-for="(user, index) in users"
                    :key="index"
                    class="my-2 flex items-center px-6 py-1 hover:bg-gray-200 rounded-full"
                >
                    <img
                        :src="
                            user.photo
                                ? `/storage/uploads/profile/${user.photo}`
                                : '/images/svg/default-male.svg'
                        "
                        class="border border-gray-300 w-8 h-8 rounded-full"
                    />
                    <h1 class="ml-1 text-gray-800 text-sm font-semibold">
                        {{
                            (user.first_name + " " + user.last_name)
                                | strLimit(19)
                        }}
                    </h1>
                </router-link>
            </div>
            <div v-else class="text-center my-4">
                <h1 class="text-gray-500 font-bold">
                    No one liked this post yet
                </h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "GetLikes",
    props: ["postId"],
    data() {
        return {
            users: [],
            showSomeLikesModal: false,
            showAllLikesModal: false
        };
    },
    mounted() {
        this.getLikes();
    },
    methods: {
        getLikes() {
            axios
                .get(`/api/posts/${this.postId}/likes`)
                .then(res => {
                    this.users = res.data;
                })
                .catch(err => console.log(err));
        }
    },
    watch: {
        users: "getLikes"
    }
};
</script>

<style scoped>
#post_likes::-webkit-scrollbar {
    width: 1px;
    background-color: #f5f5f5;
}

#post_likes::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 2px;
    background-color: #f5f5f5;
}

#post_likes::-webkit-scrollbar-thumb {
    border-radius: 2px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #888;
}
</style>
