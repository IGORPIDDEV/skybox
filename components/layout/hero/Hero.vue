<template>
  <div class="flex relative min-h-[600px] bg-gradient-to-r from-b-purple-100 to-b-blue-light-100 overflow-hidden items-center justify-center">
    <div class="top-0 absolute left-0 m-auto w-[300px] h-[300px] bg-b-red-300 blur-[200px]" />
    <div class="absolute bottom-0 right-0 m-auto w-[300px] h-[300px] bg-b-blue-dark-300 blur-[200px]" />
    <div class="flex flex-col justify-center text-center">
      <h1 class="mb-6 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-none text-gray-900">
        Unleash Your Potential with Cloud Solutions
      </h1>
      <h2 class="text-gray-500 text-lg lg:text-2xl mb-6">
        <div>
          
        </div>
        Unlock Seamless File Management and Access Anywhere
      </h2>
      <div class="relative">
        <FormInput
          v-model="search"
          type="text"
          placeholder="Search file"
          icon="ic:baseline-search"
          class-list="shadow-lg shadow-blue-dark/30"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const search = ref('')
</script>
