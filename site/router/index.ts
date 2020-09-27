import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import LayoutExample from '../views/LayoutExample/LayoutExample';

import Introduction from '../views/Introduction/Introduction';

import GirdExample from '../views/GirdExample/GirdExample';

import IconExample from '../views/IconExample/IconExample';

import Color from '../views/Color/Color';

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/vue/layout' },
  { path: '/vue/layout', name: 'LayoutExample', component: LayoutExample },
  { path: '/vue/introduction', name: 'Introduction', component: Introduction },
  { path: '/vue/color', name: 'Color', component: Color },
  { path: '/vue/gird', name: 'GirdExample', component: GirdExample },
  { path: '/vue/icon', name: 'IconExample', component: IconExample },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
