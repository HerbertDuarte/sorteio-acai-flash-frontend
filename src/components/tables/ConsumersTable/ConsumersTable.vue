<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { EditIcon, EyeIcon, TableIcon, TrashIcon } from 'lucide-vue-next';
</script>

<template>
  <main class="p-4">
    <div class="border rounded-lg p-3 shadow-md">
      <div class="pb-4">
        <div class="text-[#820497] uppercase flex items-center gap-3 text-sm" >
          <TableIcon :size="18"/>
          <span>Tabela de funcionários</span>
        </div>
      </div>
      <Table>
        <!-- <TableCaption>Lista de funcionários.</TableCaption> -->
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
          <TableRow v-for="item in 7">
            <TableCell class="font-medium">
              Herbert Duarte
            </TableCell>
            <TableCell class="text-center">Ativo</TableCell>
            <TableCell class="text-right space-x-1.5">
              <Button class="p-2 h-auto"  variant="secondary">
                <EyeIcon :stroke-width="2.5" :size="16"/>
              </Button>
              <Button class="p-2 h-auto">
                <EditIcon :size="16"/>
              </Button>
              <Button class="p-2 h-auto" variant="destructive">
                <TrashIcon :size="16"/>
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </main>
</template>