<template>
  <section class="relative container m-auto text-center pt-[100px] pb-[50px]">
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[35%] w-[800px] h-[800px] bg-b-blue-dark-100 z-10 rounded-full blur-xl" />
    <h1 class="relative text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 lg:leading-tight z-20">
      Unlock the power of our cloud file storage
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 mt-[90px]">
      <div
        v-for="(benefit, benefitIndex) in benefits"
        :key="benefitIndex"
        class="relative z-20 overflow-hidden p-8 bg-white rounded-md"
      >
        <Icon :name="benefit.icon" size="60" class="text-b-purple-500" />
        <h1 class="text-gray-800 text-xl md:text-2xl lg:text-3xl font-bold tracking-tight pt-4 pb-4">
          {{ benefit.title }}
        </h1>
        <p class="text-gray-600 text-lg leading-8 text-justify">
          {{ benefit.description }}
        </p>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { Benefit } from '~/types/benefit'

const benefits = ref<Benefit[]>([
  {
    title: 'Security',
    icon: 'material-symbols:shield-lock-outline',
    description: 'We understand the importance of securing your information. Thats why we employ advanced encryption technologies and data protection mechanisms to ensure the complete confidentiality of your data.'
  }, {
    title: 'Access',
    icon: 'bi:universal-access-circle',
    description: 'With our cloud file storage, you can access your files from any device, anywhere in the world. No complex setups required - just log in and access your data instantly.'
  }, {
    title: 'Speed',
    icon: 'ic:sharp-speed',
    description: 'No more sending large files via email or resorting to inefficient collaboration methods. With our platform, you can easily share files with colleagues and collaborate in real-time, ensuring security and efficiency.'
  }, {
    title: 'Efficiency',
    icon: 'material-symbols:table-chart-view-outline',
    description: 'Say goodbye to endless folders and scattered files. Our intuitive platform makes it easy to organize your documents, images, and multimedia files in one central location, saving you time and frustration.'
  }, {
    title: 'Workflow',
    icon: 'lucide:workflow',
    description: 'Experience the power of cloud file storage and take your productivity to new heights. Join thousands of satisfied users who trust our platform to safeguard their data and simplify their work lives.'
  }, {
    title: 'Support',
    icon: 'ic:sharp-question-answer',
    description: 'Were always here to help you. Our team of experts is ready to answer your questions and provide support to make your experience using our cloud file storage as comfortable as possible.'
  }
])
</script>
