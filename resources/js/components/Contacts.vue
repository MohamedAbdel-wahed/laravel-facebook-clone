<template>
    <div class="w-72 transform translate-y-6 px-2">
        <div class="py-2 px-4">
            <h1 class="font-bold text-xl text-gray-500">Birthdays</h1>
            <div class="my-3 flex items-center">
                <img src="/images/svg/gift-box.svg" class="w-8 rounded-lg">
                <p class="ml-2 text-gray-800 text-sm">
                    <span class="font-bold">Ali</span> and <span class="font-bold">Mohamed</span> have Birthdays Today
                </p>
            </div>
        </div>
        <hr>
        <h1 class="font-bold text-xl text-gray-500 mt-3 px-4">Contacts</h1>
        <ul class="pt-2 pb-3 w-full fixed h-84 overflow-auto" id="contacts">
            <li class="flex items-center mt-2 px-4 py-1 hover:bg-gray-200 cursor-pointer rounded-lg">
                <img src="/images/other/user.jpeg" class="w-8 h-8 rounded-full">
                <span class="ml-1 text-sm">Mohamed</span>
            </li><li class="flex items-center mt-2 px-4 py-1 hover:bg-gray-200 cursor-pointer rounded-lg">
                <img src="/images/other/user.jpeg" class="w-8 h-8 rounded-full">
                <span class="ml-1 text-sm">Mohamed</span>
            </li><li class="flex items-center mt-2 px-4 py-1 hover:bg-gray-200 cursor-pointer rounded-lg">
                <img src="/images/other/user.jpeg" class="w-8 h-8 rounded-full">
                <span class="ml-1 text-sm">Mohamed</span>
            </li><li class="flex items-center mt-2 px-4 py-1 hover:bg-gray-200 cursor-pointer rounded-lg">
                <img src="/images/other/user.jpeg" class="w-8 h-8 rounded-full">
                <span class="ml-1 text-sm">Mohamed</span>
            </li><li class="flex items-center mt-2 px-4 py-1 hover:bg-gray-200 cursor-pointer rounded-lg">
                <img src="/images/other/user.jpeg" class="w-8 h-8 rounded-full">
                <span class="ml-1 text-sm">Mohamed</span>
            </li>
            <li class="flex items-center mt-2 px-4 py-1 hover:bg-gray-200 cursor-pointer rounded-lg">
                <img src="/images/other/user.jpeg" class="w-8 h-8 rounded-full">
                <span class="ml-1 text-sm">Mohamed</span>
            </li>
            <li class="flex items-center mt-2 px-4 py-1 hover:bg-gray-200 cursor-pointer rounded-lg">
                <img src="/images/other/user.jpeg" class="w-8 h-8 rounded-full">
                <span class="ml-1 text-sm">Mohamed</span>
            </li>
            <li class="flex items-center mt-2 px-4 py-1 hover:bg-gray-200 cursor-pointer rounded-lg">
                <img src="/images/other/user.jpeg" class="w-8 h-8 rounded-full">
                <span class="ml-1 text-sm">Mohamed</span>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
      name: 'Contacts',
      data(){
          return {
              
          }
      }
  }
</script>


<style scoped>

#contacts::-webkit-scrollbar
{
	width: 6px;
	background-color: #F5F5F5;
}

#contacts::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 7px;
	background-color: #F5F5F5;
}

#contacts::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #888;
}

</style>