<script lang="ts" setup>
import UsersTable from '@/components/tables/UsersTable/UsersTable.vue';
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from '@/components/ui/pagination'
import {
  Button,
} from '@/components/ui/button'
import { onMounted, ref } from 'vue';

const users = ref<any[]>([])

onMounted(()=>{
  users.value = [
  {
    name: "herbert",
    status : "ativo",
  },
  {
    name: "Caio",
    status : "ativo",
  },
  {
    name: "Celma",
    status : "ativo",
  },
  {
    name: "herbert",
    status : "ativo",
  },
  {
    name: "herbert",
    status : "ativo",
  },
  {
    name: "herbert",
    status : "ativo",
  },
  {
    name: "herbert",
    status : "ativo",
  },
  {
    name: "herbert",
    status : "ativo",
  },
  {
    name: "Pedro",
    status : "ativo",
  },
  {
    name: "herbert",
    status : "ativo",
  },
  {
    name: "herbert",
    status : "ativo",
  },
  {
    name: "herbert",
    status : "ativo",
  },
  {
    name: "Yago",
    status : "ativo",
  },
  {
    name: "herbert",
    status : "ativo",
  },
  {
    name: "herbert2",
    status : "ativo",
  },
  {
    name: "herbert2",
    status : "ativo",
  },
  {
    name: "herbert2",
    status : "ativo",
  },
  {
    name: "herbert2",
    status : "ativo",
  },
  {
    name: "herbert",
    status : "ativo",
  },
  {
    name: "herbert",
    status : "ativo",
  },
]
})

</script>

<template>
  <main class="p-8 w-full flex justify-center items-center">
    <div class="w-full max-w-[1000px]">
      <div>

      </div>

      <div class="flex justify-center items-center w-full border rounded-lg p-3 shadow-md">
        <Pagination class="w-full" v-slot="{ page }" :total="users.length" :sibling-count="1" show-edges :default-page="1">
          <PaginationList v-slot="{ items }" class="flex flex-col w-full">
            <UsersTable :page="page" :data="users" :items="items" />
            <div class="flex justify-center items-center gap-1">
              <PaginationFirst />
              <PaginationPrev />

              <template v-for="(item, index) in items">
                <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
                  <Button class="w-8 h-8 p-0" :variant="item.value === page ? 'default' : 'outline'">
                    {{ item.value }}
                  </Button>
                </PaginationListItem>
                <PaginationEllipsis v-else :key="item.type" :index="index" />
              </template>

              <PaginationNext />
              <PaginationLast />
            </div>
          </PaginationList>
        </Pagination>
      </div>
    </div>
  </main>
</template>