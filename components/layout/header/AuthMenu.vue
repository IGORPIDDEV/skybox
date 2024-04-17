<template>
  <div class="flex items-center gap-5">
    <Icon class="hover:text-primary-dark cursor-pointer" name="material-symbols:globe" size="30" />
    <nuxt-link class="hover:text-primary-dark cursor-pointer" to="/auth/login">
      Log in
    </nuxt-link>
    <div>
      <nuxt-link class="block btn btn-primary__outline" to="/auth/register">
        Try for free
      </nuxt-link>
    </div>
  </div>
</template>
