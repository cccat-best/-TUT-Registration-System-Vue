import axios from 'axios';

let baseURL = 'http://47.94.90.140:8000/';

const $http = axios.create({
    baseURL,
})

export const get = (url, params) => {
    params = params || {};
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        $http.get(url, params).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err)
        })
    })
}

export const post = (url, data) => {
    data = data || {};
    return new Promise((resolve, reject) => {
        $http.post(url, data).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err)
        })
    })
}
