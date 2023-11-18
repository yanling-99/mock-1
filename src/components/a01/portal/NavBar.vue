<template>
  <nav class="hidden w-full lg:flex justify-between items-center px-50px">
    <RouterLink to="/">LOGO</RouterLink>
    <!-- menu -->
    <div class="h-60px flex justify-center gap-20px lg:gap-0">
      <MenuSelection />
    </div>
    <SocialLinks :imageSource="navbarSocials" />
  </nav>
</template>

<script setup lang="ts">
import MenuSelection from '@/components/template/MenuSelection.vue'
import SocialLinks from '@/components/a01/SocialLinks.vue'
import { RouterLink, useRoute } from 'vue-router'

const navbarSocials = {
  mail: '/images/icons8-mail-100.png',
  facebook: '/images/icons8-fb-100.png',
  instagram: '/images/icons8-instagram-100.png'
}
</script>

<style scoped></style>
