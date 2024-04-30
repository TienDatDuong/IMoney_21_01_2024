<template>
  <!-- <h1 v-for="item in dataFireBase">
    <span>{{ item?.note }}</span>
  </h1> -->
  <h1>layout default</h1>
  <slot/>
</template>
<script>
import { collection, getDocs } from 'firebase/firestore/lite';
import {ref, onMounted} from 'vue';
export default{
  setup(){
    return {  };
  }


}
</script>
