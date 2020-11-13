import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Fasnacht from '../views/Fasnacht.vue'
import Orte from '../views/Orte.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/fasnacht',
    name: 'Fasnacht',
    component: Fasnacht
  },
  {
    path: '/orte',
    name: 'Orte',
    component: Orte
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
