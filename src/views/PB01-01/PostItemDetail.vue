<template>
  <p>post id: {{ route.params.id }}</p>
  <div v-for="(category, index) in filteredCategories" :key="index">
    <p>{{ category?.name }}</p>
  </div>
  <div v-html="postDetails?.content.rendered" class="m-p-inner py-40px bg-bg-asInverse-04 lg:p-inner"></div>
  <!-- 相關文章 -->
  <div class="flex-col-center bg-bg-asInverse-03 m-p-inner xl:p-inner">
    <h2 class="m-headline-semibold-xl c-text-asSecondary m-y-30px lg:headline-bold">相關文章</h2>
    <div class="w-full flex-col-center gap-30px mb-30px lg:flex-row lg:justify-start lg:items-start xl:justify-start xl:gap-35px">
      <PostItem
        v-for="post in displaySimilarPosts"
        :key="post.id"
        :title="post?.title?.rendered"
        :categories="post.categories"
        :api-base-end-point="apiBaseEndPoint"
        :featured-media="post.featured_media"
        :date="post.date"
        :id="post.id"
        typeComponent="PostItemDetail"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUpdated, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { usePost } from '@/hooks/usePost'
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'
import PostItem from '@/components/a01/PostItem.vue'
import apiBaseEndPoint from '@/settings/apiBaseEndPoint'

const route = useRoute()
const filteredCategories = ref()
const postDetails = ref()
const appStore = useAppStore()
const { getPostDetails, getPostByCategories } = usePost()
const { categoryLists } = storeToRefs(appStore)
const displaySimilarPosts = ref()

watch(
  () => route.path,
  async () => {
    postDetails.value = await getPostDetails(`${route.params.id}`)
  }
)

onUpdated(() => {
  appStore.setBannerInfo(postDetails.value.title.rendered, postDetails.value.date)
})

onMounted(async () => {
  postDetails.value = await getPostDetails(`${route.params.id}`)

  filteredCategories.value = categoryLists.value.filter(
    (item) => postDetails.value?.categories?.includes(item.id)
  )
  const categoryListId = filteredCategories.value.map((item) => item.id)
  displaySimilarPosts.value = await getPostByCategories(categoryListId, 1, 3)
})
</script>
