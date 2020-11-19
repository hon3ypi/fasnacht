import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Grend1 from '../views/Grend1.vue'
import Grend2 from '../views/Grend2.vue'
import Grend3 from '../views/Grend3.vue'
import Karte from '../views/Karte.vue'
import Mapfake1 from '../views/Mapfake1.vue'
import Mapfake2 from '../views/Mapfake2.vue'
import Mapfake3 from '../views/Mapfake3.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  },
  {
    path: '/karte',
    name: 'Karte',
    component: Karte
  },
  {
    path: '/mapfake1',
    name: 'Mapfake1',
    component: Mapfake1
  },
  {
    path: '/mapfake2',
    name: 'Mapfake2',
    component: Mapfake2
  },
  {
    path: '/mapfake3',
    name: 'Mapfake3',
    component: Mapfake3
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
