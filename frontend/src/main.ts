import { createApp } from 'vue'
import './style.css'
import router from './router';
import App from './App.vue'

createApp(App).use(router).mount('#app').$nextTick(() => {
  window.ipcRenderer.on('main-process-message', (_event, message) => {
    console.log(message)
  })
})
