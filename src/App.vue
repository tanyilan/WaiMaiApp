<template>
  <div class="app">
<!--    <router-link :to="{name:'order'}"></router-link>-->
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>
<script>
import FooterGuide from '@/components/FooterGuide/FooterGuide'
  export default {
  components:{
    FooterGuide
  }
  }
</script>
<style lang="scss">
.app{
  width: 100%;
  //height: 100%;
  background: #f5f5f5;
  position: relative;
}
</style>
