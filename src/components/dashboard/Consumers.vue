<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import { UsersIcon } from "lucide-vue-next";

</script>

<template>
 <div class="bg-white border shadow-sm border-zinc-200/80 rounded-2xl w-full p-6 sm:p-10 space-y-2">
  <p class="text-[#820497] text-xl flex-1 font-bold uppercase w-full flex items-center gap-2">
   <UsersIcon :stroke-width="2.5" />
   <span>participantes</span>
  </p>
  <p class="text-2xl font-medium">
   +2900
  </p>
  <p class="text-xs text-zinc-400">
   127 novos clientes no mês
  </p>
 </div>
</template>