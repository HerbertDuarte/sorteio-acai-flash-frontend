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
    <div class="w-full max-w-[900px]">
      <UsersTable :data="users" :items="totalItems" />
    </div>
  </main>
</template>