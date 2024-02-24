// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Config from './common/config.js';
Vue.prototype.Config = Config;

// api
import api from './common/api';
Vue.prototype.PadMstApi = api

// logger
import logger from './common/logger';
Vue.prototype.logger = logger;

Vue.config.productionTip = false;

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

import CompIconAwaken          from './components/monster/IconAwaken.vue';
import SearchAttr              from './components/monster/SearchAttr.vue';
import CompSearchAwakenSkill   from './components/monster/SearchAwakenSkill.vue';
import CompSearchCollabo       from './components/monster/SearchCollabo.vue';
import CompSearchRare          from './components/monster/SearchRare.vue';
import CompSearchType          from './components/monster/SearchType.vue';

Vue.component('CompIconAwaken', CompIconAwaken);

Vue.component('CompSearchAttr', SearchAttr);
Vue.component('CompSearchAwakenSkill', CompSearchAwakenSkill);
Vue.component('CompSearchCollabo', CompSearchCollabo);
Vue.component('CompSearchRare', CompSearchRare);
Vue.component('CompSearchType', CompSearchType);
