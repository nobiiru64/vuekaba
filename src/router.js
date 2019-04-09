import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

const Board = {
  template: "<div>Доска  {{ $route.params.thread }}</div>"
};

const ChooseBoard = id => () => import('./views/BoardChooser').then(m => m.default(id));
const ChooseThread = id => () => import('./views/ThreadChooser').then(m => m.default(id));

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/:board(\\w+)', component: ChooseBoard()
    },
      {
          path: '/:board(\\w+)/:thread(\\d+)', component: ChooseThread()
      },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
