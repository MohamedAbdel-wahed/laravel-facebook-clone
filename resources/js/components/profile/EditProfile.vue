<style scoped>
#edit_profile::-webkit-scrollbar {
    width: 1px;
    background-color: #f5f5f5;
}

#edit_profile::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 2px;
    background-color: #f5f5f5;
}

#edit_profile::-webkit-scrollbar-thumb {
    border-radius: 2px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #888;
}
</style>

<template>
    <div>
        <button
            @click="showEditProfileModal = true"
            class="px-6 py-2 font-bold text-gray-800 text-sm bg-gray-200 tracking-wide hover:bg-gray-300 focus:outline-none rounded-lg"
        >
            Edit Profile
        </button>
        <button
            v-if="showEditProfileModal"
            @click="showEditProfileModal = false"
            class="w-full h-full fixed inset-0 bg-gray-500 opacity-25 z-30 cursor-default"
        ></button>
        <div
            v-if="showEditProfileModal"
            class="w-11/12 fixed top-0 mb-16 -ml-152 pt-3 pb-10 px-10 bg-white border border-gray-200 rounded-lg shadow-md z-30 h-screen overflow-auto"
            id="edit_profile"
        >
            <div
                @click="showEditProfileModal = false"
                class="float-right p-3 rounded-full hover:bg-gray-100 cursor-pointer"
            >
                <img src="/images/svg/close.svg" class="w-4 h-4 rounded-full" />
            </div>
            <h1
                class="my-4 text-4xl font-bold text-blue-900 text-center select-none"
            >
                Edit Profile Info
            </h1>

            <form @submit.prevent="saveChanges" enctype="multipart/form-data">
                <div class="flex items-center mx-56 mt-16 mb-8">
                    <label
                        for="first_name"
                        class="text-lg font-bold text-gray-800 tracking-wide select-none"
                        >First Name:</label
                    >
                    <input
                        type="text"
                        name="first_name"
                        v-model="fName"
                        class="w-5/12 ml-2 px-6 py-2 text-sm text-gray-700 border border-gray-300 focus:outline-none focus:border-blue-300 rounded-lg"
                        autocomplete="off"
                        placeholder="Enter Your First Name"
                    />
                </div>

                <div class="flex items-center mx-56 mt-8 mb-8">
                    <label
                        for="last_name"
                        class="text-lg font-bold text-gray-800 tracking-wide select-none"
                        >Last Name:</label
                    >
                    <input
                        type="text"
                        name="last_name"
                        v-model="lName"
                        class="w-5/12 ml-2 px-6 py-2 text-sm text-gray-700 border border-gray-300 focus:outline-none focus:border-blue-300 rounded-lg"
                        autocomplete="off"
                        placeholder="Enter Your Last Name"
                    />
                </div>

                <hr />

                <div class="flex items-center mx-56 my-8 py-2 select-none">
                    <div class="w-1/2">
                        <img
                            v-if="profile_owner.photo"
                            :src="
                                photoPreview
                                    ? photoPreview
                                    : `/storage/uploads/profile/${profile_owner.photo}`
                            "
                            class="w-40 h-40 rounded-full"
                        />
                        <img
                            v-else
                            :src="
                                photoPreview
                                    ? photoPreview
                                    : '/images/svg/default-male.svg'
                            "
                            class="w-40 h-40 rounded-full border border-gray-200"
                        />
                    </div>
                    <div class="w-1/2 relative ml-20">
                        <label
                            title="choose profile photo"
                            class="w-9/12 h-12 absolute top-0 left-0 flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-md shadow-sm cursor-pointer"
                        >
                            <img src="/images/svg/camera.svg" class="w-6 h-6" />
                            <span class="ml-2 text-gray-900 text-sm font-bold"
                                >Edit Profile Photo</span
                            >
                        </label>
                        <input
                            type="file"
                            name="photo"
                            class="w-9/12 h-12 absolute top-0 left-0 px-6 py-3 opacity-0 z-10"
                            @change="selectPhoto"
                        />
                    </div>
                </div>

                <hr />

                <div class="flex items-center mx-56 my-8 py-2 select-none">
                    <div class="w-1/2">
                        <img
                            v-if="profile_owner.cover"
                            :src="
                                coverPreview
                                    ? coverPreview
                                    : `/storage/uploads/cover/${profile_owner.cover}`
                            "
                            class="w-72 h-40 rounded-lg"
                        />
                        <img
                            v-else
                            :src="
                                coverPreview
                                    ? coverPreview
                                    : '/images/other/cover.png'
                            "
                            class="w-72 h-40 rounded-lg"
                        />
                    </div>
                    <div class="w-1/2 relative ml-20">
                        <label
                            title="choose Cover Image"
                            class="w-9/12 h-12 absolute top-0 left-0 flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-md shadow-sm cursor-pointer"
                        >
                            <img src="/images/svg/camera.svg" class="w-6 h-6" />
                            <span class="ml-2 text-gray-900 text-sm font-bold"
                                >Edit Cover Photo</span
                            >
                        </label>
                        <input
                            type="file"
                            name="cover"
                            class="w-9/12 h-12 absolute top-0 left-0 px-6 py-3 opacity-0 z-10"
                            @change="selectCover"
                        />
                    </div>
                </div>

                <hr />

                <div class="flex mx-56 my-8">
                    <label
                        for="bio"
                        class="text-xl font-bold text-gray-800 tracking-wide select-none"
                        >Bio</label
                    >
                    <textarea
                        name="bio"
                        rows="3"
                        v-model="bio"
                        class="w-2/3 ml-2 px-4 py-2 border border-gray-300 focus:border-blue-300 focus:outline-none rounded-lg"
                        placeholder="Type something about you..."
                    ></textarea>
                </div>

                <div class="mt-16 text-center">
                    <button
                        class="px-6 py-2 text-white hover:text-blue-200 bg-blue-500 focus:outline-none focus:bg-blue-600 rounded-lg"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "EditProfile",
    props: ["authUser", "profile_owner"],
    data() {
        return {
            showEditProfileModal: false,
            photoPreview: null,
            coverPreview: null,
            fName: this.profile_owner.first_name,
            lName: this.profile_owner.last_name,
            bio: this.profile_owner.bio,
            photo: null,
            cover: null
        };
    },
    methods: {
        selectPhoto(e) {
            this.photo = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.addEventListener("load", e => {
                this.photoPreview = e.target.result;
            });
        },
        selectCover(e) {
            this.cover = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.addEventListener("load", e => {
                this.coverPreview = e.target.result;
            });
        },
        saveChanges() {
            const config = {
                headers: { "content-type": "multipart/form-data" }
            };

            let formData = new FormData();
            formData.append("_method", "PATCH");
            formData.append("first_name", this.fName);
            formData.append("last_name", this.lName);
            formData.append("bio", this.bio);
            this.photo ? formData.append("photo", this.photo) : "";
            this.cover ? formData.append("cover", this.cover) : "";

            axios
                .post(`/api/profile/${this.authUser.id}/edit`, formData, config)
                .then(res => {
                    console.log(res.data);
                    this.photo = this.cover = null;
                    this.showEditProfileModal = false;
                    window.scrollTo(0, 0);
                })
                .catch(err => console.log({ err }.err.response.data.errors));
        }
    }
};
</script>
