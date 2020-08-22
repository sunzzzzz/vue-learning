import axios from 'axios';
const BASE_API = "http://localhost:3000"
const service = axios.create({
    /* baseURL: process.env.BASE_API, // api 的 base_url */
    baseURL:BASE_API,
    timeout: 600000 // request timeout
})


// request interceptor
service.interceptors.request.use(
    config => {
      config.headers['Content-Type'] = 'application/json'
      return config
    },
    error => {
      // Do something with request error
      console.log('error : ' + error) // for debug
      Promise.reject(error)
    }
  )


export default service;