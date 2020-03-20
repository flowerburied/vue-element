import axios from 'axios'
// import { Message, MessageBox } from 'element-ui'
// import store from '../store'
// import { getToken } from '@/utils/auth'
import Vue from 'vue'
Vue.config.productionTip = true
let baseUrl = ''
if (process.env.NODE_ENV == 'development') {
    baseUrl = 'https://duoduo.feiwuhb.com';
} else if (process.env.NODE_ENV == 'test') {
    baseUrl = 'https://duoduo.feiwuhb.com';
} else if (process.env.NODE_ENV == 'production') {
    baseUrl = 'https://duoduo.feiwuhb.com';
}

// process.env.BASE_URL = baseUrl;
// 创建axios实例
const service = axios.create({
    baseURL: baseUrl, // api 的 base_url
    timeout: 5000
        // timeout: 100000
        // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
    config => {
        // if (store.getters.token) {
        //   config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
        // }
        let token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = token
        }
        return config
    },
    error => {
        // Do something with request error
        console.log(error) // for debug
        Promise.reject(error)
    }
)

/*
响应拦截器
服务器返回信息->[拦截的统一处理]->客户端js获取到的信息
*/
service.interceptors.response.use(response => {
    // console.log(response)
    return response.data
}, err => {
    let {
        response
    } = err;
    if (response) {
        console.log(response.status)
        switch (response.status) {
            case 401: //=>权限
                // 代码块
                break;
            case 403: //服务器已经理解请求,但是拒绝执行它(一般是Token过期)
                // 代码块
                break;
            case 404: //请求接口不存在
                // 代码块
                break;
            default:
                // 代码块
                break;
        }
    } else {
        if (!window.navigator.online) {
            //断网处理:可以跳转到网页页面	
            return;
        }
        return Promise.reject(err)
    }
})

export default service