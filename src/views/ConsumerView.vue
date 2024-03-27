<script lang="ts" setup>
import ConsumerTable from '@/components/tables/ConsumersTable/ConsumerTable.vue';
import { onMounted, ref } from 'vue';
const users = ref<any[]>([])
const totalItems = ref<number>(0);
onMounted(() => {
 users.value = [
  {
   nome: "herbert",
   situacao: "ativo",
  },
  {
   nome: "Caio",
   situacao: "inativo",
  },
  {
   nome: "Celma",
   situacao: "ativo",
  },
  {
   nome: "herbert",
   situacao: "inativo",
  },
  {
   nome: "herbert",
   situacao: "inativo",
  },
  {
   nome: "herbert",
   situacao: "ativo",
  },
  {
   nome: "herbert",
   situacao: "ativo",
  },
  {
   nome: "herbert",
   situacao: "ativo",
  },
  {
   nome: "Pedro",
   situacao: "ativo",
  },

 ]

 totalItems.value = 23
})
</script>

<template>
 <main class="w-full flex flex-col justify-start items-center p-8">
  <div class="w-full max-w-[900px]">
   <ConsumerTable :data="users" :items="totalItems" />
  </div>
 </main>
</template>