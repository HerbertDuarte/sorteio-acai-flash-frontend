<script setup lang="ts">
import { ref, watch } from "vue";
import { LogOut, User, UsersIcon, ChevronDownIcon, SquareUser, SquareUserIcon } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuSeparator,
 DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


import { useAuthStore } from "@/stores/auth";

const auth = useAuthStore();
const props = defineProps(["reference"])
const width = ref(0)

watch(
 () => props.reference,
 (value) => {
  const previusWidth = value.getBoundingClientRect().width.toFixed(2)
  width.value = previusWidth < 140 ? 140 : previusWidth
 },
 { deep: true })
</script>

<template>
 <DropdownMenu>
  <DropdownMenuTrigger as-child>
   <Button class="px-2.5" variant="outline">
    <div class="flex justify-between items-center gap-2 text-slate-700">
     <div class="size-6 bg-zinc-200 flex justify-center items-center rounded-full">
      H
     </div>
     <div class="flex-1 hidden sm:block">Herbert Duarte</div>
     <ChevronDownIcon class="flex-1 hidden sm:block" :stroke-width="2" />
    </div>
   </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent :style="{ width: `${width}px` }">
   <DropdownMenuItem>
    <User :stroke-width="3" class="mr-2 h-4 w-4" />
    <span class="font-medium">Perfil</span>
   </DropdownMenuItem>

   <DropdownMenuSeparator />

   <DropdownMenuItem>
    <SquareUserIcon :stroke-width="3" class="mr-2 h-4 w-4" />
    <span class="font-medium">Funcionários</span>
   </DropdownMenuItem>

   <DropdownMenuSeparator />

   <DropdownMenuItem>
    <UsersIcon :stroke-width="3" class="mr-2 h-4 w-4" />
    <span class="font-medium">Clientes</span>
   </DropdownMenuItem>

   <DropdownMenuSeparator />

   <DropdownMenuItem @click="auth.logout">
    <LogOut :stroke-width="3" class="mr-2 h-4 w-4" />
    <span class="font-medium">Sair</span>
   </DropdownMenuItem>
  </DropdownMenuContent>
 </DropdownMenu>
</template>