import { createRouter, createWebHistory } from 'vue-router'
import StartPage from '@/pages/StartPage.vue'
import WelcomeSurvey from '@/pages/WelcomeSurvey.vue'
import EndPage from '@/pages/EndPage.vue'

const routes = [
  {
    path: '/',
    name: 'StartPage',
    component: StartPage
  },
  {
    path: '/welcome',
    name: 'WelcomeSurvey',
    component: WelcomeSurvey
  },
  {
    path: '/end',
    name: 'EndPage',
    component: EndPage
  },
  { path: '/:catchAll(.*)', redirect: { name: 'StartPage' } }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
