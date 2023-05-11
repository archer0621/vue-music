import Vue from 'vue'
import App from './App.vue'
// 导入路由
import router from './router'

import store from './store'

// 导入消息提示
import toast from '@/components/common/toast/index'

// 导入Element-UI
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'

import './assets/css/reset.css'

Vue.use(ElementUI)

Vue.use(toast)

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
