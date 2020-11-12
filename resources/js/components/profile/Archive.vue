<template>
    <div class="mt-16 overflow-hidden" id="profile" style="height:92.5rem">
        <ProfileHead :profile_owner="profile_owner" />
        <h1 class="mt-20 font-bold text-xl">Archive Page</h1>
    </div>
</template>

<script>
import getProfile from "../../mixins/getProfile";

export default {
    name: "Archive",
    components: {
        ProfileHead: () =>
            import(/* webpackChunckName: 'ProfileHead' */ "./ProfileHead")
    },

    mixins: [getProfile]
};
</script>
