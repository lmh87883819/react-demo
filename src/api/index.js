import axios from 'axios'
import qs from 'querystring'

const config = {
    baseURL: 'https://uinames.com/api/',
    timeout: 3000,
    headers: {
        'Accept': 'application/json;charset=utf-8',
        'Content-Type': 'application/json;charset=utf-8',
    },
}

const instance = axios.create(config);

//请求拦截处理
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

//返回拦截处理
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

const joinUrl = (url="") => {
    return url = url.startsWith('http') ? url : `${config.baseURL}${url}`
}

export default class Http {
    static async get(url, params) {
        try {
            let query = await qs.stringify(params)
            let res = null;
            url = joinUrl(url)
            if (!params) {
                res = await axios.get(url)
            } else {
                res = await axios.get(url + '?' + query)
            }
            return res.data
        } catch (error) {
            return error
        }
    }
    static async post(url, params) {
        try {
            url = joinUrl(url)
            let res = await axios.post(url, params)
            return res.data
        } catch (error) {
            return error
        }
    }
}