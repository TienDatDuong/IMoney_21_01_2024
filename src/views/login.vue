<template>
  <div class="mt-8">
    <div class="container mx-a px-8">
      <form>
        <div class="row py-2">
          <label for="Email" class="flex flex-col">
           <span class="font-semibold">Email</span>
           <input type="text" placeholder="Email" autocomplete="username" id="Email" class="border-gray-100 rounded-lg mt-1 border px-4 py-3">
          </label>
        </div>
        <div class="row ">
          <label for="Password" class="flex flex-col">
           <span class="font-semibold">Password</span>
           <input type="password" placeholder="Password" id="Password" autocomplete="current-password" class="border-gray-100 rounded-lg mt-1 border px-4 py-3">
          </label>
        </div>
        <div class="w-full text-center p-4 mt-4 text-white bg-primary rounded-lg">
          <button class=" ">Sign In</button>
        </div>
      </form>
      <div class="text-center w-full mt-4">
        <span class="inline-block mr-4 font-semibold">I'm a new user.</span>
          <router-link :to="{name: 'Register',params:{}}">
           <span  class="font-bold text-primary"> Sign Up</span>
          </router-link>
      </div>
    </div>
  </div>
</template>
