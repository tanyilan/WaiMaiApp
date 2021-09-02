<template>
  <div class="alert_container">
    <section class="tip_text_container">
      <div class="tip_icon">
        <span class="iconfont">&#xe62b;</span>
        <span></span>
      </div>
      <p class="tip_text">{{alertText}}</p>
      <div class="confirm" @click="closeTip()">确认</div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AlertTip',
  props: {
    alertText: String,
  },
  methods: {
    closeTip () { //分发自定义事件，事件名closeTip
      this.$emit('closeTip')
    }
  }
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'iconfont';  /* Project id 2781508 */
  src: url('//at.alicdn.com/t/font_2781508_dz9hkse27s.woff2?t=1630462345578') format('woff2'),
  url('//at.alicdn.com/t/font_2781508_dz9hkse27s.woff?t=1630462345578') format('woff'),
  url('//at.alicdn.com/t/font_2781508_dz9hkse27s.ttf?t=1630462345578') format('truetype');
}


.alert_container {
  display: flex;
  justify-content: center;
  align-items: center;

  .tip_text_container {
    margin-top: -350px;

    .tip_icon {
      width: 200px;
      height: 100px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      border: 1px solid #ddd;
      background: #fff;
      text-align: center;
      line-height: 100px;

      .iconfont {
        font-family: "iconfont" !important;
        font-size: 60px;
        color: gold;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
      }
    }

    .tip_text {
      color: black;
    }

    .confirm {
      margin-top: -14px;
      background: #02a774;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      color: white;
      font-size: 18px;
      text-align: center;
      height: 40px;
      line-height: 40px;
    }
  }


}
</style>
