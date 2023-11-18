import { fetchData } from './index'

const API_POSTS_ALL = '/wp-json/wp/v2/posts'

export const getPostData = (params: string) => fetchData(API_POSTS_ALL + params)
