<script setup lang="ts">
import { UserPlusIcon } from "lucide-vue-next";
import Input from "../ui/input/Input.vue";
import Button from "@/components/ui/button/Button.vue";
import Dialog from "../ui/dialog/Dialog.vue";
import DialogTrigger from "../ui/dialog/DialogTrigger.vue";
import DialogContent from "../ui/dialog/DialogContent.vue";
import FormCreateConsumer from "./FormCreateConsumer.vue";
</script>
<template>

 <div class="bg-white border shadow-sm border-zinc-200/80 rounded-2xl w-full p-6 sm:p-10 space-y-2">
  <p class="text-[#820497] text-xl flex-1 font-bold uppercase w-full flex items-center pb-2 gap-2">
   <UserPlusIcon :stroke-width="2.5" />
   <span>Cadastrar cliente</span>
  </p>
  <div class="flex flex-col sm:flex-row items-center gap-2">
   <Input placeholder="Digite o CPF do usuário" class="rounded-xl placeholder:text-zinc-300 px-5" />
   <Dialog>
    <DialogTrigger as-child>
     <Button class="rounded-xl w-full sm:w-auto">
      Cadastrar
     </Button>
    </DialogTrigger>

    <DialogContent class="m-0 h-full rounded-none w-full max-w-none min-w-0" as-child>
     <FormCreateConsumer />
    </DialogContent>
   </Dialog>
  </div>
 </div>
</template>