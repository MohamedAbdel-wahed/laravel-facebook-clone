<template>
    <div>
        <div
            class="flex items-center px-6 py-4 border border-gray-200 rounded-lg bg-white shadow-sm"
        >
            <router-link to="#">
                <img
                    :src="
                        authUser.photo
                            ? `/storage/uploads/profile/${authUser.photo}`
                            : '/images/svg/default-male.svg'
                    "
                    class="h-10 w-12 rounded-full border border-gray-200"
                />
            </router-link>
            <input
                @click="showCreatePostModal = true"
                class="w-full ml-2 px-6 py-2 text-gray-700 border border-gray-200 bg-gray-100 hover:bg-gray-200 focus:outline-none rounded-full cursor-pointer transition-all duration-200 ease-out"
                placeholder="What's On Your Mind, Mohamed?"
            />
        </div>
        <button
            v-if="showCreatePostModal"
            @click="showCreatePostModal = false"
            class="w-full h-full fixed inset-0 bg-gray-500 opacity-25 z-30"
        ></button>
        <div
            v-if="showCreatePostModal"
            :class="[
                route.includes('/profile/') ? ['mt-32', '-ml-40'] : 'mt-6'
            ]"
            class="w-120 fixed top-0 py-3 px-6 bg-white border border-gray-200 rounded-lg shadow-sm z-30"
        >
            <div
                @click="showCreatePostModal = false"
                class="float-right p-3 rounded-full hover:bg-gray-100 cursor-pointer"
            >
                <img src="/images/svg/close.svg" class="w-4 h-4 rounded-full" />
            </div>
            <h1 class="my-2 text-center text-2xl font-bold text-gray-800">
                Create Post
            </h1>
            <hr />
            <form @submit.prevent="createPost()" enctype="multipart/form-data">
                <div class="flex my-4">
                    <router-link to="#">
                        <img
                            src="/images/other/user.jpeg"
                            class="w-10 h-10 rounded-full"
                        />
                    </router-link>
                    <div class="flex flex-col ml-2">
                        <router-link to="#">
                            <h1 class="font-bold text-gray-800">John Doe</h1>
                        </router-link>
                        <select
                            v-model="privacy"
                            class="mt-1 py-1 px-2 text-sm bg-gray-100 cursor-pointer border border-gray-200 rounded-lg focus:outline-none focus:border-blue-200 select-none"
                            name="privacy"
                        >
                            <option value="public">Public</option>
                            <option value="my_friends">Friends</option>
                            <option value="only_me">Only me</option>
                        </select>
                    </div>
                </div>
                <textarea
                    name="content"
                    v-model="content"
                    class="w-full block my-2 py-2 px-4 focus:outline-none text-sm text-gray-700 "
                    rows="4"
                    placeholder="What's On Your Mind, Mohamed?"
                ></textarea>
                <div
                    class="flex items-center px-4 py-2 border border-gray-300 rounded-lg"
                >
                    <div class="w-1/2">
                        <h1 class="font-bold text-sm text-gray-700">
                            Add to Your Post
                        </h1>
                    </div>
                    <div class="w-1/2">
                        <div class="flex justify-around">
                            <div
                                class="relative px-8 py-1 hover:bg-gray-100 rounded-lg cursor-pointer"
                            >
                                <input
                                    type="file"
                                    name="gallery"
                                    class="absolute mx-4 left-0 top-0 z-10 w-10 opacity-0 cursor-pointer"
                                    title="photo/video"
                                />
                                <img
                                    src="/images/svg/gallery.svg"
                                    class="absolute top-0 left-0 mx-4 w-8 h-8"
                                />
                            </div>
                            <div
                                class="px-6 py-1 hover:bg-gray-100 rounded-lg cursor-pointer"
                                title="tag friend"
                            >
                                <img
                                    src="/images/svg/user.svg"
                                    class="w-6 h-6"
                                />
                            </div>
                            <div
                                class="px-6 py-1 hover:bg-gray-100 rounded-lg cursor-pointer"
                                title="feeling/activity"
                            >
                                <img
                                    src="/images/svg/smile.svg"
                                    class="w-6 h-6"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    :class="[
                        content.trim() == ''
                            ? ['bg-gray-200', 'text-gray-700']
                            : [
                                  'bg-blue-500',
                                  'hover:bg-blue-600',
                                  'focus:bg-blue-700',
                                  'text-white'
                              ]
                    ]"
                    class="mt-4 mb-2 w-full px-2 flex justify-center font-bold py-2 focus:outline-none rounded-lg"
                >
                    Post
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "NewPost",
    data() {
        return {
            showCreatePostModal: false,
            privacy: "public",
            content: "",
            route: location.pathname
        };
    },
    computed: {
        ...mapState(["authUser", "posts"])
    },
    methods: {
        createPost() {
            if (this.content.trim()) {
                axios
                    .post("/api/posts/create", {
                        privacy: this.privacy,
                        content: this.content
                    })
                    .then(res => {
                        this.posts.unshift(res.data);
                        this.content = "";
                        this.showCreatePostModal = false;
                    })
                    .catch(err => console.log(err));
            }
        }
    }
};
</script>
