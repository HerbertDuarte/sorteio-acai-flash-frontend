<script setup lang="ts">
import { onMounted, ref } from 'vue';
const props = defineProps(["email"])
const randomNum = ref(1)
onMounted(() => {
 randomNum.value = Math.floor(Math.random() * 3) + 1;
})
</script>
<template>

 <div class="flex justify-between items-center gap-2 sm:gap-6 py-3">
  <img class="size-8 sm:size-10" v-if="randomNum === 1" src="@/assets/profileimage1.png" alt="fake profile image" />
  <img class="size-8 sm:size-10" v-if="randomNum === 2" src="@/assets/profileimage2.png" alt="fake profile image" />
  <img class="size-8 sm:size-10" v-if="randomNum === 3" src="@/assets/profileimage3.png" alt="fake profile image" />

  <span class="flex-1 text-xs min-w-40 truncate flex-wrap">
   <p class="font-medium text-sm leading-4">Herbert Duarte</p>
   <p class="leading-3 text-zinc-500">{{ email }}</p>
   <p class=" leading-4 text-zinc-500">Vitória da Conquista - BA</p>
  </span>

  <span class="border shadow-sm border-zinc-200/80 py-0.5 px-2 rounded-md text-sm font-medium">
   #4565
  </span>
 </div>

</template>