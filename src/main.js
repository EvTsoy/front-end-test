import { createApp } from 'vue'

import App from './App.vue'

// router
import router from './router'

// vuex
import store from './store'

// Scss
import './assets/styles/index.scss'

const app = createApp(App)

app.use(store)

app.use(router)

app.mount('#app')
