<template>
  <header class="h-60px w-full flex justify-between items-center bg-bg-asInverse-04 fixed z-10 left-0 shadow-image">
    <NavBar :hide-selected-option="hideSelectedOption" />
    <div class="flex w-full justify-between lg:hidden">
      <RouterLink to="/" class="bg-yellow">LOGO</RouterLink>
      <div
        class="w-30px h-30px bg-bg-asSecondary b-rd-8px flex justify-center items-center mr-1.25rem"
        @click="toggleSideBar"
      >
        <img class="w-70%" src="/images/icons8-menu-100.png" alt="menu" />
      </div>
    </div>
  </header>
  <div class="h-60px w-full" />
  <SideBar
    @close-side-bar="toggleSideBar"
    :hide-selected-option="hideSelectedOption"
    :isShowSideBar="isShowSideBar"
  />
</template>

<script setup lang="ts">
import SideBar from './SideBar.vue'
import NavBar from './portal/NavBar.vue'
import { ref, computed, provide } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isShowSideBar = ref<boolean>(false)

const toggleSideBar = () => {
  isShowSideBar.value = !isShowSideBar.value
}

const hideSelectedOption = computed(() => route.path.includes('blog'))

provide('hideSelectedOption', hideSelectedOption)
</script>
