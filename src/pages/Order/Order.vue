<template>
  <div class="order-list">
    <HeaderTop title="订单列表"/>
    <img src="./images/暂无订单.png"/>
    <div class="wenzi">登录后查看外卖订单</div>
    <div class="order-list-denglu">
      <router-link to="/login">
      <button>立即登录</button>
      </router-link>
    </div>

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
.order-list{
  button{
    border-style: none;
  }
  width: 100%;
  height: 1000px;
  margin-top: 60px;
  background:#ffffff;
  img{
    width: 100%;
    margin-top: 60px;
  }
  .wenzi{
    text-align: center;
    margin-top: -30px;
    font-size: 18px;
    color: gray;
  }
  .order-list-denglu{
    margin-top: 6px;
    text-align: center;
    button{
      color: #ffffff;
      background: #02a774;
      border-radius: 4px;
      padding: 7px 12px;
    }
  }
}
</style>
