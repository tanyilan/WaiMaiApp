// 入口JS
import Vue from 'vue'
import App from './App.vue'
import router from './router' //引入路由器
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
new Vue({
  el:"#app",
  render:h => h(App),
  //配置路由器
  router
})
