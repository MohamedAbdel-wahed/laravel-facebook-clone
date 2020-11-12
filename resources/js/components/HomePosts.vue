<template>
    <div class="mb-24">
        <div
            v-for="(post, index) in posts"
            :key="post.id"
            class="mt-3 pl-6 pr-24 mx-16"
        >
            <div
                class="relative px-4 py-2 bg-white border border-gray-200 rounded-lg"
            >
                <div
                    @click="showPostOptionsModal = !showPostOptionsModal"
                    class=" float-right hover:bg-gray-100 focus:bg-gray-200 cursor-pointer px-3 py-1 rounded-full"
                >
                    <img src="/images/svg/more.svg" class="w-6 h-6" />
                </div>
                <ul
                    v-if="showPostOptionsModal"
                    class="absolute right-0 mr-10 mt-8 w-48 flex flex-col items-center rounded-lg border border-gray-300 bg-gray-100 motion-reduce:transition-none transition-all duration-300 ease-out"
                >
                    <li
                        @click="savePost()"
                        class="w-full flex items-center py-2 px-4 text-sm text-center border-b text-gray-700 hover:bg-gray-200 cursor-pointer"
                    >
                        <img
                            :src="`/images/svg/${icon}`"
                            class="w-6 h-6 rounded-full"
                        />
                        <span class="ml-1 font-bold text-sm text-gray-800">{{
                            savePostStatus
                        }}</span>
                    </li>
                    <li
                        class="w-full flex items-center py-2 px-4 text-sm text-center border-b text-gray-700 hover:bg-gray-200 cursor-pointer"
                    >
                        <img
                            src="/images/svg/edit.svg"
                            class="w-6 h-6 rounded-full"
                        />
                        <span class="ml-1 font-bold text-sm text-gray-800"
                            >Edit</span
                        >
                    </li>
                    <li
                        class="w-full flex items-center py-2 px-4 text-sm text-center border-b text-gray-700 hover:bg-gray-200 cursor-pointer"
                    >
                        <img
                            src="/images/svg/trash.svg"
                            class="w-6 h-6 rounded-full"
                        />
                        <span class="ml-1 font-bold text-sm text-gray-800"
                            >Delete</span
                        >
                    </li>
                    <li
                        class="w-full flex items-center py-2 px-4 text-sm text-center text-gray-700 hover:bg-gray-200 cursor-pointer"
                    >
                        <img
                            src="/images/svg/report.svg"
                            class="w-6 h-6 rounded-full"
                        />
                        <span class="ml-1 font-bold text-sm text-gray-800"
                            >Report this Post</span
                        >
                    </li>
                </ul>
                <div class="W-7/12 flex items-center">
                    <router-link to="#">
                        <img
                            :src="
                                post.user.photo
                                    ? `/storage/uploads/profile/${post.user.photo}`
                                    : '/images/svg/default-male.svg'
                            "
                            class="border border-gray-300 w-10 h-10 rounded-full"
                        />
                    </router-link>
                    <div class="ml-2 flex flex-col">
                        <router-link to="#" class="hover:underline">
                            <h1 class="text-gray-800 font-bold text-sm">
                                {{
                                    post.user.first_name +
                                        " " +
                                        post.user.last_name
                                }}
                            </h1>
                        </router-link>
                        <div class="flex items-center">
                            <p class="text-gray-500 text-xs">
                                {{ post.created_at | formatTime }}
                            </p>
                            <img
                                :src="`/images/svg/${post.privacy}.svg`"
                                class="ml-2 w-4 h-4 rounded-full"
                            />
                        </div>
                    </div>
                </div>
                <div class="mt-3 px-12">
                    <p class="text-sm text-gray-700 break-words">
                        {{ post.content }}
                    </p>
                </div>
                <div class="mt-8 px-10">
                    <GetLikes :postId="post.id" />

                    <div
                        class="float-right -mt-6 hover:underline cursor-pointer"
                    >
                        <span class="text-sm text-gray-700">22 shares</span>
                    </div>
                </div>
                <hr class="mt-2" /> 
                <div class="w-full py-2 px-2 flex">
                    <Like :postId="post.id" />

                     <Comment :postId="post.id" />

                    <div
                        class="w-1/3 flex justify-center items-center px-2 py-1 hover:bg-gray-100 cursor-pointer rounded-lg"
                    >
                        <img
                            src="/images/svg/share.svg"
                            class="w-6 h-6 rounded-full"
                        />
                        <span class="text-sm ml-2 font-bold text-gray-500"
                            >Share</span
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "HomePosts",
    components: {
        Like: () => import(/* webpackChunckName: "Like" */ "./Like"),
        GetLikes: () => import(/* webpackChunckName: "GetLikes" */ "./GetLikes"),
        Comment: () => import(/* webpackChunckName: "Comment" */ "./Comment")
    },
    data() {
        return {
            showPostOptionsModal: false,
            toggleSaveIcon: false,
            icon: "save.svg",
            savePostStatus: "Save Post",
            posts: []
        };
    },
    mounted() {
        axios
            .get("/api/posts")
            .then(res => {
                this.posts = res.data;
                this.$store.dispatch("allPosts", res.data);
            })
            .catch(err => console.log(err));
    },
    methods: {
        savePost() {
            this.toggleSaveIcon = !this.toggleSaveIcon;
            if (this.toggleSaveIcon) {
                this.icon = "saved.svg";
                this.savePostStatus = "Post saved";
            } else {
                this.icon = "save.svg";
                this.savePostStatus = "save Post";
            }
        }
    }
};
</script>
