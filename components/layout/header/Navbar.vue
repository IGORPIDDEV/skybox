<template>
  <nav>
    <ul class="flex gap-[20px]">
      <li
        v-for="(menuItemElement, menuItemIndex) in menuitems"
        :key="menuItemIndex"
        class="text-gray-800 hover:text-primary-dark"
      >
        <nuxt-link :to="menuItemElement.link">
          {{ menuItemElement.title }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import { Menu } from '~/types/menu'

const menuitems = ref<Menu[]>([
  {
    title: 'About',
    link: '/#about'
  },
  {
    title: 'Features',
    link: '/#features'
  },
  {
    title: 'Price',
    link: '/#price'
  },
  {
    title: 'Contacts',
    link: '/#contacts'
  }
])
</script>
