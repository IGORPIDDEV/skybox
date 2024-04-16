<template>
  <div class="flex relative min-h-[600px] bg-gradient-to-r from-b-purple-100 to-b-blue-light-100 overflow-hidden items-center justify-center">
    <LayoutHeroShapes />
    <div class="flex flex-col justify-center container max-w-screen-lg m-auto z-20 text-center">
      <h1 class="mb-6 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 lg:leading-tight">
        Lightweight, Secure, Convenient: Your <span class="gradient-primary bg-clip-text text-transparent">Cloud</span> File Storage
      </h1>
      <h2 class="text-gray-600 text-lg lg:text-2xl mb-10 lg:leading-10">
        Welcome to the future of file storage! Our platform offers cutting-edge solutions for storing, organizing, and sharing data - all in a cloud environment.
      </h2>
      <div class="flex gap-4 justify-center">
        <nuxt-link class="btn btn-primary__gradient">
          Start free 30-day trial
        </nuxt-link>
        <nuxt-link class="btn btn-primary__outline">
          Show subscribe plans
        </nuxt-link>
      </div>
      <!-- <div class="flex flex-col w-1/2 p-4">
        <FormInput
          type="text"
          placeholder="Search file"
          icon="ic:baseline-search"
          class-list="shadow-lg shadow-blue-dark/30"
        />
      </div> -->
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
