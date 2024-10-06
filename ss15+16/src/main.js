// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

// Vuetify
// import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@/style.css'


const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App)

app.use(router)

app.mount('#app')

app.use(vuetify)
