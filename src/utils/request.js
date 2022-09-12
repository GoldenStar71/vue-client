import axios from 'axios'
// import {
//   Message,
//   MessageBox
// } from 'element-ui'
import store from '@/store'
import router from '@/router'
// import {
//   getToken
// } from '@/utils/auth'

axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 创建axios实例
const service = axios.create({
  baseURL: '', // api 的 base_url
  timeout: 30000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    // 判断是否存在token，如果存在的话，则每个http header都加上token
    // if (sessionStorage.getItem('token')) {
    //   config.headers.AccessToken = sessionStorage.getItem('token')
    // } else {
    //   config.headers.AccessToken = 'this is empty'
    // }
    return config
  },
  error => {
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => { 
    const res = response.data
    if(res.status != 0){
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return response
    }

    // if (res.status !== '1') {
    //   Message({
    //     message: res.message || '网络错误，请重试！',
    //     type: 'error',
    //     duration: 5 * 1000
    //   })
    //   if (res.status === '10001') {
    //     // 登陆失效
    //     console.log(router, router.history.current.path !== '/login')
    //     if (router.history.current.path !== '/login' && !store.getters.isShowReLogin) {
    //       store.dispatch('user/setIsShowReLogin', true)
    //       store.dispatch('user/resetToken').then(() => {
    //         // router.push({ path: '/login' })
    //         location.reload()
    //       })
    //       // to re-login
    //       // MessageBox.confirm('您已经登出，您可以取消停留在此页面，或再次登录', '确认注销', {
    //       //   confirmButtonText: '重新登录',
    //       //   cancelButtonText: '取消',
    //       //   type: 'warning'
    //       //   // callback: (action, instance){}
    //       // }).then(() => {
    //       //   store.dispatch('user/resetToken').then(() => {
    //       //     location.reload()
    //       //   })
    //       // })
    //     } else {
    //       // store.dispatch('user/resetToken').then(() => {
    //       //   location.reload()
    //       // })
    //     }
    //   }
    //   return Promise.reject(new Error(res.message || 'Error'))
    // } else {
    //   console.log(response.headers)
    //   if (response.headers.accesstoken) {
    //     // sessionStorage.setItem('token', response.headers.accesstoken)
    //     store.dispatch('user/setToken', response.headers.accesstoken)
    //   }
    //   return response.data
    // }
  },
  error => {
    console.log('err' + error) // for debug
    // Message({
    //   // message: error.message,
    //   message: '网络错误,请稍后重试!',
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)

export default service
