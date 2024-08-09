import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'aos/dist/aos.css'
import AOS from 'aos'


const app = createApp(App)

app.use(createPinia())
app.use(router)

AOS.init({
    // Optional settings
    duration: 1000, // Animation duration in milliseconds
    easing: 'ease-in-out', // Animation easing function
});

app.mount('#app')
