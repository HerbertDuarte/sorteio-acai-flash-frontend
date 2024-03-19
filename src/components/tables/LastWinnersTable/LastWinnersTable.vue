<script setup lang="ts">
import LastWinnerRow from './LastWinnerRow.vue';

</script>
<template>
 <div
  class="bg-white border shadow-sm border-zinc-200/80 rounded-2xl flex-1 p-4 sm:p-10 overflow-x-scroll last-winners-table">
  <p class="text-[#820497] text-xl w-full font-bold uppercase pb-4">
   últimos ganhadores
  </p>

  <LastWinnerRow email="herbertduarte@gmail.com" />
  <LastWinnerRow email="herbertduarte.santos@gmail.com" />
  <LastWinnerRow email="herbertduarteasdasdasd@gmail.com" />
  <LastWinnerRow email="herbert@gmail.com" />
  <LastWinnerRow email="herbertduarte@gmail.com" />
  <LastWinnerRow email="herbertduarte@gmail.com" />

 </div>
</template>
<style>
.last-winners-table::-webkit-scrollbar {
 display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.last-winners-table {
 -ms-overflow-style: none;
 /* IE and Edge */
 scrollbar-width: none;
 /* Firefox */
}
</style>