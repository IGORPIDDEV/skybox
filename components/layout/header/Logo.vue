<template>
  <div class="flex items-center gap-[5px]">
    <Icon :name="logo.icon.name" :size="logo.icon.size" />
    <h1 class="uppercase font-bold text-xl">
      {{ logo.text }}
    </h1>
  </div>
</template>
<script setup lang="ts">
const logo = ref({
  text: 'Skybox',
  icon: {
    name: 'ri:upload-cloud-2-line',
    size: '30'
  }
})
</script>
