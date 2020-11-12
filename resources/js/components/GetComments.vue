<template>
    <div class="">
        <a
            @click="loadComments()"
            v-if="showMore"
            class="m-2 text-gray-600 text-sm hover:underline cursor-pointer"
            >View more comments</a
        >
        <div
            class="max-h-84 w-full overflow-y-scroll overflow-x-hidden mt-4"
            id="post_comments"
        >
            <div
                class="w-10/12 m-2"
                v-for="(comment, index) in comments"
                :key="index"
            >
                <transition name="fade">
                    <div class="flex">
                        <router-link to="#">
                            <img
                                :src="
                                    comment.user.photo
                                        ? `/storage/uploads/profile/${comment.user.photo}`
                                        : '/images/svg/default-male.svg'
                                "
                                class="w-8 h-8 rounded-full"
                            />
                        </router-link>
                        <div>
                            <div class="px-3 py-2 ml-1 bg-gray-100 rounded-lg">
                                <router-link to="#" class="hover:underline">
                                    <span
                                        class="text-sm font-bold text-gray-800"
                                        >{{
                                            comment.user.first_name +
                                                " " +
                                                comment.user.last_name
                                        }}</span
                                    >
                                </router-link>

                                <p class="text-gray-600 text-xs break-words">
                                    {{ comment.content }}
                                </p>
                            </div>
                            <div
                                class="flex items-center justify-center ml-4 mt-1"
                            >
                                <span
                                    style="font-size:13px"
                                    class="text-blue-500 cursor-pointer"
                                    >like</span
                                >
                                <span
                                    style="font-size:13px"
                                    class="ml-2 text-gray-800 cursor-pointer"
                                    >reply</span
                                >
                                <span
                                    style="font-size:11px"
                                    class="ml-3 text-gray-500"
                                    >{{ comment.created_at | formatTime }}</span
                                >
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "GetComments",
    props: ["postId"],
    data() {
        return {
            comments: [],
            nextPage: 0,
            showMore: false
        };
    },
    mounted() {
        this.getComments();
        this.newCommentListener();
    },
    methods: {
        getComments() {
            axios
                .get(`/api/posts/${this.postId}/comments`)
                .then(res => {
                    this.comments = res.data.data;
                    this.$store.dispatch("getComments", this.comments);
                    if (res.data.current_page < res.data.last_page) {
                        this.showMore = true;
                        this.nextPage = res.data.current_page + 1;
                    } else {
                        this.showMore = false;
                    }
                })
                .catch(err => console.log(err));
        },
        loadComments() {
            axios
                .get(`/api/posts/${this.postId}/comments?page=${this.nextPage}`)
                .then(res => {
                    res.data.data.forEach(data => {
                        this.comments.unshift(data);
                    });

                    if (res.data.current_page < res.data.last_page) {
                        this.showMore = true;
                        this.nextPage = res.data.current_page + 1;
                    } else {
                        this.showMore = false;
                    }
                })
                .catch(err => console.log(err));
        },
        newCommentListener() {
            Echo.channel(`post.${this.postId}`).listen( 
                "NewComment",
                comment => {
                    this.comments.unshift(comment);
                }
            );
        }
    }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

#post_comments::-webkit-scrollbar {
    width: 1px;
    background-color: #f5f5f5;
}

#post_comments::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 2px;
    background-color: #f5f5f5;
}

#post_comments::-webkit-scrollbar-thumb {
    border-radius: 2px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #888;
}
</style>
