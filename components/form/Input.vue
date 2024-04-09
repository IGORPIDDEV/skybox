<template>
  <div class="flex relative">
    <div v-if="icon" class="absolute top-1/2 left-[10px] transform -translate-y-1/2 text-gray-500">
      <Icon name="ic:baseline-search" :size="iconSize" />
    </div>
    <input
      :class="`${ icon ? 'pl-[40px]' : 'pl-4' } pr-4 py-4 rounded-md outline-none w-full bg-gray-50 hover:border-b-blue-dark-500 border border-gray-300 text-[16px] focus:outline-b-blue-dark-500 ${classList}`"
      :type="type"
      :placeholder="placeholder"
      :value="props.modelValue"
      @input="emit('update:modelValue', $event?.target?.value)"
    >
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  classList: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  }
})
const iconSize = ref('24px')
</script>
