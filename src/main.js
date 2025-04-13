// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Config from './common/config.js';
Vue.prototype.Config = Config;

import Const  from './common/const.js'
Vue.prototype.Const = Const;

// api
import api from './common/api';
Vue.prototype.PadMstApi = api

// logger
import logger from './common/logger';
Vue.prototype.logger = logger;

Vue.config.productionTip = false;

Vue.use(ElementUI);

import GlobalComponents from './components/GlobalComponents.js';

Vue.use(GlobalComponents);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
