<template>
  <nav>
    <ul class="flex gap-[20px]">
      <li
        v-for="(menuItemElement, menuItemIndex) in menuitems"
        :key="menuItemIndex"
        class="hover:text-primary-dark"
      >
        <nuxt-link :to="menuItemElement.link">
          {{ menuItemElement.title }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import { menuItem } from '~/types/menuItem'

const menuitems = ref<menuItem[]>([
  {
    title: 'About',
    link: '#about'
  },
  {
    title: 'Features',
    link: '#feature'
  },
  {
    title: 'Price',
    link: '#price'
  },
  {
    title: 'Contacts',
    link: '#contacts'
  }
])
</script>
