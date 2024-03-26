<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import Input from '@/components/ui/input/Input.vue';
import Separator from '@/components/ui/separator/Separator.vue';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { ChevronLeft, ChevronRight, EditIcon, EyeIcon, TrashIcon, XIcon, } from 'lucide-vue-next';
import { ref } from 'vue';
import UserRow from './UserRow.vue';

defineProps({
  items: {
    type: Number,
    required: true
  },
  data: {
    type:Array,
    required: true
  },
})
const page = ref(1)
const maxPages = ref(3)
const search = ref("")


function cleanSearch(){
  search.value = ""
}

function searchData(){
  console.log(search.value)
}

function nextPage() {
  if (page.value < maxPages.value) {
    page.value = page.value + 1
  }
}
function previusPage() {
  if (page.value > 1) {
    page.value = page.value - 1
  }
}
</script>

<template>
  <main class="p-4 w-full">
    <div class="flex gap-2 pb-4">
      <Input v-model="search" placeholder="pesquise pelo nome" />
      <Button @click="cleanSearch" class="p-2" variant="outline">
        <XIcon />
      </Button>
      <Button :disabled="search.length === 0" @click="searchData" variant="outline">
        Pesquisar
      </Button>
    </div>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            Nome
          </TableHead>
          <TableHead class="text-center">Status</TableHead>
          <TableHead class="text-right">
            Ações
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody v-if="data.length > 0">
        <TableRow :key="index" v-for="(item, index) in  data">
          <UserRow :item="item" />
        </TableRow>
      </TableBody>
    </Table>
    <Separator />
    <div class="flex justify-between items-center pt-6 px-1">
      <div class="flex items-center justify-start gap-2">
        <Button @click="previusPage" :disabled="page <= 1" class="p-1.5 h-auto" variant="outline">
          <ChevronLeft class="p-0" :size="20" />
        </Button>

        <span class="text-sm font-medium text-slate-500 text-right">{{ page }}/{{ maxPages }}</span>

        <Button @click="nextPage" :disabled="page >= maxPages" class="p-1.5 h-auto" variant="outline">
          <ChevronRight class="p-0" :size="20" />
        </Button>
      </div>
      <div class="text-sm font-medium text-slate-500 text-right">
        <p>total itens: {{ items }}</p>
      </div>
    </div>
  </main>
</template>