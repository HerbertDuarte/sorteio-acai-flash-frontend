<script lang="ts" setup>
import UsersTable from '@/components/tables/UsersTable/UsersTable.vue';
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
  <main class="p-8 w-full flex justify-center items-center">
    <div class="w-full max-w-[1000px]">
      <div>

      </div>

      <div v-if="users" class="flex justify-center items-center w-full border rounded-lg p-3 shadow-md">
        <UsersTable :data="users" :items="totalItems" />
      </div>
    </div>
  </main>
</template>