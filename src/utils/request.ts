/*
 * @Author: LifeWatcher
 * @Date: 2022-04-29 09:56:48
 * @LastEditors: LifeWatcher
 * @LastEditTime: 2022-12-06 17:07:34
 * @FilePath: \vite-vue-demo\src\utils\request.ts
 */
import axios from "axios";
import { resolveComponent } from "vue";

let baseUrl = import.meta.env.VITE_APP_BASE_URL;
console.log(baseUrl);

const request = axios.create({
  baseURL: baseUrl,
  timeout: 6000,
  headers: {},
});
request.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error) {
      console.log(error);
    }
  }
);
export { request };
