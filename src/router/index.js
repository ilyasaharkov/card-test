import Vue from 'vue'
import VueRouter from 'vue-router'
import Product from '../views/Product.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Product',
    component: Product
  },
  {
    path: '/Trash',
    name: 'Trash',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Trash.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
