import axios from 'axios'

export function request(config) {
    const instance1 = axios.create({
        baseURL: '/api',
        timeout: 30000,
    })
    //请求拦截和响应拦截
    instance1.interceptors.request.use(config => {
        return config;
    }, err => {
    })
    instance1.interceptors.response.use(res => {
        return res.data;
    },err => {
        console.log(err);
    })
    return instance1(config);
}