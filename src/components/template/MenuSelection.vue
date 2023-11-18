<template>
  <div
    v-if="!hideSelectedOption"
    class="w-full h-full flex-col-center lg:flex-row lg:justify-center lg:w-auto"
  >
    <div v-for="(list, index) in navRouterList" :key="index" class="w-full h-full flex-col-center">
      <a
        class="w-full h-full flex-center b-1 b-solid b-b-asSidebarMenu decoration-none c-text-asPrimary p-block-15px cursor-pointer hover:bg-bg-asPrimary hover:c-text-asInverse-04 lg:b-none lg:w-100px"
        @click="scrollTo(list.href)"
        >{{ list.name }}</a
      >
    </div>
  </div>
  <RouterLink
    to="/blogs"
    class="w-full b-1 b-solid b-b-asSidebarMenu decoration-none c-text-asPrimary p-block-15px hover:bg-bg-asPrimary hover:c-text-asInverse-04 lg:b-none lg:flex-center lg:w-100px"
    >文章分享</RouterLink
  >
  <RouterLink
    to="/"
    class="hidden w-full b-1 b-solid b-b-asSidebarMenu decoration-none c-text-asPrimary p-block-15px justify-center hover:bg-bg-asPrimary hover:c-text-asInverse-04 lg:b-none lg:flex-center lg:w-100px"
    :class="{ flex: hideSelectedOption }"
    >首頁</RouterLink
  >
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { inject, onMounted } from 'vue'
import { getRouterList } from '@/settings/routerList'

const hideSelectedOption = inject<Boolean>('hideSelectedOption')
const navRouterList = getRouterList('NavRouterList')

const scrollTo = (val) => {
  const element = <HTMLElement>document.querySelector(`#${val}`)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped></style>
