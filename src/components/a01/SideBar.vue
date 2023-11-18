<template>
  <div class="bg-red lg:hidden" @click="handleClick($event)">
    <div v-if="isShowSideBar" class="bg-bg-asMask fixed top-0 left-0 w-100% h-full z-10" />
    <!-- menu bg -->
    <Transition name="slide-fade">
      <div
        v-if="isShowSideBar"
        class="bg-bg-asInverse-04 fixed top-0 right-0 w-75% h-full z-20 flex-col-center"
      >
        <!-- close btn -->
        <button
          @click="emit('closeSideBar')"
          class="w-20px h-20px m-[20px_25px_20px_0] self-end b-none bg-transparent flex-col-center"
        >
          <img src="/images/icons8-close-100.png" alt="close menu" class="w-20px" />
        </button>
        <!-- menu -->
        <div class="w-full flex-col-center text-center">
          <MenuSelection />
        </div>
        <SocialLinks :imageSource="navbarSocials" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'
import MenuSelection from '@/components/template/MenuSelection.vue'
import SocialLinks from './SocialLinks.vue'

defineProps({
  isShowSideBar: Boolean
})
const emit = defineEmits(['closeSideBar'])

const handleClick = (event: any): void => {
  if (event.target.tagName === 'A') emit('closeSideBar')
}

const navbarSocials = {
  mail: '/images/icons8-mail-100.png',
  facebook: '/images/icons8-fb-100.png',
  instagram: '/images/icons8-instagram-100.png'
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
}
</style>
