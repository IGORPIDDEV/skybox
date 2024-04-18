<template>
  <section class="w-full full-height gradient-background flex items-center justify-center">
    <div class="bg-white p-6 shadow-md rounded-md min-w-[450px]">
      <h1 class="text-2xl font-bold text-center mb-4">
        Login
      </h1>
      <form @submit.prevent="handleSubmit">
        <FormInput
          v-model="user.email"
          placeholder="Enter your email address"
          label="Email"
          icon="material-symbols:mail-outline"
          :validation-rules="nameValidationRules"
        />
        <FormInput
          v-model="user.email"
          placeholder="Enter your password"
          label="Password"
          icon="solar:lock-password-outline"
        />
        <button type="submit" class="btn btn-primary w-full">
          Login
        </button>
      </form>
    </div>
  </section>
</template>
<script setup lang="ts">
const user = reactive({
  email: '',
  password: ''
})

const nameValidationRules = [
  (value: string) => { return (!value) ? 'Name is required' : '' },
  (value: string) => { return (value.length < 3) ? 'Name length less 3 symbols' : '' }
]
</script>
