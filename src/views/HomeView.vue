<template>
  <main class="flex flex-col justify-center items-center flex-1 py-3">
    <div
      class="flex flex-col-reverse lg:flex-row justify-center items-stretch w-full p-2 sm:p-10 gap-3 sm:gap-4 md:gap-6 lg:gap-10 max-w-[1300px]">
      <LastWinnersTable />

      <div class="flex-1 flex flex-col gap-3 md:gap-6 sm:gap-4 min-w-[50%]">
        <GenerateTicker />
        <div class="bg-white border shadow-sm border-zinc-200/80 rounded-2xl w-full p-6 sm:p-10 space-y-2 ">
          <p class="text-[#820497] text-xl flex-1 font-bold uppercase w-full flex items-center pb-2 gap-2">
            <TableIcon :stroke-width="2.5" />
            <span>Links abertos</span>
          </p>
          <div>
            <Dialog v-for="item in 5">
              <DialogTrigger as-child>
                <p class="flex items-center hover:underline cursor-pointer gap-2 text-slate-700">
                  <LinkIcon :size="20" />
                  <button class="flex-1 max-w-max truncate">
                    https://sorteios-acai-flash.com/10b9ea2c-0f1f-4110-ac1e-cc0a8bf218a9
                  </button>
                </p>
              </DialogTrigger>
              <GenerateTickerModal />
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">

import GenerateTicker from "@/components/dashboard/GenerateTicker.vue";
import GenerateTickerModal from "@/components/dashboard/GenerateTickerModal.vue";
import LastWinnersTable from "@/components/tables/LastWinnersTable/LastWinnersTable.vue";
import Dialog from "@/components/ui/dialog/Dialog.vue";
import DialogTrigger from "@/components/ui/dialog/DialogTrigger.vue";
import { ClipboardCopyIcon, LinkIcon, TableIcon } from "lucide-vue-next";
</script>
