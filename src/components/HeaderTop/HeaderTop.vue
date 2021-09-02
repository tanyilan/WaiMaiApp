<template>
  <div class="header">
    <slot name="left"></slot>
    <span>{{ title }}</span>
    <slot name="right"></slot>
  </div>
</template>
<script>
export default {
  props:{
    title:String
  }
}
</script>
<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 540px;
  text-align: center;
  line-height: 60px;
  min-width: 320px;
  height: 60px;
  font-size: 20px;
  color: #ffffff;
  background: #42b983;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
</style>
