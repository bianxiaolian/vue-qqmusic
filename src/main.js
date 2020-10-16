import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// 引入日期格式化插件
// import dayjs from 'dayjs'
Vue.prototype.axios = axios
Vue.config.productionTip = false

// 定义全局的时间格式过滤器
// dayjs().format()
// Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:MM:SS') {
//   return dayjs(dataStr).format(pattern)
// })
// // 获取年月日
// Vue.filter('ymdFormat', function (dataStr, pattern = 'YYYY年MM月DD日') {
//   return dayjs(dataStr).format(pattern)
// })
// // 获取时分
// Vue.filter('hmFormat', function (dataStr, pattern = 'HH:MM') {
//   return dayjs(dataStr).format(pattern)
// })
// // 获取星期几
// Vue.filter('weekFormat', function (dataStr, pattern = 'dddd') {
//   return dayjs(dataStr).format(pattern)
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
