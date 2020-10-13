<template>
    <div class="fixed top-0 w-full h-16 bg-white shadow-md flex items-center px-8 z-20">
        <div class="w-3/12 flex items-center px-4">
            <img src="/images/svg/fb-logo.svg" class="w-10 h-10">
            <input class="w-56 ml-1 px-4 py-2 bg-gray-100 text-gray-900 text-sm border border-gray-100 focus:outline-none focus:border-blue-200 rounded-full" placeholder="Search Facebook">
        </div>
        <div class="flex-1">
            <ul class="flex justify-around items-center px-24"> 
                <li class="hover:bg-gray-100 rounded-lg">
                    <router-link class="inline-block py-4 px-6" :to="{name:'Home'}">
                        <img src="/images/svg/home.svg" class="w-6">
                    </router-link>
                </li>
                <li class="hover:bg-gray-100 rounded-lg">
                    <router-link class="inline-block py-3 px-6" :to="{name:'Home'}">
                        <img src="/images/svg/youtube.svg" class="mt-2 w-6">
                    </router-link>
                </li>
                <li class="hover:bg-gray-100 rounded-lg">
                    <router-link class="inline-block py-4 px-6" :to="{name:'Home'}">
                        <img src="/images/svg/bell.svg" class="w-6">
                    </router-link>
                </li>
                <li class="hover:bg-gray-100 rounded-lg">
                    <router-link class="inline-block py-4 px-6" :to="{name:'Home'}">
                        <img src="/images/svg/messenger.svg" class="w-6">
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="w-3/12 px-4 select-none">
            <div class="transform mt-4 flex flex-col motion-reduce:transform-none motion-reduce:transition-none transition-all duration-200 ease-out" :class="[infoModal ? ['translate-y-24','mt-12'] : '']">
               <div @click="infoModal=!infoModal" class="flex justify-center items-center my-4 ml-40 cursor-pointer">
                   <img src="/images/other/user.jpeg" class="w-8 h-8 rounded-full hover:shadow-md">
                   <img src="/images/svg/down-arrow.svg" class="w-4 ml-1 rounded-full hover:shadow-md">
               </div>
                <div v-if="infoModal" class="z-20 relative pb-4 flex items-center w-10/12 rounded-lg bg-white shadow-md">
                    <ul class="w-full h-full flex flex-col mt-3">
                        <li class="py-2 px-4 hover:bg-gray-100 rounded-lg cursor-pointer">
                            <router-link class="flex items-center" to="#">
                                <img src="/images/other/user.jpeg" class="w-10 h-10 rounded-full">
                                <span class="ml-2 font-bold text-gray-600">John Doe</span>
                            </router-link>
                        </li>
                        <hr>
                        <li class="mt-2 hover:bg-gray-100 py-2 px-4 cursor-pointer rounded-lg">
                            <router-link class="flex items-center" to="#">
                                <img src="/images/svg/help.svg" class="w-6 h-6 rounded-full">
                                <span class="ml-2 font-bold text-sm text-gray-600">Help & Support</span>
                            </router-link>
                        </li>
                        <li class="mt-2 hover:bg-gray-100 py-2 px-4 cursor-pointer rounded-lg">
                            <router-link class="flex items-center" to="#">
                                <img src="/images/svg/settings.svg" class="w-6 h-6 rounded-full">
                                <span class="ml-2 font-bold text-sm text-gray-600">Settings</span>
                            </router-link>
                        </li>
                        <li class="mt-2 hover:bg-gray-100 py-2 px-4 cursor-pointer rounded-lg">
                            <a @click="logout()" class="flex items-center">
                                <img src="/images/svg/back.svg" class="w-6 h-6 rounded-full">
                                <span class="ml-2 font-bold text-sm text-gray-600">Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

 export default {
     name: 'Header',
     data(){
         return {
             infoModal:false,
         }
     },
     methods:{
         async logout(){
            await axios.post('/logout',{})
                       .then(()=>{
                            location.href="/login"
                        })
         }
     }
 } 
 </script>

 