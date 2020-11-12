<template>
    <div class="px-56 bg-white">
        <div
            :class="[
                profile_owner.cover
                    ? ''
                    : ['border', 'border-gray-800', 'rounded-lg']
            ]"
            class="relative w-full shadow-md"
        >
            <img
                v-if="profile_owner.cover"
                :src="`/storage/uploads/cover/${profile_owner.cover}`"
                class="w-full h-84 rounded-lg z-10"
            />
            <img
                v-else
                src="/images/other/cover.png"
                class="w-full h-84 rounded-lg z-10 opacity-50"
            />
            <div
                class="absolute top-0 left-0 transform translate-x-96 translate-y-48 bg-white border-4 border-white rounded-full"
            >
                <img
                    :src="
                        profile_owner.photo
                            ? `/storage/uploads/profile/${profile_owner.photo}`
                            : '/images/svg/default-male.svg'
                    "
                    class="w-40 h-40 rounded-full"
                />
                <button
                    class="absolute inset-0 w-full h-full z-10 bg-gray-800 opacity-0 hover:opacity-25 hover:shadow-sm rounded-full cursor-pointer transition-all duration-300 ease-out focus:outline-none"
                ></button>
            </div>
            <label
                for="photo"
                class="absolute top-0 left-0 transform translate-x-115 translate-y-72 mt-4 p-2 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-full"
            >
                <img
                    src="/images/svg/camera.svg"
                    class="w-6 h-6"
                    title="change profile photo"
                />
            </label>
            <input
                type="file"
                id="photo"
                name="photo"
                class="absolute right-0 bottom-0 opacity-0"
                style="z-index:-1"
            />
            <label
                for="cover"
                class="flex items-center my-2 mx-6 absolute right-0 bottom-0 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md shadow-sm cursor-pointer"
            >
                <img
                    src="/images/svg/camera.svg"
                    class="w-4 h-4"
                    title="choose cover photo"
                />
                <span class="ml-1 text-gray-900 text-xs font-bold"
                    >Edit Cover Photo</span
                >
            </label>
            <input
                type="file"
                id="cover"
                name="cover"
                class="absolute right-0 bottom-0 opacity-0"
                style="z-index:-1"
            />
        </div>
        <div class="mt-8 ml-6 text-center">
            <h1 class="mt-1 text-3xl font-bold text-gray-800">
                {{ `${profile_owner.first_name} ${profile_owner.last_name}` }}
            </h1>
            <div class="mt-1">
                <p class="text-gray-600 text-sm">
                    {{
                        profile_owner.bio
                            ? profile_owner.bio
                            : "____" | strLimit(95)
                    }}
                </p>
                <button
                    class="text-center px-3 text-sm py-1 font-bold text-blue-600 hover:text-blue-500 focus:outline-none tracking-wide"
                >
                    Edit
                </button>
            </div>
        </div>
        <hr class="my-2 mx-4 rounded-full" />

        <div class="flex">
            <div class="w-2/3 px-6 flex justify-around">
                <button
                    @click="activeTab = 'timeline'"
                    :class="[
                        activeTab == 'timeline'
                            ? ['text-blue-600', 'border-b-4', 'border-blue-600']
                            : ['hover:bg-gray-200', 'rounded-lg']
                    ]"
                    class="mx-2 flex items-center justify-center p-3 text-gray-600 font-bold focus:outline-none transition-all duration-300 ease-out"
                >
                    Timeline
                </button>
                <button
                    @click="activeTab = 'about'"
                    :class="[
                        activeTab == 'about'
                            ? ['text-blue-600', 'border-b-4', 'border-blue-600']
                            : ['hover:bg-gray-200', 'rounded-lg']
                    ]"
                    class="mx-2 flex items-center justify-center p-3 text-gray-600 font-bold focus:outline-none transition-all duration-300 ease-out"
                >
                    About
                </button>
                <button
                    @click="activeTab = 'friends'"
                    :class="[
                        activeTab == 'friends'
                            ? ['text-blue-600', 'border-b-4', 'border-blue-600']
                            : ['hover:bg-gray-200', 'rounded-lg']
                    ]"
                    class="mx-2 flex items-center justify-center p-3 text-gray-600 font-bold focus:outline-none transition-all duration-300 ease-out"
                >
                    Friends
                </button>
                <button
                    @click="activeTab = 'photos'"
                    :class="[
                        activeTab == 'photos'
                            ? ['text-blue-600', 'border-b-4', 'border-blue-600']
                            : ['hover:bg-gray-200', 'rounded-lg']
                    ]"
                    class="mx-2 flex items-center justify-center p-3 text-gray-600 font-bold focus:outline-none transition-all duration-300 ease-out"
                >
                    Photos
                </button>
                <button
                    @click="activeTab = 'archive'"
                    :class="[
                        activeTab == 'archive'
                            ? ['text-blue-600', 'border-b-4', 'border-blue-600']
                            : ['hover:bg-gray-200', 'rounded-lg']
                    ]"
                    class="mx-2 flex items-center justify-center p-3 text-gray-600 font-bold focus:outline-none transition-all duration-300 ease-out"
                >
                    Archive
                </button>
            </div>
            <div class="w-1/3 text-right py-1 mt-1 mr-8">
                <div v-if="authUser.id === profile_owner.id">
                    <EditProfile
                        :profile_owner="profile_owner"
                        :authUser="authUser"
                    />
                </div>
                <div v-else>
                    <AddFriend
                        :profile_owner="profile_owner"
                        :authUser="authUser"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "Head",
    props: ["profile_owner"],
    components: {
        EditProfile: () =>
            import(/* webPackChunckName: 'EditProfile' */ "./EditProfile"),
        AddFriend: () =>
            import(/* webPackChunckName: 'AddFriend' */ "../AddFriend")
    },
    data() {
        return {
            activeTab: "timeline"
        };
    },
    computed: {
        ...mapState(["authUser"])
    },
    updated() {
        this.$store.dispatch("setActiveTab", this.activeTab);
    }
};
</script>

<style scoped></style>
