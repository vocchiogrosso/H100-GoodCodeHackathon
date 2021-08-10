import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//ESRI/ARCGIS
import config from '@arcgis/core/config';
config.assetsPath = './assets';
config.apiKey = "AAPK8c99021561ac48deb97f52810ae5ca00AmpY8yB-FodHfWAm9SREt7-qB6mqV134qjBsSsY1I2GegzDBy51cx-5qzR0Hljjc"; 

createApp(App).use(store).use(router).mount('#app')
