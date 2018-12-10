import Vue from 'vue'
import Router from 'vue-router'
import goods from 'components/goods/goods'
import ratings from 'components/ratings/ratings'
import seller from 'components/seller/seller'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/seller',
      component: seller
    }, {
      path: '/ratings',
      component: ratings
    }, {
      path: '/goods',
      component: goods
    }, {
      path: '/',
      redirect: '/seller'
    }
  ]
})
