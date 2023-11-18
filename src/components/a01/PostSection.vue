<template>
  <div class="flex-col-center bg-bg-asInverse-04 m-p-inner xl:p-inner">
    <h2 class="m-headline-semibold-xl c-text-asSecondary my-30px lg:headline-bold">{{ title }}</h2>
    <!-- posts -->
    <div class="w-full flex-col-center gap-35px lg:flex-row lg:justify-center lg:items-start xl:justify-between">
      <PostItem
        v-for="post in displayedPosts"
        :key="post.id"
        :title="post?.title.rendered"
        :categories="post.categories"
        :api-base-end-point="apiBaseEndPoint"
        :featured-media="post.featured_media"
        :date="post.date"
        :id="post.id"
        typeComponent="PostSection"
      />
    </div>
    <a
      href="/blogs"
      class="m-paragraph-regular b-1 b-solid b-b-asSecondary decoration-none font-semibold c-text-asSecondary bg-transparent p-x-30px p-y-10px m-y-50px hover:bg-bg-asSecondary hover:c-text-asInverse-04"
      >{{ morePost }}
    </a>
  </div>
</template>

<script setup lang="ts">
import { usePost } from '@/hooks/usePost'
import apiBaseEndPoint from '@/settings/apiBaseEndPoint'
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import PostItem from './PostItem.vue'

const displayedPosts = ref()
const title = '最新文章'
const morePost = '瀏覽更多文章'

const { getPostListByRecords } = usePost()

onMounted(async () => {
  displayedPosts.value = await getPostListByRecords(3)
})
</script>

<style scoped></style>
