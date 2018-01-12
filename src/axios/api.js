import axios from 'axios'
// import store from '../components/store/store'
// import * as types from '../components/store/types'
import router from '../routes.js'
// axios 配置
// const baseUrl = '';
const baseUrl = "";
axios.defaults.timeout = 5000;
axios.defaults.baseURL = baseUrl;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截器
axios.interceptors.request.use(function (config) {
  if (store.state.token) {
    config.headers.Authorization = `Bearer ${store.state.token}`;
  }
  return config;
}, function (error) {
  return Promise.reject(error)
})
/// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 403:
          // 403 清除token信息并跳转到登录页面
          window.localStorage.clear();
          store.commit(types.LOGOUT);
          router.replace({
            path: '/login',
            query: { redirect: router.currentRoute.fullPath }
          })
      }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response.data)
  });

// 封装axios的get请求
export function toGet(url) {
  const newUrl = baseUrl + url
  return new Promise((resolve) => {
    axios.get(newUrl)
      .then(response => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
// 封装axios的post请求
export function fetch(url, params) {
  const newUrl = baseUrl + url
  return new Promise((resolve, reject) => {
    axios.post(newUrl, params)
      .then(response => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
};

// put
export function put(url, params) {
  const newUrl = baseUrl + url
  return new Promise((resolve, reject) => {
    axios.put(newUrl, params)
      .then(response => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
};

export function toDelete(url) {
  const newUrl = baseUrl + url
  return new Promise((resolve) => {
    axios.delete(newUrl)
      .then(response => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}


export default {
  axios,
  Get(url) {
    return toGet(url)
  },
  Post(url, params) {
    return fetch(url, params)
  },
  Put(url, params) {
    return put(url, params)
  },
  Delete(url, params) {
    return toDelete(url)
  },
}
