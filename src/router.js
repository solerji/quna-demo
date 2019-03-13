import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import City from './views/city/City.vue'
import Detail from './views/detail/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
