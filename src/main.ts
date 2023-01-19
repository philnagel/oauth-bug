import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { ArcGISIdentityManager } from '@esri/arcgis-rest-request'
import { router } from './router'

createApp(App).use(router).mount('#app')
