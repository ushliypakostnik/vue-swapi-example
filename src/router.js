import Vue from 'vue';
import Router from 'vue-router';

import Starships from '@/components/Router/Starships';
import Starship from '@/components/Router/Starship';
import NotFound from '@/components/Router/NotFound';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: { name: 'Starships' }
    },
    {
      path: '/starships',
      name: 'Starships',
      component: Starships,
    },
    {
      path: '/starship',
      name: 'Starship',
      component: Starship,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    }
  ],
});
