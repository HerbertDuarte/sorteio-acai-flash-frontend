<script setup lang="ts">
import { CrownIcon, LogOutIcon } from 'lucide-vue-next';
import ProfileMenu from './ProfileMenu.vue';
import { ref, watch } from 'vue';
import DialogContent from '../ui/dialog/DialogContent.vue';
import DialogDescription from '../ui/dialog/DialogDescription.vue';
import DialogHeader from '../ui/dialog/DialogHeader.vue';
import DialogTitle from '../ui/dialog/DialogTitle.vue';
import Dialog from "../ui/dialog/Dialog.vue";
import Button from '../ui/button/Button.vue';
import { useAuthStore } from '@/stores/auth';
import DialogClose from '../ui/dialog/DialogClose.vue';
const profileBadge = ref();
const auth = useAuthStore();
watch(profileBadge, (value) => { console.log(value) })
</script>

<template>
 <header class="bg-[#72256D] border-b-4 border-[#FBAE39] p-2 flex justify-between items-center">
  <img class="h-12" src="@/assets/logolaranja.png" alt="logo laranja" />
  <p class="flex-1 text-right px-4">

   <span class="text-[#FBAE39] font-medium">
    <CrownIcon class="inline h-5 pb-1" />
    Administração
   </span>
  </p>
  <div ref="profileBadge">
   <div class="flex flex-col text-xs font-medium overflow-hidden">
    <Dialog>
     <ProfileMenu :reference="profileBadge" />
     <DialogContent>
      <DialogHeader>
       <DialogTitle>
        <LogOutIcon />
        <span>
         Sair
        </span>
       </DialogTitle>
       <DialogDescription>
        Tem certeza que deseja encerrar a seção?
       </DialogDescription>
      </DialogHeader>
      <div class="space-x-2">
       <DialogClose>
        <Button variant="outline">
         Cancelar
        </Button>
       </DialogClose>
       <Button @click="auth.logout()">
        Sair
       </Button>
      </div>
     </DialogContent>
    </Dialog>
   </div>
  </div>
 </header>
</template>