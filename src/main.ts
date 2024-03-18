import './assets/main.css'
import "../vue-mask.d.ts"
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vueMask from "@devindex/vue-mask"
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vueMask)

app.mount('#app')
