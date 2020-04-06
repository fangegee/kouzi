import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from './request/http';
import VueLazyload from "vue-lazyload"
import preview from 'vue-photo-preview'//图片预览
import 'vue-photo-preview/dist/skin.css'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant)

// import { Swipe, SwipeItem } from 'vant'
// Vue.use(Swipe);
// Vue.use(SwipeItem);
Vue.prototype.$axios = axios

Vue.config.productionTip = false;

Vue.use(VueLazyload, {
  loading: require('./assets/img/placeholder.png')
})
var options = {
  tapToClose: true, //点击图片默认关闭
  closeEl: true,    //显示关闭按钮
  captionEl: true,
  fullscreenEl: false,//全屏
  zoomEl: false,    //放大镜
  shareEl: false,//分享
  counterEl: true,//页数
  history: true,//打开历史记录（点击返回可回原来页面）
}
Vue.use(preview, options)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
