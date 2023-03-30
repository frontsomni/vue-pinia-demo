import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPlugins from './plugins'

const pinia = createPinia()

piniaPlugins.forEach(plugin => pinia.use(plugin))
createApp(App)
  .use(pinia)
  .mount('#app')
