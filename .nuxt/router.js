import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _489d7284 = () => interopDefault(import('../pages/clients.vue' /* webpackChunkName: "pages/clients" */))
const _4d18e343 = () => interopDefault(import('../pages/coupons.vue' /* webpackChunkName: "pages/coupons" */))
const _4500ecd5 = () => interopDefault(import('../pages/guests.vue' /* webpackChunkName: "pages/guests" */))
const _f42c37c0 = () => interopDefault(import('../pages/invoices.vue' /* webpackChunkName: "pages/invoices" */))
const _6f5ff1c2 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _4fc96cc6 = () => interopDefault(import('../pages/my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _4ac5e5c2 = () => interopDefault(import('../pages/orders.vue' /* webpackChunkName: "pages/orders" */))
const _ba71bb34 = () => interopDefault(import('../pages/orders-history.vue' /* webpackChunkName: "pages/orders-history" */))
const _0ae7b8c4 = () => interopDefault(import('../pages/products.vue' /* webpackChunkName: "pages/products" */))
const _371a7351 = () => interopDefault(import('../pages/reviews.vue' /* webpackChunkName: "pages/reviews" */))
const _463cd246 = () => interopDefault(import('../pages/settings.vue' /* webpackChunkName: "pages/settings" */))
const _02af37f0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _082e56e4 = () => interopDefault(import('../pages/order-edit/_id.vue' /* webpackChunkName: "pages/order-edit/_id" */))
const _f6732824 = () => interopDefault(import('../pages/orders-view/_id.vue' /* webpackChunkName: "pages/orders-view/_id" */))
const _0f1ab7a0 = () => interopDefault(import('../pages/product/_slug.vue' /* webpackChunkName: "pages/product/_slug" */))

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
    component: _489d7284,
    name: "clients"
  }, {
    path: "/coupons",
    component: _4d18e343,
    name: "coupons"
  }, {
    path: "/guests",
    component: _4500ecd5,
    name: "guests"
  }, {
    path: "/invoices",
    component: _f42c37c0,
    name: "invoices"
  }, {
    path: "/login",
    component: _6f5ff1c2,
    name: "login"
  }, {
    path: "/my-account",
    component: _4fc96cc6,
    name: "my-account"
  }, {
    path: "/orders",
    component: _4ac5e5c2,
    name: "orders"
  }, {
    path: "/orders-history",
    component: _ba71bb34,
    name: "orders-history"
  }, {
    path: "/products",
    component: _0ae7b8c4,
    name: "products"
  }, {
    path: "/reviews",
    component: _371a7351,
    name: "reviews"
  }, {
    path: "/settings",
    component: _463cd246,
    name: "settings"
  }, {
    path: "/",
    component: _02af37f0,
    name: "index"
  }, {
    path: "/order-edit/:id?",
    component: _082e56e4,
    name: "order-edit-id"
  }, {
    path: "/orders-view/:id?",
    component: _f6732824,
    name: "orders-view-id"
  }, {
    path: "/product/:slug?",
    component: _0f1ab7a0,
    name: "product-slug"
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
