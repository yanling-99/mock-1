import { fetchData } from './index'

const API_FEATURED_IMAGE = '/wp-json/wp/v2/media/'

export const getFeaturedImage = (params: number) => fetchData(API_FEATURED_IMAGE + params)
