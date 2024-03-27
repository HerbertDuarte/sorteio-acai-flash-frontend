<script lang="ts" setup>
import FormEditUser from '@/components/forms/FormEditUser.vue';
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore()

</script>

<template>
 <main class="flex flex-col justify-center items-center w-full p-10">
  <div class="bg-white w-full p-6 rounded-lg border shadow-md">
   <div class="flex flex-col items-start w-full">
    <div class="w-full flex justify-start items-center gap-3">
     <div class="bg-zinc-200 size-16 flex items-center justify-center rounded-full">
      <p class="text-3xl text-slate-700">{{ auth?.user?.nome[0] }}</p>
     </div>
     <div class="leading-2">
      <p class="text-md">
       @{{ auth?.user?.login }}
      </p>
      <p class="text-sm">
       {{ auth?.user?.nome }}
      </p>
      <p class="text-slate-500 text-sm">
       {{ auth?.user?.email }}
      </p>
     </div>
    </div>
   </div>
   <div class="w-full pt-10">
    <FormEditUser :user="auth.user" />
   </div>
  </div>
 </main>

</template>