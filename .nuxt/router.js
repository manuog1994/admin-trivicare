import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _79ce9320 = () => interopDefault(import('../pages/clients.vue' /* webpackChunkName: "pages/clients" */))
const _348052f5 = () => interopDefault(import('../pages/coupons.vue' /* webpackChunkName: "pages/coupons" */))
const _3bf3bee3 = () => interopDefault(import('../pages/guests.vue' /* webpackChunkName: "pages/guests" */))
const _e91f2aa4 = () => interopDefault(import('../pages/invoices.vue' /* webpackChunkName: "pages/invoices" */))
const _01d3bb51 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _0dc887d4 = () => interopDefault(import('../pages/my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _5ce041a6 = () => interopDefault(import('../pages/orders.vue' /* webpackChunkName: "pages/orders" */))
const _72f3f318 = () => interopDefault(import('../pages/orders-history.vue' /* webpackChunkName: "pages/orders-history" */))
const _0012aa2c = () => interopDefault(import('../pages/products.vue' /* webpackChunkName: "pages/products" */))
const _1e81e303 = () => interopDefault(import('../pages/reviews.vue' /* webpackChunkName: "pages/reviews" */))
const _7915c870 = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _3b2fc52a = () => interopDefault(import('../pages/settings.vue' /* webpackChunkName: "pages/settings" */))
const _4e37ecc0 = () => interopDefault(import('../pages/orders-view/_id.vue' /* webpackChunkName: "pages/orders-view/_id" */))
const _290819d2 = () => interopDefault(import('../pages/product/_slug.vue' /* webpackChunkName: "pages/product/_slug" */))
const _382c183a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/clients",
    component: _79ce9320,
    name: "clients"
  }, {
    path: "/coupons",
    component: _348052f5,
    name: "coupons"
  }, {
    path: "/guests",
    component: _3bf3bee3,
    name: "guests"
  }, {
    path: "/invoices",
    component: _e91f2aa4,
    name: "invoices"
  }, {
    path: "/login",
    component: _01d3bb51,
    name: "login"
  }, {
    path: "/my-account",
    component: _0dc887d4,
    name: "my-account"
  }, {
    path: "/orders",
    component: _5ce041a6,
    name: "orders"
  }, {
    path: "/orders-history",
    component: _72f3f318,
    name: "orders-history"
  }, {
    path: "/products",
    component: _0012aa2c,
    name: "products"
  }, {
    path: "/reviews",
    component: _1e81e303,
    name: "reviews"
  }, {
    path: "/search",
    component: _7915c870,
    name: "search"
  }, {
    path: "/settings",
    component: _3b2fc52a,
    name: "settings"
  }, {
    path: "/orders-view/:id?",
    component: _4e37ecc0,
    name: "orders-view-id"
  }, {
    path: "/product/:slug?",
    component: _290819d2,
    name: "product-slug"
  }, {
    path: "/",
    component: _382c183a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
