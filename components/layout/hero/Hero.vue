<template>
  <div class="flex relative min-h-[600px] bg-gradient-to-r from-b-purple-100 to-b-blue-light-100 overflow-hidden items-center justify-center">
    <LayoutHeroShapes />
    <div class="flex flex-col justify-center max-w-screen-xl m-auto z-20 text-center">
      <h1 class="mb-6 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
        Unleash Your Potential with Cloud Solutions
      </h1>
      <h2 class="text-gray-600 text-lg lg:text-2xl mb-10">
        Enjoy Peace of Mind with Our Secure and Reliable Cloud Storage Solutions
      </h2>
      <div class="flex gap-4 justify-center">
        <nuxt-link class="btn btn-primary__gradient">
          Create free account
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
