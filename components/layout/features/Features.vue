<template>
  <div class="container m-auto text-center py-10">
    <h1 class="mb-6 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 lg:leading-tight">
      Key features
    </h1>
    <div class="flex card-container">
      <div v-for="(feature, featureIndex) in features" :key="featureIndex" class="flex card">
        <Icon :name="feature.icon" />
        <h1>{{ feature.title }}</h1>
        <p>{{ feature.description }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Feature } from '~/types/feature'

const features = ref<Feature[]>([
  {
    title: 'title1',
    icon: 'material-symbols:globe',
    description: 'description1'
  }, {
    title: 'title2',
    icon: 'material-symbols:globe',
    description: 'description2'
  }])
</script>
