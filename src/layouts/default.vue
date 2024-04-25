<template>
  <h1 v-for="item in dataFireBase">
    <span>{{ item?.note }}</span>
  </h1>
  <h1>{{ dataFireBase }}</h1>
  <slot/>
</template>
<script>
import {db} from '../config/firebase'
import { collection, getDocs } from 'firebase/firestore/lite';
import {ref, onMounted} from 'vue';
export default{
  setup(){
    const dataFireBase = ref(null);

    onMounted(async () => {
      const citiesCol = collection(db, 'transactions');
      const citySnapshot = await getDocs(citiesCol);
      const cityList = citySnapshot.docs.map(doc => doc.data());
      dataFireBase.value = cityList;
    });

    return { dataFireBase };
  }


}
</script>
