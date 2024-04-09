<template>
  <div class="flex relative min-h-[600px] bg-gradient-to-r from-b-purple-100 to-b-blue-light-100 overflow-hidden items-center justify-center">
    <div class="absolute top-[-200px] left-[-200px] w-[400px] h-[400px] bg-b-red-100 z-10 rounded-full" />
    <div class="top-0 absolute left-0 m-auto w-[300px] h-[300px] bg-b-red-300 blur-[200px]" />
    <div class="absolute bottom-0 right-0 m-auto w-[300px] h-[300px] bg-b-blue-dark-300 blur-[200px]" />
    <div class="absolute bottom-[-200px] right-[-200px] w-[400px] h-[400px] bg-b-blue-dark-100 z-10 rounded-full" />
    <div class="flex flex-col justify-center max-w-screen-xl m-auto z-20 text-center">
      <h1 class="mb-6 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
        Unleash Your Potential with Cloud Solutions
      </h1>
      <h2 class="text-gray-600 text-lg lg:text-2xl mb-6">
        Enjoy Peace of Mind with Our Secure and Reliable Cloud Storage Solutions
      </h2>
      <div>
        <button class="bg-gradient-to-r from-b-blue-dark-500 to-b-blue-dark-700 hover:bg-gradient-to-br text-white font-bold py-4 px-4 rounded-md">
          Create free account
        </button>
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
