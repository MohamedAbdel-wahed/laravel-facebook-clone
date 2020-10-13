<template>
    <div class="overflow-hidden">
        <Header />
        <router-view />
    </div>
</template>

<script>

import Header from './components/Header'
export default {
    name: 'Root',
    props:['authUser'],
    components:{
        Header
    },
    mounted(){
        this.$store.dispatch('getAuthUser',this.authUser)
    }
}
</script>