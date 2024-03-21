import {  createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/Home.vue'
import AboutView from '../components/HelloWorld.vue'

const routes = [
  { path: '/', component:AboutView  },
  { path: '/about', component: HomeView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default  router
