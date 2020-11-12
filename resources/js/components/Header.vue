<template>
    <div
        class="fixed top-0 w-full h-16 bg-white shadow-md flex items-center px-8 z-20"
    >
        <div class="w-3/12 flex items-center px-4">
            <img src="/images/svg/fb-logo.svg" class="w-10 h-10" />
            <input
                class="w-56 ml-1 px-4 py-2 bg-gray-100 text-gray-900 text-sm border border-gray-100 focus:outline-none focus:border-blue-200 rounded-full"
                placeholder="Search Facebook"
            />
        </div>
        <div class="flex-1">
            <ul class="flex justify-between items-center px-20">
                <li
                    :class="[
                        path == '/home'
                            ? ''
                            : ['hover:bg-gray-100', 'rounded-lg']
                    ]"
                >
                    <router-link
                        :class="[
                            path == '/home'
                                ? ['border-b-4', 'border-blue-600', 'mt-3']
                                : ''
                        ]"
                        class="inline-block py-4 px-8"
                        :to="{ name: 'Home' }"
                    >
                        <img
                            :src="
                                path == '/home'
                                    ? '/images/svg/active-home.svg'
                                    : '/images/svg/home.svg'
                            "
                            class="w-6"
                        />
                    </router-link>
                </li>
                <li
                    :class="[
                        path == '/videos'
                            ? ''
                            : ['hover:bg-gray-100', 'rounded-lg']
                    ]"
                >
                    <router-link
                        :class="[
                            path == '/videos'
                                ? ['border-b-4', 'border-blue-600', 'mt-3']
                                : ''
                        ]"
                        class="inline-block py-3 px-8"
                        :to="{ name: 'Videos' }"
                    >
                        <img
                            :src="
                                path == '/videos'
                                    ? '/images/svg/active-youtube.svg'
                                    : '/images/svg/youtube.svg'
                            "
                            class="mt-2 w-6"
                        />
                    </router-link>
                </li>
                <li
                    :class="[
                        path == '/notifications'
                            ? ''
                            : ['hover:bg-gray-100', 'rounded-lg']
                    ]"
                >
                    <router-link
                        :class="[
                            path == '/notifications'
                                ? ['border-b-4', 'border-blue-600', 'mt-3']
                                : ''
                        ]"
                        class="inline-block py-4 px-8"
                        :to="{ name: 'Notifications' }"
                    >
                        <img
                            :src="
                                path == '/notifications'
                                    ? '/images/svg/active-bell.svg'
                                    : '/images/svg/bell.svg'
                            "
                            class="w-6"
                        />
                    </router-link>
                </li>
                <li
                    :class="[
                        path == `/${username_slug}/messages`
                            ? ''
                            : ['hover:bg-gray-100', 'rounded-lg']
                    ]"
                >
                    <router-link
                        :class="[
                            path == `/${username_slug}/messages`
                                ? ['border-b-4', 'border-blue-600', 'mt-3']
                                : ''
                        ]"
                        class="inline-block py-4 px-8"
                        :to="{
                            name: 'Messages',
                            params: { username: username_slug }
                        }"
                    >
                        <img
                            :src="
                                path == `/${username_slug}/messages`
                                    ? '/images/svg/active-messenger.svg'
                                    : '/images/svg/messenger.svg'
                            "
                            class="w-6"
                        />
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="w-3/12 px-4 select-none">
            <div
                class="transform mt-4 flex flex-col motion-reduce:transform-none motion-reduce:transition-none transition-all duration-200 ease-out"
                :class="[infoModal ? ['translate-y-24', 'mt-12'] : '']"
            >
                <div
                    @click="infoModal = !infoModal"
                    class="flex justify-center items-center my-4 ml-40 cursor-pointer"
                >
                    <img
                        :src="
                            authUser.photo
                                ? `/storage/uploads/profile/${authUser.photo}`
                                : '/images/svg/default-male.svg'
                        "
                        class="w-8 h-8 rounded-full hover:shadow-md"
                    />
                    <img
                        src="/images/svg/down-arrow.svg"
                        class="w-4 ml-1 rounded-full hover:shadow-md"
                    />
                </div>
                <div
                    v-if="infoModal"
                    class="z-20 relative pb-4 flex items-center w-10/12 rounded-lg bg-white shadow-md"
                >
                    <ul class="w-full h-full flex flex-col mt-3">
                        <li
                            class="py-2 px-4 hover:bg-gray-100 rounded-lg cursor-pointer"
                        >
                            <router-link class="flex items-center" to="#">
                                <img
                                    :src="
                                        authUser.photo
                                            ? `/storage/uploads/profile/${authUser.photo}`
                                            : '/images/svg/default-male.svg'
                                    "
                                    class="w-10 h-10 rounded-full"
                                />
                                <span class="ml-2 font-bold text-gray-600">{{
                                    authUser.first_name +
                                        " " +
                                        authUser.last_name
                                }}</span>
                            </router-link>
                        </li>
                        <hr />
                        <li
                            class="mt-2 hover:bg-gray-100 py-2 px-4 cursor-pointer rounded-lg"
                        >
                            <router-link class="flex items-center" to="#">
                                <img
                                    src="/images/svg/help.svg"
                                    class="w-6 h-6 rounded-full"
                                />
                                <span
                                    class="ml-2 font-bold text-sm text-gray-600"
                                    >Help & Support</span
                                >
                            </router-link>
                        </li>
                        <li
                            class="mt-2 hover:bg-gray-100 py-2 px-4 cursor-pointer rounded-lg"
                        >
                            <router-link class="flex items-center" to="#">
                                <img
                                    src="/images/svg/settings.svg"
                                    class="w-6 h-6 rounded-full"
                                />
                                <span
                                    class="ml-2 font-bold text-sm text-gray-600"
                                    >Settings</span
                                >
                            </router-link>
                        </li>
                        <li
                            class="mt-2 hover:bg-gray-100 py-2 px-4 cursor-pointer rounded-lg"
                        >
                            <a @click="logout()" class="flex items-center">
                                <img
                                    src="/images/svg/back.svg"
                                    class="w-6 h-6 rounded-full"
                                />
                                <span
                                    class="ml-2 font-bold text-sm text-gray-600"
                                    >Logout</span
                                >
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import slugify from "slugify";

export default {
    name: "Header",
    data() {
        return {
            infoModal: false,
            path: location.pathname
        };
    },
    computed: {
        ...mapState(["authUser"]),
        username_slug() {
            return slugify(
                `${this.authUser.first_name} ${this.authUser.last_name}`,
                {
                    replacement: "-",
                    lower: true
                }
            );
        }
    },
    methods: {
        async logout() {
            await axios.post("/logout", {}).then(() => {
                location.href = "/login";
            });
        },
        updatedRoute() {
            this.path = this.$router.history.current.fullPath;
        }
    },
    watch: {
        $route: "updatedRoute"
    }
};
</script>
