<template>
  <body>
  <ul class="footer-guide">
    <li>
      <a href="#" title="外卖" :class="{on:'/msite'=== $route.path}" @click="goTo('/msite')">
        <span class="footer-icon"></span>
        <span>外卖</span>
      </a>
    </li>
    <li>
      <a href="#" title="搜索" :class="{on:'/search'=== $route.path}" @click="goTo('/search')">
        <span class="footer-icon"></span>
        <span>搜索</span>
      </a>
    </li>
    <li>
      <a href="#" title="订单" :class="{on:'/order'=== $route.path}" @click="goTo('/order')">
        <span class="footer-icon"></span>
        <span>订单</span>
      </a>
    </li>
    <li>
      <a href="#" title="我的" :class="{on:'/profile'=== $route.path}" @click="goTo('/profile')">
        <span class="footer-icon"></span>
        <span>我的</span>
      </a>
    </li>
  </ul>
  </body>
</template>
<script>
export default {
  methods: {
    goTo (path) {
      this.$router.replace(path)
    }
  }
}
</script>
<style lang="scss">
body {
  display: flex;
  max-width: 540px;
  min-width: 320px;
  margin: 0 auto;
  font: normal 14px/1.5 Tahoma, "Lucida Grande", Verdana, "Microsoft YaHei", STXihei, hei;
  color: #000;
  background: #f2f2f2;
  -webkit-tap-highlight-color: transparent;
}

a {
  text-decoration: none; //去掉下划线
}

div {
  box-sizing: border-box;
}

ul {
  list-style: none; //去掉列表的点点
  margin: 0;
  padding: 0;

}

.footer-guide {
  display: flex;
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  height: 62px;
  background: #fff;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

.on {
  color: #02a774;
  display: block;
}

.footer-guide {
  li {
    flex: 1;
  }
}

.footer-guide {
  span {
    font-size: 18px;
  }
}

.footer-guide {
  li {
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}

.footer-icon {
  margin-top: 3px;
  width: 30px;
  height: 30px;
  background: #cccccc;
}

li:nth-child(1) .footer-icon {
  background: url("./外卖.png") no-repeat;
  background-size: 30px;
}

li:nth-child(2) .footer-icon {
  background: url("./搜索.png") no-repeat;
  background-size: 30px;
}

li:nth-child(3) .footer-icon {
  background: url("./订单.png") no-repeat;
  background-size: 30px;
}

li:nth-child(4) .footer-icon {
  background: url("./我的.png") no-repeat;
  background-size: 30px;
}
</style>
