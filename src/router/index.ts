import {  createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/index.vue'
const routes = [
  { path: '/',
   component:() => import('../views/register.vue'),
   meta:{
    layout: 'auth'
    },
    name:'Home'
  },
  { path: '/register',
   meta:{
    layout: 'auth'
    },
    component: () => import('../views/register.vue'),
    name: 'Register'
   },
  {
    path: '/login',
   meta:{
    layout: 'auth'
    },
    component: () => import('../views/login.vue'),
    name: 'Login' },
    {
      path: '/user',
     meta:{
      layout: 'auth'
      },
      component: () => import('../views/User/infoUser.vue'),
      name: 'User' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default  router
