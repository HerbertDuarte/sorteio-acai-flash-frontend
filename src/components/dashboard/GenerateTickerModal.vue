<script setup lang="ts">
import { ClipboardCopyIcon, PartyPopperIcon } from 'lucide-vue-next';
import DialogContent from '../ui/dialog/DialogContent.vue';
import DialogDescription from '../ui/dialog/DialogDescription.vue';
import DialogHeader from '../ui/dialog/DialogHeader.vue';
import DialogTitle from '../ui/dialog/DialogTitle.vue';

import TooltipProvider from '../ui/tooltip/TooltipProvider.vue';
import TooltipTrigger from '../ui/tooltip/TooltipTrigger.vue';
import Tooltip from '../ui/tooltip/Tooltip.vue';
import TooltipContent from '../ui/tooltip/TooltipContent.vue';

</script>

<template>
 <DialogContent class="flex flex-col">
  <DialogHeader>
   <DialogTitle>
    <PartyPopperIcon />
    <span>Link gerado com sucesso!</span>
   </DialogTitle>
   <DialogDescription>
    Envie o link para o cliente clicando no botão copiar ou mostre para ele o QRCODE de acesso ao bilhete.
   </DialogDescription>
  </DialogHeader>

  <div class="w-full flex flex-col justify-center items-center">
   <div class="flex items-center justify-between w-full p-3 rounded-lg border">
    <p class="break-words w-[90%]">
     https://sorteios-acai-flash.com/cltyqqy4i000008lcbosv38mt/cltyqqy4i000008lcbosv38mt
    </p>
    <TooltipProvider>
     <Tooltip>
      <TooltipTrigger as-child>
       <div class="text-slate-700 cursor-pointer py-2">
        <ClipboardCopyIcon />
       </div>
      </TooltipTrigger>
      <TooltipContent>
       <p>Copiar</p>
      </TooltipContent>
     </Tooltip>
    </TooltipProvider>
   </div>
   <div class="flex justify-center items-center py-8">
    <img src="@/assets/qrcode-example.png" />
   </div>
  </div>
 </DialogContent>
</template>