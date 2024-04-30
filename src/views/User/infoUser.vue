<template>{{ user }}</template>
<script>
import {computed} from 'vue'
import { projectAuth } from '@/config/firebase';
export default{
  setup(){
    console.log("🚀 ~ setup ~ projectAuth:", projectAuth)
    const user = computed(() => projectAuth?.currentUser?.email)

    return {user}
  }
}
</script>
