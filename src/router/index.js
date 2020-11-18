import { createRouter, createWebHashHistory } from 'vue-router'
import Fasnacht from '../views/Fasnacht.vue'
import Map from '../views/Map.vue'
import Route from '../views/Route.vue'


const routes = [
  {
    path: '/fasnacht',
    name: 'Fasnacht',
    component: Fasnacht
  },
  {
    path: '/map',
    name: 'Map',
    component: Map
  },
  {
    path: '/',
    name: 'Route',
    component: Route
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
