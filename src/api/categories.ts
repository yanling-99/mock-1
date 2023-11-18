import { fetchData } from './index'

const API_FEATURED_IMAGE = '/wp-json/wp/v2/categories/'

export const getCategories = (params: string) => fetchData(API_FEATURED_IMAGE + params)
