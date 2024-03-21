<script lang="ts">
import { computed } from 'vue';
import {useRoute} from 'vue-router'
import { PUBLIC_LAYOUT } from './constants';

  export default {
    setup(){
      const router = useRoute();
      console.log("🚀 ~ setup ~ router:", router)

      return {
        layout: computed(() => router.meta.layout || PUBLIC_LAYOUT )
      }
    }
  }
</script>

<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>
