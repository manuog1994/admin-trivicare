import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6a07d051 = () => interopDefault(import('../pages/clients.vue' /* webpackChunkName: "pages/clients" */))
const _49212654 = () => interopDefault(import('../pages/coupons.vue' /* webpackChunkName: "pages/coupons" */))
const _0f21e69d = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _7b36e626 = () => interopDefault(import('../pages/invoices.vue' /* webpackChunkName: "pages/invoices" */))
const _2fd1d972 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _583d1653 = () => interopDefault(import('../pages/my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _6355852c = () => interopDefault(import('../pages/orders.vue' /* webpackChunkName: "pages/orders" */))
const _3706cc6b = () => interopDefault(import('../pages/products.vue' /* webpackChunkName: "pages/products" */))
const _0adb6e6f = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _195c3faa = () => interopDefault(import('../pages/settings.vue' /* webpackChunkName: "pages/settings" */))
const _ca4af21a = () => interopDefault(import('../pages/product/_slug.vue' /* webpackChunkName: "pages/product/_slug" */))
const _662a365b = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _6a07d051,
    name: "clients"
  }, {
    path: "/coupons",
    component: _49212654,
    name: "coupons"
  }, {
    path: "/dashboard",
    component: _0f21e69d,
    name: "dashboard"
  }, {
    path: "/invoices",
    component: _7b36e626,
    name: "invoices"
  }, {
    path: "/login",
    component: _2fd1d972,
    name: "login"
  }, {
    path: "/my-account",
    component: _583d1653,
    name: "my-account"
  }, {
    path: "/orders",
    component: _6355852c,
    name: "orders"
  }, {
    path: "/products",
    component: _3706cc6b,
    name: "products"
  }, {
    path: "/search",
    component: _0adb6e6f,
    name: "search"
  }, {
    path: "/settings",
    component: _195c3faa,
    name: "settings"
  }, {
    path: "/product/:slug?",
    component: _ca4af21a,
    name: "product-slug"
  }, {
    path: "/",
    component: _662a365b,
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
