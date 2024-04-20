import {  createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/',
   component:() => import('../views/index.vue'),
    name:'Home'
    },
  { path: '/register',
   meta:{
    layout: 'auth'
    },
    component: () => import('../views/register.vue'),
    name: 'Register' },
    { path: '/login',
   meta:{
    layout: 'auth'
    },
    component: () => import('../views/login.vue'),
    name: 'Login' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default  router
