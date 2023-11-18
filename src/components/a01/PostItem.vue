<template>
  <div
    class="relative"
    :class="{
      'for-PostSection': typeComponent == 'PostSection',
      'for-PostCatalog': typeComponent == 'PostCatalog',
      'for-PostItemDetail': typeComponent == 'PostItemDetail'
    }"
  >
    <RouterLink :to="'/blogs/' + id">
      <img :src="imgURL" alt="文章照片" />
    </RouterLink>
    <div class="content">
      <p class="title">
        {{ title }}
      </p>
      <p class="desc" v-html="excerpt" />
      <RouterLink :to="'/blogs/' + id" class="read-more"
        >{{ readMore }} &rsaquo;&rsaquo;</RouterLink
      >
      <p class="date">{{ formattedDate }}</p>

      <div v-for="(category, index) in filteredCategories" :key="index" class="category">
        {{ category?.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { usePost } from '@/hooks/usePost'
import { onMounted, ref, computed } from 'vue'
import { useAppStore } from '@/stores/app'

const imgURL = ref<string>()
const filteredCategories = ref()
const { setFeaturedImage } = usePost()
const { categoryLists } = useAppStore()

const props = defineProps({
  title: String,
  categories: Array,
  apiBaseEndPoint: String,
  featuredMedia: Number,
  date: Date,
  id: Number,
  typeComponent: String,
  excerpt: String
})

filteredCategories.value = categoryLists.filter((item) => props.categories?.includes(item.id))

const formattedDate = computed(() => {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
  return (
    new Date(props.date)
      .toLocaleDateString('zh-TW', options)
      .replace(/\//, '年')
      .replace(/\//, '月') + '日'
  )
})

onMounted(async () => {
  imgURL.value = await setFeaturedImage(props.featuredMedia)
})

const readMore = '閱讀更多'
</script>

<style lang="scss" scoped>
.for-PostSection {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  text-align: center;
  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
  div.content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    p.title {
      font-weight: normal;
      font-size: 20px;
      color: #b85e34;
      width: 80%;
      margin-bottom: 0;
      line-height: 150%;
      letter-spacing: 2px;
    }
    p.desc {
      font-weight: normal;
      font-size: 14px;
      line-height: 150%;
      color: #784b23;
      letter-spacing: 0.1rem;
      letter-spacing: 2px;
    }
    .read-more {
      font-weight: normal;
      font-size: 14px;
      line-height: 150%;
      color: #b85e34;
      text-decoration: none;
      font-weight: 600;
      letter-spacing: 2px;
    }
    p.date {
      font-weight: normal;
      font-size: 14px;
      line-height: 150%;
      color: #ac7b57;
      letter-spacing: 2px;
    }
    div.category {
      position: absolute;
      top: 15px;
      left: 15px;
      padding-inline: 0.5rem;
      padding-block: 0.25rem;
      border-radius: 5px;
      background: #5a3a1b;
      color: #ffffff;
      font-weight: normal;
      font-size: 16px;
      line-height: 150%;
      letter-spacing: 0.1rem;
    }
  }
}

.for-PostCatalog {
  width: 300px;
  height: 550px;
  display: flex;
  flex-direction: column;
  // align-items: center;
  position: relative;

  background: #ffffff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 300px;
    height: 225px;
    object-fit: cover;
  }
  div.content {
    flex-grow: 1;
    padding-inline: 2rem;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    p.title {
      font-weight: normal;
      font-size: 20px;
      color: #b85e34;
      margin-bottom: 0;
      line-height: 150%;
      letter-spacing: 2px;
    }
    p.desc {
      font-weight: normal;
      font-size: 14px;
      line-height: 150%;
      color: #784b23;
      letter-spacing: 2px;
      max-height:140px;
      overflow: hidden;
    }
    .read-more {
      font-weight: normal;
      font-size: 12px;
      line-height: 150%;
      color: #b85e34;
      text-decoration: none;
      font-weight: 600;
      letter-spacing: 2px;
    }
    p.date {
      font-weight: normal;
      font-size: 12px;
      line-height: 150%;
      color: #ac7b57;
      text-align: center;
      margin-top: auto;
      letter-spacing: 2px;
    }
    div.category {
      position: absolute;
      top: 15px;
      left: 15px;
      padding-inline: 0.5rem;
      padding-block: 0.25rem;
      border-radius: 5px;
      background: #5a3a1b;
      color: #ffffff;
      font-weight: normal;
      font-size: 16px;
      line-height: 150%;
      letter-spacing: 2px;
    }
  }
}

.for-PostItemDetail {
  width: 270px;
  padding: 15px;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  img {
    width: 270px;
    height: 270px;
    object-fit: cover;
    border-radius: 10px;
  }
  div.content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    p.title {
      width: 80%;
      font-weight: normal;
      font-size: 16px;
      color: #b85e34;
      margin-bottom: 0;
      line-height: 150%;
      letter-spacing: 2px;
    }
    p.desc {
      display: none;
    }
    .read-more {
      display: none;
    }
    p.date {
      font-weight: normal;
      font-size: 12px;
      line-height: 150%;
      color: #ac7b57;
      text-align: center;
      margin-bottom: 0;
      letter-spacing: 2px;
    }
    div.category {
      position: absolute;
      top: 25px;
      left: 25px;
      padding-inline: 0.5rem;
      padding-block: 0.25rem;
      border-radius: 5px;
      background: #5a3a1b;
      color: #ffffff;
      font-weight: normal;
      font-size: 16px;
      line-height: 150%;
      letter-spacing: 2px;
    }
  }
}

@media (min-width: 1280px) {
  .for-PostSection {
    width: 330px;
    img {
      width: 330px;
      height: 330px;
    }
  }

  .for-PostItemDetail {
    width: 300px;
    img {
      width: 300px;
      height: 300px;
    }
  }
}
</style>
