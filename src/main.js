import Vue from 'vue';
import ViewDesign from 'view-design';
import 'view-design/dist/styles/iview.css';

import './assets/common.css';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(ViewDesign);

new Vue({
  render: (h) => h(App)
}).$mount('#app');

