<template>
  <div class="login">
    <div class="back" @click="$router.back()"></div>
    <!--    登录头部-->
    <div class="login-header">
      <h2>硅谷外卖</h2>
    </div>
    <!--    选择登录-->
    <div class="login-choose">
      <a :class="{on: loginWay}" @click="loginWay=true">短信登录</a>
      <a :class="{on: !loginWay}" @click="loginWay=false">密码登录</a>
    </div>
    <!--    登录内容-->
    <div class="login-content">
      <form @submit.prevent="login()">
        <div :class="{on: loginWay}" v-show="loginWay">
          <section class="login-message">
            <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
            <button :disabled="!rightPhone" class="get_verification"
                    :class="{right_phone:rightPhone}" @click.prevent="getCode()">
              {{ computeTime > 0 ? `已发送(${computeTime}s)` : '获取验证码' }}
            </button>
          </section>
          <section class="login-verification">
            <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
          </section>
          <!--    温馨提示-->

          <div class="tishi">
            温馨提示：来注册硅谷外卖账号的手机号，登录时将自动注册，且代表已同意
            <div class="xieyi"><a class="on">《用户服务协议》</a></div>
          </div>
        </div>
        <div :class="{on: !loginWay}" v-show="!loginWay">
          <section class="login-message">
            <input type="text" maxlength="11" placeholder="手机号/邮箱/用户名" v-model="name">
          </section>
          <section class="login-verification">
            <input type="text" maxlength="8" placeholder="密码" v-if="showPwd" v-model="pwd" class="mima" >

            <input type="password" maxlength="8" placeholder="密码" v-else v-model="pwd" class="mima">
            <div class="switch-button" :class="showPwd?'on':'off'" @click="showPwd=!showPwd">
              <div class="switch_circle"
                   :class="{right:showPwd}"></div>
              <span class="switch_text">{{ showPwd?'abc':'...' }}</span>
            </div>
          </section>
          <section class="login-verification">
            <input type="text" maxlength="6" placeholder="验证码" v-model="captcha">
            <img class="get_verification" src="./yanzhengma.jpg" alt="" @click="getCaptcha()"/>
          </section>
        </div>
      </form>

    </div>
    <!--    登录按钮-->
    <div class="anniu" @click="showAlert(alertText)">
      <button>登录</button>
    </div>
    <div class="about">
      <a href="#">关于我们</a>
    </div>
    <AlertTip :alertText="alertText" v-if="alertShow" @closeTip="closeTip()"/>
  </div>
</template>

<script>
import AlertTip from '@/components/AlertTip/AlertTip'
import {reqSendCode,reqSmsLogin,reqPwdLogin} from '@/api'

export default {
  components:{
    AlertTip,
  },
  data () {
    return {
      loginWay: true,//true 代表短信登录，false代表密码登录
      phone: '',//手机号
      computeTime: 0, //计时的时间
      showPwd:false,//是否显示密码
      pwd:'',//密码
      code:'', //短信验证码
      name:'',//用户名
      captcha:'', //图形验证码
      alertText:'',//提示文本
      alertShow:false,//是否显示提示框

    }
  },
  methods: {
    async getCode () { //异步获取短信验证码
      //如果当前没有记时
      if (!this.computeTime) {
        //启动倒计时
        this.computeTime = 30
        this.intervalId = setInterval(() => {
          this.computeTime--
          if (this.computeTime <= 0) {
            //停止计时
            clearInterval(this.intervalId)
          }
        }, 1000)  //1000代表倒计时的速度，数字越大越慢
        //发送ajax请求，向指定手机号发送验证码短信
        const result = await reqSendCode(this.phone)
        if(result.code===1){
          //实现提示
          this.showAlert(result.msg)
          //停止倒计时
          if(this.computeTime){
            this.computeTime = 0
            clearInterval(this.intervalId)
            this.intervalId = undefined
          }
        }


      } else {
      }
    },
    showAlert(alertText){
      this.alertShow = true
      this.alertText = alertText
    },
    login(){  //前台表单验证 这时候要收集数据，就是input里面用v-model收集数据
      if(this.loginWay){
        //短信登录
        const {rightPhone,phone,code}=this
        if(!this.rightPhone){
          //如果手机号不正确
          this.showAlert = ('手机号不正确')
        }else if(!/^\d{6}$/.test(code)){
          //验证码必须是六位数字
          this.showAlert = ('验证码不正确')
        }
      }else{
        //密码登录
        const {name,pwd,captcha}=this
        if(!name){ //如果用户名不正确
          this.showAlert = ('用户名不正确')

        }else if(!pwd){//如果密码不正确
          this.showAlert = ('密码不正确')

        }else if(!captcha){//如果验证码不正确
          this.showAlert = ('验证码不正确')
        }
      }
    },
    closeTip(){ //关闭提示框
      this.alertShow = false
      this.alertText = ''
    },
    getCaptcha(event){
      console.log("获取新的验证码");
    },

  },
  computed: {
    rightPhone () {
      return /^1\d{10}$/.test(this.phone)//以1开头，后面有10个数字。
    }
  }
}
</script>

<style lang="scss">

.login {
  h2 {
    margin: 0;
  }

  button {
    text-decoration: none;
    border: none;
  }

  input {
    text-decoration: none;
    border: none;
    margin: 8px 30px;
    padding: 14px;
    width: 75%;
    border-radius: 5px;
    border: 1px solid #cccccc;
  }

  width: 100%;
  //background: plum;
  .back {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 15px;
    height: 15px;
    border-top: 2px solid #aba9a9;
    border-right: 2px solid #aba9a9;
    transform: rotate(-135deg);
  }

  .login-header {
    font-size: 28px;
    color: #02a774;
    text-align: center;
    margin-top: 50px;
  }

  .login-choose {
    display: flex;
    //margin-top: 20px;
    margin: 20px 90px 0px;

    a {
      flex: 1;
      text-align: center;
      font-size: 18px;
    }
  }

  .login-content {
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    .tishi {
      color: gray;
      margin: 10px 30px 0px;

      .xieyi {
        margin-left: 170px;
        margin-top: -20px;
      }
    }

    .login-message {

      .get_verification {
        background: #fff;
        height: 20px;
        margin-top: 20px;
        //color: gray;
        margin-left: -120px;

        &.right_phone {
          color: black;
        }
      }
    }

    .login-verification {
      .get_verification{
        width: 60px;
        margin-top: -200px;
        margin-left: 270px;
        margin-bottom: 30px;


      }
      .switch-button{
        position: absolute;
        margin-left: 290px;
        margin-top: -40px;
        width: 40px;
        height: 20px;
        border-radius: 30px;
        border: 1px #ccc solid;
        .switch_text{
          margin-top: -18px;
          margin-right: 16px;
          float: right;
          font-size: 12px;
          color: #ddd;
        }
        &.on{
          background: #02a774;
        }
        .switch_circle{
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 0;
          background: rgba(0,0,0,.3);
          box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
          //transition: transform .3s
          &.right {
            transform:translateX(22px);
          }
        }
      }
    }
    .mima{
      margin-top: 10px ;
      margin-bottom: 10px;
    }
  }


  .anniu {
    text-align: center;
    margin-top: 30px;

    button {
      background: #42b983;
      color: white;
      font-size: 18px;
      border: 1px solid #cccccc;
      border-radius: 5px;
      padding: 10px 138px;
      text-align: center;
    }
  }

  .about {
    margin-top: 20px;
    font-size: 15px;
    color: grey;
    text-align: center;
  }

}
</style>
