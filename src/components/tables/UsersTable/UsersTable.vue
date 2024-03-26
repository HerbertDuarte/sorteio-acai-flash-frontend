<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import Input from '@/components/ui/input/Input.vue';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { EditIcon, EyeIcon, TrashIcon, XIcon } from 'lucide-vue-next';
import { ref, watch } from 'vue';
const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  page: {
    type: Number,
    required: true
  },
  data: {
    type: Array,
    required: true
  },
})

const search = ref("")
const tableData = ref<any[]>(sliceData(props.data, props.page))

function cleanSearch() {
  search.value = ""
  tableData.value = sliceData(props.data, props.page)
}

function onSearch() {
  const filteredData = props.data.filter((item: any) => String(item.name).toLocaleLowerCase().includes(String(search.value).toLocaleLowerCase()))
  tableData.value = sliceData(filteredData, props.page)
}
function sliceData(data: any[], page: number) {
  const pageItems = 10;
  const startIndex = (page - 1) * pageItems;
  const endIndex = startIndex + pageItems;

  return data.slice(startIndex, endIndex);
}

watch(
  () => props.page,
  () => {
    tableData.value = sliceData(props.data, props.page)

  }, { deep: true })

watch(
  () => props.data,
  () => {
    tableData.value = sliceData(props.data, props.page)

  }, { deep: true })

</script>

<template>
  <main class="p-4">
    <!-- <div class="pb-4">
        <div class="text-[#820497] uppercase flex items-center gap-3" >
          <TableIcon :size="18"/>
          <span>Tabela de funcionários</span>
        </div>
      </div> -->
    <div class="flex gap-2">
      <Input v-model="search" placeholder="pesquise pelo nome" />
      <Button @click="cleanSearch" class="p-2" variant="outline">
        <XIcon />
      </Button>
      <Button @click="onSearch" variant="outline">
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
      <TableBody>
        <TableRow v-for="(item, index) in tableData">
          <TableCell class="font-medium">
            {{ item.name }}
          </TableCell>
          <TableCell class="text-center">Ativo</TableCell>
          <TableCell class="text-right space-x-1.5">
            <Button class="p-2 h-auto" variant="secondary">
              <EyeIcon :stroke-width="2.5" :size="16" />
            </Button>
            <Button class="p-2 h-auto">
              <EditIcon :size="16" />
            </Button>
            <Button class="p-2 h-auto" variant="destructive">
              <TrashIcon :size="16" />
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>

  </main>
</template>