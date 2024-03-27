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
import { ChevronLeft, ChevronRight, XIcon, } from 'lucide-vue-next';
import { ref } from 'vue';
import ConsumerRow from './ConsumerRow.vue';
import { useToast } from '@/components/ui/toast';
defineProps({
  items: {
    type: Number,
    required: true
  },
  data: {
    type: Array,
    required: true
  },
})
const page = ref(1)
const maxPages = ref(3)
const search = ref("")
const { toast } = useToast();

function cleanSearch() {
  search.value = ""
}

function searchData() {
  if (search.value === "") {
    toast({
      variant: "destructive",
      title: "Erro de formulário",
      description: "Digite um nome para pesquisar.",
    });
    console.log(search.value === "")
  }
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
  <main class="p-4 w-full bg-white border rounded-lg shadow-md">
    <div class="text-center pb-4">
      <h1 class="text-[#820497] uppercase font-semibold">Clientes</h1>
    </div>
    <div class="flex gap-2 pb-4">
      <Input v-model="search" placeholder="pesquise pelo nome" />
      <Button @click="cleanSearch" class="p-2" variant="outline">
        <XIcon />
      </Button>
      <Button @click="searchData" variant="outline">
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
          <ConsumerRow :item="item" />
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