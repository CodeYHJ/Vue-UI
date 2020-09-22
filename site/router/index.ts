import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import LayoutExample from '../views/LayoutExample/LayoutExample.vue';

import Introduction from '../views/Introduction/Introduction.vue';

import GirdExample from '../views/GirdExample/GirdExample.vue';


import Color from '../views/Color/Color.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/vue/layout' },
  { path: '/vue/layout', name: 'LayoutExample', component: LayoutExample },
  { path: '/vue/introduction', name: 'Introduction', component: Introduction },
  { path: '/vue/color', name: 'Color', component: Color },
  { path: '/vue/gird', name: 'Gird', component: GirdExample },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
