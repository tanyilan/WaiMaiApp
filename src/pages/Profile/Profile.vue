<template>
  <div class="profile">
    <div class="main">
      <HeaderTop title="我 的"/>
      <router-link to="/login">
      <a class="denglu">
        <span>登录/注册</span>
        <span>暂无绑定手机号</span>
        <a class="jiantou"></a>
      </a>
      </router-link>
    </div>
    <ul class="jifen">
        <li>
          <a>
            <span class="jifen-icon">0.00</span>
            <div>元</div>
            <span>我的余额</span>
          </a>
        </li>
        <li>
          <a>
            <span class="jifen-icon">0</span>
            <div>个</div>
            <span>我的优惠</span>
          </a>
        </li>
        <li>
          <a>
            <span class="jifen-icon">0</span>
            <div>分</div>
            <span>我的积分</span>
          </a>
        </li>
      </ul>
    <ul class="choose">
      <li>
        <a>
          <img src="./images/订单2.png"/>
          <span>我的订单</span>
          <span class="jinru"></span>
        </a>
      </li>
      <li>
        <a>
          <img src="./images/积分.png"/>
          <span>积分商城</span>
          <span class="jinru1"></span>
        </a>
      </li>
      <li>
        <a>
          <img src="./images/会员卡.png"/>
          <span>外卖会员卡</span>
          <span class="jinru2"></span>

        </a>
      </li>
      <li>
        <a>
          <img src="./images/服务中心.png"/>
          <span>服务中心</span>
          <span class="jinru3"></span>

        </a>
      </li>
    </ul>

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
<style lang="scss" scoped>
.profile {
  width: 100%;
  height: 1000px;
  max-width: 540px;
  min-width: 280px;
  background: #fff;
  position: fixed;
}

.main {
  width: 100%;
  height: 120px;
  padding-top: 8px;
  margin-top: 60px;
  background: #42b983;
  font-size: 20px;
  text-align: center;
}
.denglu{
  display: flex;
  flex-direction: column;
  background: url("./images/登录.png") no-repeat 10px 0px;
  background-size: 60px;
  span:nth-child(1){
    font-size: 24px;
    margin-left: -100px;
    color: #ffffff;

  }
  span:nth-child(2){
    font-size: 16px;
    margin-left: -40px;
    background: url("./images/云信-手机.png") no-repeat 120px;
    background-size: 30px;
    color: #ffffff;
  }
  .jiantou{
    position:absolute;
    top:90px;
    right: 20px;
    width: 10px;
    height: 10px;
    border-top: 2px solid #f2f2f2;
    border-right: 2px solid #f2f2f2;
    transform: rotate(45deg);
  }

}
.jifen{
  display: flex;
  width: 100%;
  height: 100px;
  background: #fff;
  a{
    display: flex;
    flex-direction: column;
    align-items: center;
    span{
      flex: 1;
    }
  }
  li{
    flex: 1;
    border-right: 1px solid rgba(204,204,204,0.5);
    border-bottom:1px solid rgba(204,204,204,0.5);
  }
  li:nth-child(3){
    border-right: 0;
  }
  li:nth-child(1){
    div{
      position: absolute;
      margin-top: 26px;
      margin-left: 86px;
    }
    .jifen-icon{
      font-size: 38px;
      color: orange;
    }
  }
  li:nth-child(2){
    div{
      position: absolute;
      margin-top: 26px;
      margin-left: 34px;
    }
    .jifen-icon{
      font-size: 38px;
      color: #da5114;
    }
  }
  li:nth-child(3){
    div{
      position: absolute;
      margin-top: 26px;
      margin-left: 34px;
    }
    .jifen-icon{
      font-size: 38px;
      color: #25882f;
    }
  }
}
.choose{
  display: flex;
  flex-direction: column;
  width: 100%;
  height:300px;
  background:#fff;

  li{
    flex:1;
    font-size: 18px;
    color: black;
    border-bottom: 1px solid rgba(204,204,204,0.5);
    img{
      width: 22px;
      height: 22px;
      margin-top: 20px;
      margin-left: 20px;
      margin-right: 4px;
    }
    .jinru{
      position:absolute;
      top:310px;
      right: 20px;
      width: 10px;
      height: 10px;
      border-top: 2px solid #ccc;
      border-right: 2px solid #ccc;
      transform: rotate(45deg);
    }
    .jinru1{
      position:absolute;
      top:390px;
      right: 20px;
      width: 10px;
      height: 10px;
      border-top: 2px solid #ccc;
      border-right: 2px solid #ccc;
      transform: rotate(45deg);
    }
    .jinru2{
      position:absolute;
      top:460px;
      right: 20px;
      width: 10px;
      height: 10px;
      border-top: 2px solid #ccc;
      border-right: 2px solid #ccc;
      transform: rotate(45deg);
    }
    .jinru3{
      position:absolute;
      top:540px;
      right: 20px;
      width: 10px;
      height: 10px;
      border-top: 2px solid #ccc;
      border-right: 2px solid #ccc;
      transform: rotate(45deg);
    }
  }
}
</style>
