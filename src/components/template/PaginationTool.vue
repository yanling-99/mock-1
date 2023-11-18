<template>
  <div class="w-full flex justify-center items-center gap-10px mt-30px lg:mt-50px">
    <span
      class="hover:cursor-pointer m-paragraph-regular c-text-asPrimary lg:paragraph-regular"
      @click="toBegPage"
      >{{ begPage }}</span
    >
    <span
      class="hover:cursor-pointer m-paragraph-regular c-text-asPrimary px-4px lg:paragraph-regular"
      @click="toPrevPage"
      >{{ prevPage }}</span
    >
    <div
      v-for="(page, idx) in pageNumbers"
      class="hover:cursor-pointer mx-10px m-paragraph-regular c-text-asPrimary lg:paragraph-regular"
      :key="idx"
      @click="navigateToPage(page)"
    >
      <span
        class=""
        :class="{
          'bg-bg-asInverse-01 c-text-asInverse-04! px-3px': props.currentPageNumber == page
        }"
        >{{ page }}</span
      >
    </div>
    <span
      class="hover:cursor-pointer m-paragraph-regular c-text-asPrimary px-4px lg:paragraph-regular"
      @click="toNextPage"
      >{{ nextPage }}</span
    >
    <span
      class="hover:cursor-pointer m-paragraph-regular c-text-asPrimary lg:paragraph-regular"
      @click="toEndPage"
      >{{ endPage }}</span
    >
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed, ref, onUpdated, watchEffect, watch } from 'vue'

const props = defineProps({
  totalPages: Number,
  totalPosts: Number,
  currentPageNumber: Number
})

const begPage = '<<'
const prevPage = '<'
const nextPage = '>'
const endPage = '>>'

const MAX_DISPLAYED_PAGES = 5
const emit = defineEmits(['update:postItems'])

const toNextPage = () => {
  emit('update:postItems', Math.min(props.currentPageNumber + 1, props.totalPages))
}
const toPrevPage = () => {
  emit('update:postItems', Math.max(props.currentPageNumber - 1, 1))
}
const toBegPage = () => {
  emit('update:postItems', 1)
}
const toEndPage = () => {
  emit('update:postItems', props.totalPages)
}
const navigateToPage = (page: number) => {
  emit('update:postItems', Math.min(Math.max(page, 1), props.totalPages))
}

// Array.from({ length: props.totalPages }, (_, index) => index + 1)
const pageNumbers = computed(() => {
  const startPage = Math.max(1, props.currentPageNumber - Math.floor(MAX_DISPLAYED_PAGES / 2))
  const endPage = Math.min(props.totalPages, startPage + MAX_DISPLAYED_PAGES - 1)
  console.log(startPage, endPage)
  const pages = []
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }
  return pages
})

// const displayedPages = computed(() => {
//   const startPage = Math.max(1, currentPage.value - Math.floor(maxDisplayedPages / 2));
//   const endPage = Math.min(totalPages.value, startPage + maxDisplayedPages - 1);

//   const pages = [];
//   for (let i = startPage; i <= endPage; i++) {
//     pages.push(i);
//   }

//   return pages;
// });

// const pageNumbers = [1,2,3,4,5,6]
</script>
