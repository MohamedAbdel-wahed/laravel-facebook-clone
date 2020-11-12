<template>
    <div class="transform translate-y-16 flex">
        <List />
        <div id="videos" class="flex-1 h-screen overflow-y-scroll">
            <h1 class="font-bold text-3xl my-10">Videos Page</h1>
        </div>
        <Contacts />
    </div>
</template>

<script>
export default {
    name: "Videos",
    components: {
        List: () =>
            import(/* webpackChunckName: 'List' */ "../components/List"),
        Contacts: () =>
            import(/* webpackChunckName: 'Contacts' */ "../components/Contacts")
    },
    data() {
        return {};
    },
    mounted() {}
};
</script>

<style scoped>
#videos::-webkit-scrollbar {
    width: 2px;
    background-color: #f5f5f5;
}

#videos::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    background-color: #f5f5f5;
}

#videos::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #888;
}
</style>
