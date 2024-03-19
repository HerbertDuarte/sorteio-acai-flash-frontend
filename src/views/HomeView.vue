<template>
  <div class="flex flex-col min-h-dvh">
    <header class="bg-[#72256D] border-b-4 border-[#FBAE39] p-2 flex justify-between items-center">
      <img class="h-12" src="@/assets/logolaranja.png" alt="logo laranja" />
      <p class="flex-1 text-right px-4">

        <span class="text-[#FBAE39] font-medium">
          <CrownIcon class="inline h-5 pb-1" />
          Administração
        </span>
      </p>
      <div ref="profileBadge">
        <div class="flex flex-col text-xs font-medium overflow-hidden">
          <ProfileMenu :reference="profileBadge" />
        </div>
      </div>
    </header>
    <main class="flex flex-col justify-center items-center w-full bg-[#fcf2fd] flex-1 py-3">
      <div
        class="flex flex-col-reverse lg:flex-row justify-center items-stretch w-full p-2 sm:p-10 gap-3 sm:gap-4 md:gap-6 lg:gap-10 max-w-[1300px]">
        <LastWinnersTable />

        <div class="flex-1 flex flex-col gap-3 md:gap-6 sm:gap-4">
          <Consumers />
          <GenerateTicker />
        </div>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">

import Consumers from "@/components/dashboard/Consumers.vue";
import GenerateTicker from "@/components/dashboard/GenerateTicker.vue";
import ProfileMenu from "@/components/layout/ProfileMenu.vue";
import LastWinnersTable from "@/components/tables/LastWinnersTable/LastWinnersTable.vue";
import { CrownIcon } from "lucide-vue-next";

import { ref } from "vue";

const profileBadge = ref();

</script>
