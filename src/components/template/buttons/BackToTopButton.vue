<template>
  <div
    v-if="isShowBackToTopButton"
    class="bg-bg-asInverse-01 z-999 opacity-60 w-25px h-25px fixed bottom-30px right-10px flex-center b-rd-5px shadow-image cursor-pointer md:w-40px md:h-40px  bottom-100px"
    @click="backToTop"
  >
    <img
      src="/images/icons8-triangle-100.png"
      alt="back to top"
      class="w-15px md:w-20px"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isShowBackToTopButton = ref<boolean>(false)

const backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const toggleBackToTopButton = () => {
  isShowBackToTopButton.value = window.scrollY > 800
}

onMounted(() => {
  window.addEventListener('scroll', toggleBackToTopButton)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', toggleBackToTopButton)
})
</script>

<style scoped></style>
