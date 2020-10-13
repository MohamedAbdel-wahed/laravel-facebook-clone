<template>
 <div v-if="showCommentSection==true" class="container mx-auto overflow-hidden h-full w-11/12 absolute inset-0 left-0 right-0 bg-white border border-gray-200 rounded-lg z-20"> -->
    <NewComment />
    <!-- <GetComments /> -->
</div>
</template>

<script>
import {mapState} from 'vuex'
import NewComment from './NewComment'
import GetComments from './GetComments'

export default {
    name: 'Comment',
    props:[],
     components:{
        NewComment,
        GetComments
    },
    data(){
        return {

        }
    },
    computed:{
        ...mapstate([
            'showCommentSection'
        ])
    },
    mounted(){

    },
    methods:{

    },
}
</script>