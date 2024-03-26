<script setup lang="ts">
defineProps(["item"])
import Button from '@/components/ui/button/Button.vue';
import {
  TableCell,
} from '@/components/ui/table'
import { EditIcon, EyeIcon, TrashIcon, } from 'lucide-vue-next';
</script>
<template>
  <TableCell class="font-medium">
    {{ item.nome }}
  </TableCell>
  <TableCell class="text-center">{{ item.situacao }}</TableCell>
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
</template>