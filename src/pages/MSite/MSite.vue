<template>
  <div class="waimai">
    <!--  头部-->
    <HeaderTop title="昌平区北七家富..."></HeaderTop>
    <a href="#" class="sousuo" slot="left"></a>
    <router-link to="/login" class="denglu-1" slot="right">
      <a href="#" class="denglu-right">登录|注册</a>
    </router-link>
    <!--  首页导航-->
    <div class="nav">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <ul>
                <li class="nav-shiwu">
                  <a href="#">
                    <span class="nav-icon"></span>
                    <span>面食水饺</span>
                  </a>
                </li>
                <li class="nav-shiwu">
                  <a href="#">
                    <span class="nav-icon"></span>
                    <span>汉堡快餐</span>
                  </a>
                </li>
                <li class="nav-shiwu">
                  <a href="#">
                    <span class="nav-icon"></span>
                    <span>咖啡</span>
                  </a>
                </li>
                <li class="nav-shiwu">
                  <a href="#">
                    <span class="nav-icon"></span>
                    <span>披萨</span>
                  </a>
                </li>
                <li class="nav-shiwu">
                  <a href="#">
                    <span class="nav-icon"></span>
                    <span>西餐</span>
                  </a>
                </li>
                <li class="nav-shiwu">
                  <a href="#">
                    <span class="nav-icon"></span>
                    <span>牛奶酸奶</span>
                  </a>
                </li>
                <li class="nav-shiwu">
                  <a href="#">
                    <span class="nav-icon"></span>
                    <span>鱼肉蟹虾</span>
                  </a>
                </li>
                <li class="nav-shiwu">
                  <a href="#">
                    <span class="nav-icon"></span>
                    <span>酒水饮料</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="swiper-slide">
              <ul>
                <li class="nav-shiwu">
                  <a href="#">
                    <span class="nav-icon-two"></span>
                    <span>葡 萄</span>
                  </a>
                </li>
                <li class="nav-shiwu">
                  <a href="#">
                    <span class="nav-icon-two"></span>
                    <span>火龙果</span>
                  </a>
                </li>
                <li class="nav-shiwu">
                  <a href="#">
                    <span class="nav-icon-two"></span>
                    <span>水蜜桃</span>
                  </a>
                </li>
                <li class="nav-shiwu">
                  <a href="#">
                    <span class="nav-icon-two"></span>
                    <span>包 菜</span>
                  </a>
                </li>
                <li class="nav-shiwu">
                  <a href="#">
                    <span class="nav-icon-two"></span>
                    <span>甜 点</span>
                  </a>
                </li>
                <li class="nav-shiwu">
                  <a href="#">
                    <span class="nav-icon-two"></span>
                    <span>香 蕉</span>
                  </a>
                </li>
                <li class="nav-shiwu">
                  <a href="#">
                    <span class="nav-icon-two"></span>
                    <span>牛 排</span>
                  </a>
                </li>
                <li class="nav-shiwu">
                  <a href="#">
                    <span class="nav-icon-two"></span>
                    <span>灯笼柿</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination" slot="pagination"></div>
        </div>
    </div>
    <!--  附近商家-->
    <ShopList/>
  </div>

</template>
<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css'
import HeaderTop from '@/components/HeaderTop/HeaderTop'
import ShopList from '@/components/ShopList/ShopList'
export default {
  components:{
    HeaderTop,
    ShopList
  },
  mounted () {
    new Swiper('.swiper-container', {
      // direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        // clickable:true
      },
    })
  },
}
</script>
<style lang="scss">
.waimai {
  a{
    text-decoration: none;
  }
  display: flex;
  width: 100%;
  //height: 2000px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.sousuo::before {
  content: "";
  display: block;
  width: 60px;
  height: 60px;
  background: url("./images/搜索.png") no-repeat 20px 20px;
  background-size: 26px;
}
.sousuo{
    z-index: 10;
}
.denglu-1{
  z-index: 11;
  margin-top: 20px;
  margin-left: 230px;
  font-size: 16px;
}
.denglu-right{
  color: #ffffff;
}
//导航
.nav {
  display: flex;
  flex-direction: row;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 200px;
  margin: 60px 0;
  max-width: 540px;
  min-width: 320px;
  background: #fff;
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    li {
      flex: 20%;
      margin: 3px;
      width: 90px;
      height: 90px;
      //background: yellow;
    }
  }
  a {
    display: flex;
    flex-direction: column;
    align-items: center;

  }
  .nav-icon {
    width: 60px;
    height: 60px;
    margin-top: 10px;
    background: #42b983;

  }
  .nav-icon-two {
    width: 60px;
    height: 60px;
    margin-top: 10px;
    background: #42b983;

  }
  li:nth-child(1) .nav-icon {
    background: url("./images/食物,面条 (1).png") no-repeat 0px -10px;
    background-size: 60px;
  }

  li:nth-child(2) .nav-icon {
    background: url("./images/食物&器皿－汉堡.png") no-repeat 0px -5px;
    background-size: 60px;
  }

  li:nth-child(3) .nav-icon {
    background: url("./images/食物&器皿－热饮.png") no-repeat 0px -5px;
    background-size: 60px;
  }

  li:nth-child(4) .nav-icon {
    background: url("./images/食物&器皿－披萨.png") no-repeat 0px -5px;
    background-size: 60px;
  }

  li:nth-child(5) .nav-icon {
    background: url("./images/食物&器皿－西餐.png") no-repeat 0px -5px;
    background-size: 60px;
  }

  li:nth-child(6) .nav-icon {
    background: url("./images/食物&器皿－牛奶.png") no-repeat 0px -5px;
    background-size: 60px;
  }

  li:nth-child(7) .nav-icon {
    background: url("./images/食物&器皿－鱼.png") no-repeat 0px -5px;
    background-size: 60px;
  }

  li:nth-child(8) .nav-icon {
    background: url("./images/食物&器皿－酒.png") no-repeat 0px -5px;
    background-size: 60px;
  }

  li:nth-child(1) .nav-icon-two {
    background: url("./images/葡萄.png") no-repeat 0px 0px;
    background-size: 60px;
  }
  li:nth-child(2) .nav-icon-two {
    background: url("./images/火龙果.png") no-repeat 0px -5px;
    background-size: 60px;
  }
  li:nth-child(3) .nav-icon-two {
    background: url("./images/桃子-01.png") no-repeat 0px -5px;
    background-size: 60px;
  }
  li:nth-child(4) .nav-icon-two {
    background: url("./images/食物和餐厅图标库.png") no-repeat 0px 2px;
    background-size: 60px;
  }
  li:nth-child(5) .nav-icon-two {
    background: url("./images/食物 (1).png") no-repeat 0px -5px;
    background-size: 60px;
  }
  li:nth-child(6) .nav-icon-two {
    background: url("./images/香蕉.png") no-repeat 0px -5px;
    background-size: 60px;
  }
  li:nth-child(7) .nav-icon-two {
    background: url("./images/牛排.png") no-repeat 0px -5px;
    background-size: 60px;
  }
  li:nth-child(8) .nav-icon-two {
    background: url("./images/柿子 水果 甜点 苹果.png") no-repeat 0px 8px;
    background-size: 60px;
  }
}

</style>
