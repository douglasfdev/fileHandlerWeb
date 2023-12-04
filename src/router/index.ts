import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/FileView.vue')
  },
  {
    path: '/person',
    name: 'person',
    component: () => import('../views/PersonView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
