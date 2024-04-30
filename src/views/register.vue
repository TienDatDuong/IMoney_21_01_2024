<template>
  <div class="mt-8">
    <div class="container mx-a px-8">
      <form>
        <!-- <div class="row">
          <label for="fullName" class="flex flex-col">
           <span class="font-semibold">Full name</span>
           <input v-model="formSignUp.name" type="text" placeholder="Full name" id="fullName" class="border-gray-100 rounded-lg mt-1 border px-4 py-3">
          </label>
        </div> -->
        <div class="row py-2">
          <label for="Email" class="flex flex-col">
           <span class="font-semibold">Email</span>
           <input v-model="formSignUp.email" type="text" placeholder="Email" autocomplete="username" id="Email" class="border-gray-100 rounded-lg mt-1 border px-4 py-3">
          </label>
        </div>
        <div class="row ">
          <label for="Password" class="flex flex-col">
           <span class="font-semibold">Password</span>
           <input v-model="formSignUp.password" type="password" placeholder="Password" id="Password" autocomplete="current-password" class="border-gray-100 rounded-lg mt-1 border px-4 py-3">
          </label>
        </div>
        <button class="w-full text-center p-4 mt-4 text-white bg-primary rounded-lg cursor-pointer" @click.prevent="getForm" v-if="!isPending"  >Sign Up</button>
        <button class="w-full text-center p-4 mt-4 text-white bg-gray-500 rounded-lg cursor-no-drop" v-if="isPending" disabled >Loading..</button>
        <div class="text-left text-red mt-4 text-xs" v-if="error">
          <span >The email address is already in use by another account</span>
        </div>
      </form>
      <div class="text-center w-full mt-4">
        <span class="inline-block mr-4 font-semibold">I'm already a member.</span>
          <router-link :to="{name: 'Login',params:{}}">
           <span  class="font-bold text-primary"> Sign In</span>
          </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import {ref} from 'vue';
import {cloneDeep} from 'lodash';
import {useSignUp} from '@/composables/useSignUp';
import {initForm} from './data';
export default {
  setup(){
    const formSignUp = ref(cloneDeep(initForm))
    const {isPending,error,signUp}  = useSignUp();
    const getForm = () => {
      console.log(' vao');
      console.log('formSignUp', formSignUp.value);
      signUp(formSignUp.value.email,formSignUp.value.password)
    }


    return {formSignUp, getForm, isPending, error}
  }
}
</script>
