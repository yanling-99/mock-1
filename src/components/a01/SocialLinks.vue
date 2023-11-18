<template>
  <div
    class="flex mt-40px gap-20px lg:mt-0 lg:mr-30px lg:gap-15px"
    :class="{ 'mt-0! ': typeComponent == 'footer' }"
  >
    <a :href="MAIL_LINK" target="_blank" class="flex-col-center">
      <img
        :src="imageSource?.mail"
        alt="mail"
        class="w-25px"
        :class="{ 'w-20px! lg:w-25px! xl:w-30px!': typeComponent == 'footer' }"
    /></a>
    <a :href="FACEBOOK_LINK" target="_blank" class="flex-col-center"
      ><img
        :src="imageSource?.facebook"
        alt="facebook"
        class="w-25px"
        :class="{ 'w-20px! lg:w-25px! xl:w-30px!': typeComponent == 'footer' }"
    /></a>
    <a :href="INSTAGRAM_LINK" target="_blank" class="flex-col-center"
      ><img
        :src="imageSource?.instagram"
        alt="instagram"
        class="w-25px"
        :class="{ 'w-20px! lg:w-25px! xl:w-30px!': typeComponent == 'footer' }"
    /></a>
  </div>
</template>

<script setup lang="ts">
import { INSTAGRAM_LINK, FACEBOOK_LINK, MAIL_LINK } from '@/settings/directLinks'
import { defineProps } from 'vue'

const props = defineProps({
  imageSource: Object,
  typeComponent: String
})
</script>
