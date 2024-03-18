<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  maxWidth:{
   type: Number
  }
});
</script>

<template>
  <button
    class="bg-[#A438A8] w-full bg-gradient-to-t from-[#78297a] hover:opacity-80 rounded-3xl p-3 my-6 text-sm font-medium text-white"
    :style="maxWidth ? {maxWidth: `${maxWidth}px`}: {maxWidth: `auto`}"
  >
    {{ text }}
  </button>
</template>
