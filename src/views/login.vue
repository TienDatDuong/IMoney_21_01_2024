<template>
  <div class="mt-8">
    <div class="container mx-a px-8">
      <form>
        <div class="row py-2">
          <label for="Email" class="flex flex-col">
           <span class="font-semibold">Email</span>
           <input v-model="formSignIn.email"   type="text" placeholder="Email" autocomplete="username" id="Email" class="border-gray-100 rounded-lg mt-1 border px-4 py-3">
          </label>
        </div>
        <div class="row ">
          <label for="Password" class="flex flex-col">
           <span class="font-semibold">Password</span>
           <input v-model="formSignIn.password" type="password" placeholder="Password" id="Password" autocomplete="current-password" class="border-gray-100 rounded-lg mt-1 border px-4 py-3">
          </label>
        </div>
        <button class="w-full text-center p-4 mt-4 text-white bg-primary rounded-lg cursor-pointer" @click.prevent="getForm" v-if="!isPending">  Sign In</button>
        <button class="w-full text-center p-4 mt-4 text-white bg-gray-500 rounded-lg" disabled v-if="isPending">Loading ...</button>
        <div class="text-left text-red mt-4 text-xs" v-if="error">
          <span >account does not exist. please check again</span>
        </div>
      </form>
      <div class="text-center w-full mt-4">
        <span class="inline-block mr-4 font-semibold">I'm a new user.</span>
          <router-link :to="{name: 'Register',params:{}}">
            1234
           <span  class="font-bold text-primary"> Sign Up</span>
          </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import {cloneDeep} from 'lodash';
import {initForm} from './data';
import { useRouter } from 'vue-router';
import {nextTick, ref} from 'vue';
import {useSignIn} from '@/composables/useSignIn';
export default{
    setup(){
      const router = useRouter();
      const formSignIn = ref(cloneDeep(initForm))
      const {SignIn,error,isPending} = useSignIn()

      const getForm =  () => {
       SignIn(formSignIn.value.email,formSignIn.value.password)
       if(!error.value)  router.push({path: '/user'})
       console.log("🚀 ~ getForm ~ error:", error.value)
      }


      return {getForm,formSignIn,error,isPending}
    }
  }
</script>
