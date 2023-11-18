import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const categoryLists = ref([])
  const bannerText = ref()
  const bannerDate = ref()

  const setCategoryLists = (value: []) => {
    categoryLists.value = value
  }

  const setBannerInfo = (value: string, date) => {
    bannerText.value = value
    bannerDate.value = date
  }

  return { categoryLists, bannerText, bannerDate, setCategoryLists, setBannerInfo }
})
