import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Cookies from 'js-cookie'



const axiosInstance = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1/',
    timeout: 180000, // 3 menit
    headers: {
        Authorization: 'Bearer',
        'Content-Type': 'application/json',
        }
})

if(Cookies.getJSON('userdata') !== undefined){    
    let auth = Cookies.getJSON('userdata')
    store.commit('SET_LOGIN', auth)
  axiosInstance.interceptors.request.use(
    (config) => {
        
        config.headers['Authorization'] = `Bearer ${auth.access_token}`;
        
     
      return config;
    },
    (error) => Promise.reject(error)
  );
}
const app = createApp(App)
app.config.globalProperties.$axios = { ...axiosInstance }
app.use(store)
app.use(router)
app.mount('#app')