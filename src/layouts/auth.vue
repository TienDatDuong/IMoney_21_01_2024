<template>
  <div>
    <navigation-brand/>
    <slot/>
  </div>

</template>
<script>
import NavigationBrand from "../component/NavigationBrand.vue";
export default{
  components:{
    NavigationBrand
  }
};
</script>
