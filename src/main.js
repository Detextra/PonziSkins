import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

//createApp(App).mount('#app')


import Skin from './components/Skin.vue';
//createApp(Skin).mount("#skin");


import MySkins from './views/MySkins.vue';
createApp(MySkins).mount("#myskins");
