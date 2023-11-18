import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/PB01-01/Home.vue'
import Blog from '../views/PB01-01/Blog.vue'
import PostItemDetail from '../views/PB01-01/PostItemDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blogs',
      name: 'blog',
      component: Blog
    },
    {
      path: '/blogs/:id',
      name: 'post',
      component: PostItemDetail
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    else return { top: 0 }
  }
})

export default router
