/**
 * Created by superman on 17/2/16.
 * http配置
 */

import axios from 'axios'
//import store from './store/store'
//import * as types from './store/types'
import router from './router'

// axios 配置
//axios.defaults.timeout = 5000;
//axios.defaults.baseURL = 'https://api.github.com';

// http request 拦截器
axios.interceptors.request.use(
    config => {
        var token = localStorage.getItem('token');
        if (token) {
            config.headers.mytoken = `${token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        console.log(response);
        return response;
    },
    error => {
        console.log('error');
        console.log(error.response);
        if (error.response) {
            switch (error.response.status) {
                case 403:
                    // 403 清除token信息并跳转到登录页面
                    localStorage.removeItem('token');

                    //router.push({ path: '/' });

                    router.replace({
                        path: '/login',
                        query: { redirect: router.currentRoute.fullPath }
                    })
            }
        }
        // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
        return Promise.reject(error.response.data)
    });

export default axios;
