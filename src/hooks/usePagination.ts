import { ref, computed } from 'vue'
import { usePost } from './usePost'

export const usePagination = (itemsPerPage: number) => {
  const { totalPosts, getCountInfo } = usePost()

  const currentPageNumber = ref(1)
  const totalPages = ref()

  const calculateTotalPages = (a: number) => {
    totalPages.value = Math.ceil(totalPosts.value / a)
  }

  getCountInfo(itemsPerPage).then(() => {
    calculateTotalPages(itemsPerPage)
  })

  const nextPage = () => {
    currentPageNumber.value = Math.min(currentPageNumber.value + 1, totalPages.value)
  }
  const begPage = () => {
    currentPageNumber.value = 1
  }
  const prevPage = () => {
    currentPageNumber.value = Math.max(currentPageNumber.value - 1, 1)
  }
  const endPage = () => {
    currentPageNumber.value = totalPages.value
  }

  const goToPage = (page: number) => {
    currentPageNumber.value = Math.min(Math.max(page, 1), totalPages.value)
  }

  return {
    currentPageNumber,
    nextPage,
    prevPage,
    begPage,
    endPage,
    goToPage,
    calculateTotalPages
  }
}
