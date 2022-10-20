import { createApp } from 'vue'

import './assets/main.css'
import router from './router'
//createApp(App).mount('#app')


import Skin from './components/Skin.vue';
//createApp(Skin).mount("#skin");


import MySkins from './views/MySkins.vue';
createApp(MySkins).use(router).mount("#myskins");
