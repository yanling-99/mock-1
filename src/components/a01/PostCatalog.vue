<template>
  <div class="m-p-inner lg:p-inner xl:px-160px flex-col-center">
    <div class="w-full flex justify-start gap-10px items-center flex-wrap my-35px md:w-70% md:justify-center lg:w-full lg:justify-start ">
      <!-- <p>Filters</p> -->
      <a
        v-for="category in categoryLists"
        :key="category.id"
        class= "paragraph-regular bg-bg-asInverse-03 b-b-asSecondary c-text-asSecondary b-solid b-1 b-rd-5px px-15px py-5px hover:cursor-pointer hover:bg-bg-asSecondary hover:c-text-asInverse-04"
        @click="setPostCategories(category.id, displayedCategoryLists)"
        :class="{
          'bg-bg-asSecondary! c-text-asInverse-04!': displayedCategoryLists.some(
            (val) => val === category.id
          )
        }"
      >
        {{ category.name }}
      </a>
      <a
        class="paragraph-regular c-text-asSecondary px-15px py-5px decoration-underline hover:cursor-pointer"
        @click="clearFilter"
        >清除所有篩選</a
      >
    </div>

    <div class="w-full flex-col-center gap-30px lg:flex-row  lg:items-start">
      <PostItem
        v-for="post in displayedPosts"
        :key="post.id"
        :title="post?.title?.rendered"
        :categories="post.categories"
        :api-base-end-point="apiBaseEndPoint"
        :featured-media="post.featured_media"
        :date="post.date"
        :id="post.id"
        :excerpt="post.excerpt.rendered"
        typeComponent="PostCatalog"
      />
    </div>

    <PaginationTool
      @update:post-items="updatePostItems"
      :total-pages="totalPages"
      :total-posts="totalPosts"
      :current-page-number="currentPageNumber"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeMount, computed, ref, onUpdated, watch } from 'vue'
import { usePost } from '@/hooks/usePost'
import apiBaseEndPoint from '@/settings/apiBaseEndPoint'
import PostItem from './PostItem.vue'
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'
import { usePagination } from '@/hooks/usePagination'
import PaginationTool from '@/components/template/PaginationTool.vue'

const POSTS_PER_PAGE = 3
const displayedPosts = ref()
const currentPageNumber = ref<number>(1)
const displayedCategoryLists = ref<object>([])

const { categoryLists } = storeToRefs(useAppStore())
const {
  totalPages,
  totalPosts,
  getPostListByRecords,
  getPostByPageNumber,
  getPostByCategories,
  getCountInfo
} = usePost()
const { begPage, calculateTotalPages } = usePagination(POSTS_PER_PAGE)

const updatePostItems = async (currentPageNum: number | undefined) => {
  if (displayedCategoryLists.value.length > 0) {
    displayedPosts.value = await getPostByCategories(
      displayedCategoryLists.value,
      currentPageNum,
      POSTS_PER_PAGE
    )
  } else {
    displayedPosts.value = await getPostByPageNumber(POSTS_PER_PAGE, currentPageNum)
  }
  currentPageNumber.value = currentPageNum
}

const resetFilter = async () => {
  displayedPosts.value = await getPostListByRecords(POSTS_PER_PAGE)
}

const setPostCategories = async (val: number, array: []) => {
  const index = array.indexOf(val)
  if (index !== -1) {
    array.splice(index, 1)
  } else {
    array.push(val)
  }
  if (!displayedCategoryLists.value.length) {
    resetFilter()
    await getCountInfo(POSTS_PER_PAGE)
    return
  }
  displayedPosts.value = await getPostByCategories(displayedCategoryLists.value, 1, POSTS_PER_PAGE)
}

const clearFilter = async () => {
  displayedCategoryLists.value = []
  await resetFilter()
  await getCountInfo(POSTS_PER_PAGE)
}

onMounted(async () => {
  displayedPosts.value = await getPostListByRecords(POSTS_PER_PAGE)
  await getCountInfo(POSTS_PER_PAGE)
  resetFilter()
})
</script>
