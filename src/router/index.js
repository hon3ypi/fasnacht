import { createRouter, createWebHashHistory } from 'vue-router'
import Fasnacht from '../views/Fasnacht.vue'
import Map from '../views/Map.vue'
import Route from '../views/Route.vue'
import Grend1 from '../views/Grend1.vue'
import Grend2 from '../views/Grend2.vue'
import Grend3 from '../views/Grend3.vue'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
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
    path: '/route',
    name: 'Route',
    component: Route
  },
  {
    path: '/grend1',
    name: 'Grend1',
    component: Grend1
  },
  {
    path: '/grend2',
    name: 'Grend2',
    component: Grend2
  },
  {
    path: '/grend3',
    name: 'Grend3',
    component: Grend3
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
