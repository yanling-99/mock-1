<template>
  <div
    class="banner h-100px rd-[0px_0px_10px_10px] overflow-hidden flex justify-center items-center relative lg:h-150px xl:h-200px xl:rd-[0px_0px_20px_20px]"
  >
    <div class="bg-black bg-op-40 absolute w-full h-full" />
    <div class="flex-col-center">
      <h1
        class="m-headline-bold-xxl c-text-asInverse-04 z-2 tracking-widest m-0 xl:headline-bold-xxl"
      >
        {{ text }}
      </h1>
      <p v-if="isShowPostDetails" class="text-white z-2 tracking-widest">{{ formattedDate }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUpdated, computed, ref, watch } from 'vue'
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'

const { bannerText, bannerDate } = storeToRefs(useAppStore())

const headline_text1 = '小荷的手帳教室'
const headline_text2 = '文章分享'
const text = ref(bannerText)
const date = ref(bannerDate)
let isShowPostDetails = false

const props = defineProps({
  currentRoutePath: String
})

const formattedDate = computed(() => {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
  return (
    new Date(date.value)
      .toLocaleDateString('zh-TW', options)
      .replace(/\//, '年')
      .replace(/\//, '月') + '日'
  )
})

watch(
  () => props.currentRoutePath,
  (newParams) => {
    const inBlogCatalog = /^\/blogs$/ //showing blog catalog
    const inSinglePost = /blogs\/\d{1,}/ //showing blog post
    if (inBlogCatalog.test(newParams)) {
      text.value = headline_text2
      isShowPostDetails = false
    } else if (inSinglePost.test(newParams)) {
      // text.value = bannerText
      isShowPostDetails = true
    } else {
      text.value = headline_text1
      isShowPostDetails = false
    }
  }
)

onMounted(() => {
  text.value = headline_text1
})
</script>

<style scoped>
.banner {
  background: url('/images/bg_banner.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
