import axios from 'axios'
import { Message } from 'element-ui'
let base = 'http://192.168.11.222/ego';
axios.defaults.timeout = 5000;
axios.defaults.baseURL = base;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

axios.interceptors.request.use(config => {
    // if (store.state.token) {
    //   config.headers.Authorization = `Bearer ${store.state.token}`;
    // }
    return config;
}, err => {
    Message.error({ message: '请求超时!' });
    return Promise.resolve(err);
})
axios.interceptors.response.use(data => {
    if (data.status && data.status == 200 && data.data.status == 'error') {
        Message.error({ message: data.data.msg });
        return;
    }
    return data;
}, err => {
    if (err.response.status == 504 || err.response.status == 404) {
        Message.error({ message: '服务器被吃了⊙﹏⊙∥' });
    } else if (err.response.status == 403) {
        window.localStorage.clear();
        // store.commit(types.LOGOUT);
        router.replace({
            path: '/login',
            query: { redirect: router.currentRoute.fullPath }
        })
        // Message.error({ message: '权限不足,请联系管理员!' });
    } else {
        Message.error({ message: '未知错误!' });
    }
    return Promise.resolve(err);
})



export const postRequest = (url, params) => {
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params,
        transformRequest: [function (data) {
            let ret = ''
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
}
export const uploadFileRequest = (url, params) => {
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}
export const putRequest = (url, params) => {
    return axios({
        method: 'put',
        url: `${base}${url}`,
        data: params,
        transformRequest: [function (data) {
            let ret = ''
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
}
export const deleteRequest = (url) => {
    return axios({
        method: 'delete',
        url: `${base}${url}`
    });
}
export const getRequest = (url) => {
    return axios({
        method: 'get',
        url: `${base}${url}`
    });
}
export const outGet = (url) => {
    return axios({
        method: 'get',
        url: `${url}`
    });
}