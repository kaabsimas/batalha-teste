import Buefy from 'buefy';
import Vue from 'vue';
import router from './router.js';
import App from './views/App';
import 'buefy/dist/buefy.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Storage from 'vue-web-storage'; 

Vue.use(VueAxios, axios)
Vue.use(Buefy);

Vue.use(Storage, {
  prefix: 'batalha_',// default `app_`
  drivers: ['session','local'], // default 'local'
});

const app = new Vue({
    el: '#app',
    components: { App },
    router
});
