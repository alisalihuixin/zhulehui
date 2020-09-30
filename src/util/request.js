import axios from 'axios'
import { Indicator } from 'mint-ui'
var service = axios.create({
    baseURL: '',
    timeout: 1000
})
service.interceptors.request.use((config) => {
    Indicator.open()
    return config;
})
service.interceptors.response.use((res) => {
    Indicator.close()
    return res.data
})
export default service;