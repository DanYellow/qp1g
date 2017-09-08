import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Main'
import Intro from '@/components/Intro'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'intro',
      component: Intro
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: Main
    }
  ]
})
