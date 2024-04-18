<template>
  <div class="flex flex-col mb-[20px]">
    <label v-if="label" class="block w-full mb-2 uppercase text-gray-700 text-sm font-bold">{{ label }}</label>
    <div class="flex relative mb-[5px]">
      <div v-if="icon" class="absolute top-1/2 left-[20px] transform -translate-y-1/2 text-gray-500">
        <Icon :name="icon" :size="iconSize" />
      </div>
      <input
        :class="inputClasses"
        :type="type"
        :placeholder="placeholder"
        :value="props.modelValue"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement)?.value)"
      >
    </div>
    <span v-if="validationError" class="text-red">{{ validationError }}</span>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  validationRules: {
    type: Array as () => ((value: string) => string | null)[],
    default: () => []
  },
  placeholder: { type: String, default: '' },
  classList: { type: String, default: '' },
  modelValue: { type: String, default: '' },
  icon: { type: String, default: '' },
  label: { type: String, default: '' },
  type: { type: String, default: 'text' }
})

const iconSize = ref('24px')

const inputClasses = computed(() => {
  const classes = ['pl-4', 'pr-4', 'py-4', 'rounded-md', 'outline-none', 'w-full', 'bg-gray-50', 'hover:border-b-blue-dark-500', 'border', 'border-gray-300', 'text-[16px]', 'focus:outline-b-blue-dark-500']
  if (props.icon) { classes.unshift('pl-[60px]') }
  if (props.classList) { classes.push(props.classList) }
  return classes.join(' ')
})

const validationError = computed(() => {
  return props.validationRules.map(rule => rule(props.modelValue)).find(error => error !== null) || ''
})
</script>
