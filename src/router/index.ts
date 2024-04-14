import {  createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/',
   meta:{
    layout: 'default'
    },
   component:import('../views/index.vue'),
    name:'default'
    },
  { path: '/register',
   meta:{
    layout: 'register'
    },
    component: () => import('../views/register.vue'),
    name: 'about' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default  router
