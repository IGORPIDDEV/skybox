<template>
  <div class="min-h-full">
    <NuxtLayout :name="layoutName">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { LayoutKey } from './.nuxt/types/layouts'

const layoutName = ref<LayoutKey>('desktop-guest')
</script>
