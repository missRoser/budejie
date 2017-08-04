import Vue from 'vue';
import axios from 'axios';
import plyr from 'plyr';
import VueRouter from 'vue-router';
import App from './App.vue';
import alls from './components/alls/alls.vue';
import imgs from './components/imgs/imgs.vue';
import txts from './components/txts/txts.vue';

Vue.use(VueRouter);

Vue.prototype.axios = axios;
Vue.prototype.plyr = plyr;

//let app = Vue.extend(App).$mount('#app');
const routes = [
	{
		path: '/alls',
		component: alls
	},
	{
		path: '/imgs',
		component: imgs
	},
	{
		path: '/txts',
		component: txts
	}
]

let router = new VueRouter({
	routes
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
