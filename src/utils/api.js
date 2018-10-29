/**
 *
 * https接口放在这里
 *
 */
import qs from 'qs';
import axios from "axios";
import CONFIG from "../config";
import router from '../router/index'

axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";


// 请求拦截
axios.interceptors.request.use(config => {
  console.log('config:',config);
  return config
}, error => {
  return Promise.reject(error)
})


/*响应拦截*/
axios.interceptors.response.use(
  (response)=> {
    return response.data;
  },(error)=> {
    // do something with response error
    return Promise.reject(error);
  }
);

export default {
  install: function(Vue, options) {
    Vue.prototype.api = {
      jsonplaceholder(params){
      return axios({
        method:'get',
        url:'https://jsonplaceholder.typicode.com/posts',
        params:params
      })
    },

    };
  }
};
