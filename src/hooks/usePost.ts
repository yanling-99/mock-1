import { getCategories } from '@/api/categories'
import { getFeaturedImage } from '@/api/featuredImage'
import { getPostData } from '@/api/posts'
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

export const usePost = () => {
  const appStore = useAppStore()
  const totalPosts = ref<number | null>()
  const totalPages = ref<number | null>()

  const fetchPostData = async (url: string) => {
    try {
      const response = await getPostData(url)
      if (response.status === 200) {
        return response.data
      } else {
        throw new Error(`status-code:${response.status}`)
      }
    } catch (error) {
      console.error(error)
      return null
    }
  }

  const getPostList = async () => {
    return await fetchPostData('')
  }

  const getPostDetails = async (id: string) => {
    return await fetchPostData('/' + id)
  }

  const getPostListByRecords = async (totalPosts: number) => {
    return await fetchPostData('?per_page=' + totalPosts)
  }

  const getPostByPageNumber = async (postPerPage: number, pageNum: number) => {
    return await fetchPostData('?per_page=' + postPerPage + '&page=' + pageNum)
  }

  // multiple categories = '1,2,3'
  const getPostByCategories = async (categories: any, page: number, perPage: number) => {
    try {
      const response = await getPostData(
        `?categories=${categories}&per_page=${perPage}&page=${page}`
      )
      if (response.status == 200) {
        totalPosts.value = parseInt(response.headers.get('x-wp-total'), 10) || null
        totalPages.value = parseInt(response.headers.get('x-wp-totalpages'), 10) || null
        return response.data
      }
    } catch (error) {
      console.error(error)
    }
  }

  const getCountInfo = async (postPerPage: number) => {
    const data = (await getPostData(`?per_page=${postPerPage}`)) || {}
    totalPosts.value = parseInt(data.headers.get('x-wp-total'), 10) || null
    totalPages.value = parseInt(data.headers.get('x-wp-totalpages'), 10) || null
  }

  const setFeaturedImage = async (num: number) => {
    try {
      const response = await getFeaturedImage(num)
      if (response.status == 200) {
        return response.data.guid.rendered
      }
    } catch (error) {
      console.error(error)
    }
  }

  const getCategoryList = async () => {
    try {
      const response = await getCategories('')
      if (response.status == 200) {
        appStore.setCategoryLists(response.data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return {
    totalPosts,
    totalPages,
    getPostDetails,
    getPostList,
    getPostListByRecords,
    setFeaturedImage,
    getCategoryList,
    getCountInfo,
    getPostByPageNumber,
    getPostByCategories
  }
}
