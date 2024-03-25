<script setup lang="ts">
import { ref, watch } from "vue";
import { LogOut, User, UsersIcon, ChevronDownIcon, SquareUserIcon, LayoutDashboardIcon } from "lucide-vue-next";
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuSeparator,
 DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import DialogTrigger from "../ui/dialog/DialogTrigger.vue";
import Button from "../ui/button/Button.vue";

const props = defineProps(["reference"])
const width = ref(0)

console.log(props.reference)
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
   <DropdownMenuItem @click="$router.push('/')">
    <LayoutDashboardIcon :stroke-width="3" class="mr-2 h-4 w-4" />
    <span class="font-medium">Dashboard</span>
   </DropdownMenuItem>

   <DropdownMenuSeparator />

   <DropdownMenuItem @click="$router.push('/profile')">
    <User :stroke-width="3" class="mr-2 h-4 w-4" />
    <span class="font-medium">Perfil</span>
   </DropdownMenuItem>

   <DropdownMenuSeparator />

   <DropdownMenuItem @click="$router.push('/user')">
    <SquareUserIcon :stroke-width="3" class="mr-2 h-4 w-4" />
    <span class="font-medium">Funcionários</span>
   </DropdownMenuItem>

   <DropdownMenuSeparator />

   <DropdownMenuItem @click="$router.push('/consumer')">
    <UsersIcon :stroke-width="3" class="mr-2 h-4 w-4" />
    <span class="font-medium">Clientes</span>
   </DropdownMenuItem>

   <DropdownMenuSeparator />


   <DialogTrigger as-child>
    <DropdownMenuItem>
     <LogOut :stroke-width="3" class="mr-2 h-4 w-4" />
     <span class="font-medium">Sair</span>
    </DropdownMenuItem>
   </DialogTrigger>

  </DropdownMenuContent>
 </DropdownMenu>

</template>