<script setup lang="ts">
import { cn } from "@/lib/utils";
import { addDays, format } from 'date-fns'
import Button from "@/components/ui/button/Button.vue";

import { ref } from "vue";
import { CalendarIcon, TagsIcon } from "lucide-vue-next";
import Dialog from "../ui/dialog/Dialog.vue";
import DialogTrigger from "../ui/dialog/DialogTrigger.vue";
import GenerateTickerModal from "./GenerateTickerModal.vue";
const date = ref({
  start: new Date(2022, 0, 20),
  end: addDays(new Date(2022, 0, 20), 20),
})
</script>

<template>
  <div class="bg-white border shadow-sm border-zinc-200/80 rounded-2xl w-full p-6 sm:p-10 space-y-2">
    <p class="text-[#820497] text-xl flex-1 font-bold uppercase w-full flex items-center pb-2 gap-2">
      <TagsIcon :stroke-width="2.5" />
      <span>Gerar link</span>
    </p>
    <div class="flex flex-col sm:flex-row items-center gap-2 cursor-not-allowed">
      <Button id="date" :variant="'outline'" :class="cn(
        'flex-1 w-full rounded-xl pointer-events-none justify-start text-left font-normal',
        !date && 'text-muted-foreground', 'cursor-not-allowed'
      )">
        <CalendarIcon class="mr-2 h-4 w-4 text-zinc-400" />

        <span class="text-zinc-400">
          {{ date.start ? (
        date.end ? `${format(date.start, 'LLL dd, y')} - ${format(date.end, 'LLL dd, y')}`
          : format(date.start, 'LLL dd, y')
      ) : 'Pick a date' }}
        </span>
      </Button>
      <Dialog>
        <DialogTrigger class=" w-full sm:w-auto min-w-24" as-child>
          <Button class="rounded-xl w-full sm:w-auto min-w-24">
            Gerar
          </Button>
        </DialogTrigger>

        <GenerateTickerModal/>
      </Dialog>
    </div>

  </div>
</template>