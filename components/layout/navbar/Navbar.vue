<template>
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div class="flex items-center gap-[5px]">
      <Icon name="ri:upload-cloud-2-line" size="30" />
      <h1 class="uppercase font-bold text-xl">
        Skybox
      </h1>
    </div>
    <nav>
      <li v-for="(menuItemElement, menuItemIndex) in menuitems" :key="menuItemIndex">
        <a :href="menuItemElement.title">{{ menuItemElement.link }}</a>
      </li>
    </nav>
    <div class="flex items-center gap-5">
      <div>Sign in</div>
      <div>
        <button class="btn btn-primary__outline">
          Sign up
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { menuItem } from '~/types/menuItem'

const menuitems = ref<menuItem[]>([
  {
    title: 'About',
    link: '/about'
  }
])
</script>
