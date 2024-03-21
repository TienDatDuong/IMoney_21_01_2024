import {  createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/Home.vue'
import AboutView from '../components/HelloWorld.vue'

const routes = [
  { path: '/', meta:{
    layout: 'default'
  }, component:AboutView, name:'default'  },
  { path: '/about', meta:{
    layout: 'auth'
  }, component: HomeView, name: 'about' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default  router
