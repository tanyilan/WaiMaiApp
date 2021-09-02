<template>
 <div class="search-input">
   <HeaderTop title="搜 索"/>
   <slot></slot>
   <input type="text"  placeholder="请输入商家或美食名称">

   <button>提交</button>
 </div>
</template>
<script>
import HeaderTop from '@/components/HeaderTop/HeaderTop'
  export default {
  components:{
    HeaderTop
  }
  }
</script>
<style lang="scss">
.search-input{
  margin-top: 60px;
  background: #fff;
  height: 2000px;
  input{
    border-style: none;
    border-radius: 2px;
    padding: 10px 98px 10px 10px;
    margin: 10px 10px;
    background:#eee;

  }
  button{
    border-style: none;
    background: #42b983;
    padding: 8px 14px;
    border-radius: 2px;
    margin: 10px 6px;
    color: #ffffff;
  }
}
</style>
