import axios from 'axios'

const http = axios.create({
    baseURL:'http://localhost:5000/web/api'
})

//请求拦截器
http.interceptors.request.use(config=>{
    return config
},err=>{
    return Promise.reject(err)
})

//响应拦截器
http.interceptors.response.use(res=>{
    return res
},err=>{
    return Promise.reject(err)
})

export default http