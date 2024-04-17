<template>
  <div class="flex gap-[20px] mb-[40px] justify-center text-gray-600 text-base lg:text-xl font-bold">
    <div v-for="(feature, featureIndex) in features" :key="featureIndex" class="flex">
      <Icon name="material-symbols:check-small" size="30" />
      <p>{{ feature }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
const features = ref([
  'Full access to all features',
  'Cancel anytime',
  'Safe services'
])
</script>
