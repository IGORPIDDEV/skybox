<template>
  <div class="container m-auto text-center py-10">
    <h1 class="mb-10 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 lg:leading-tight">
      Key benefits
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 m-4">
      <div
        v-for="(benefit, benefitIndex) in benefits"
        :key="benefitIndex"
        class="p-4 bg-b-blue-dark-200"
      >
        <Icon :name="benefit.icon" />
        <h1>{{ benefit.title }}</h1>
        <p>{{ benefit.description }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Benefit } from '~/types/benefit'

const benefits = ref<Benefit[]>([
  {
    title: 'Security',
    icon: 'material-symbols:globe',
    description: 'We understand the importance of securing your information. Thats why we employ advanced encryption technologies and data protection mechanisms to ensure the complete confidentiality of your data.'
  }, {
    title: 'Access',
    icon: 'material-symbols:globe',
    description: 'With our cloud file storage, you can access your files from any device, anywhere in the world. No complex setups required - just log in and access your data instantly.'
  }, {
    title: 'Speed',
    icon: 'material-symbols:globe',
    description: 'No more sending large files via email or resorting to inefficient collaboration methods. With our platform, you can easily share files with colleagues and collaborate in real-time, ensuring security and efficiency.'
  }, {
    title: 'Support',
    icon: 'material-symbols:globe',
    description: 'Were always here to help you. Our team of experts is ready to answer your questions and provide support to make your experience using our cloud file storage as comfortable as possible.'
  }, {
    title: 'Efficiency',
    icon: 'material-symbols:globe',
    description: 'Say goodbye to endless folders and scattered files. Our intuitive platform makes it easy to organize your documents, images, and multimedia files in one central location, saving you time and frustration.'
  }, {
    title: 'Workflow',
    icon: 'material-symbols:globe',
    description: 'Experience the power of cloud file storage and take your productivity to new heights. Join thousands of satisfied users who trust our platform to safeguard their data and simplify their work lives.'
  }])
</script>
