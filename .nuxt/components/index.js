export { default as Auth } from '../../components/Auth.vue'
export { default as HeaderWithTopbar } from '../../components/HeaderWithTopbar.vue'
export { default as Login } from '../../components/Login.vue'
export { default as MobileBar } from '../../components/MobileBar.vue'
export { default as MyAccountContainer } from '../../components/MyAccountContainer.vue'
export { default as Navigation } from '../../components/Navigation.vue'
export { default as OffCanvasMobileMenu } from '../../components/OffCanvasMobileMenu.vue'
export { default as ProductDetailsDescriptionReview } from '../../components/ProductDetailsDescriptionReview.vue'
export { default as Register } from '../../components/Register.vue'
export { default as ResponsiveMobileMenu } from '../../components/ResponsiveMobileMenu.vue'
export { default as Search } from '../../components/Search.vue'
export { default as TheFooter } from '../../components/TheFooter.vue'
export { default as TheHeader } from '../../components/TheHeader.vue'
export { default as LoadersBigLoader } from '../../components/loaders/BigLoader.vue'
export { default as LoadersSmallLoading } from '../../components/loaders/SmallLoading.vue'
export { default as HeadersNavTop } from '../../components/headers/NavTop.vue'
export { default as HeadersSearch } from '../../components/headers/Search.vue'
export { default as HeadersSideNav } from '../../components/headers/SideNav.vue'
export { default as DashboardAll } from '../../components/dashboard/All.vue'
export { default as DashboardCoupons } from '../../components/dashboard/Coupons.vue'
export { default as DashboardCreate } from '../../components/dashboard/Create.vue'
export { default as DashboardEdit } from '../../components/dashboard/Edit.vue'
export { default as DashboardErrorModal } from '../../components/dashboard/ErrorModal.vue'
export { default as DashboardFormReview } from '../../components/dashboard/FormReview.vue'
export { default as DashboardNav } from '../../components/dashboard/Nav.vue'
export { default as DashboardNewInvoice } from '../../components/dashboard/NewInvoice.vue'
export { default as DashboardNewsletter } from '../../components/dashboard/Newsletter.vue'
export { default as DashboardSuccessInvoiceModal } from '../../components/dashboard/SuccessInvoiceModal.vue'
export { default as ProfileNewGuest } from '../../components/profile/NewGuest.vue'
export { default as ProfileNewProfile } from '../../components/profile/NewProfile.vue'
export { default as ProductDetailsWrapper } from '../../components/product/ProductDetailsWrapper.vue'
export { default as ProductGridItem } from '../../components/product/ProductGridItem.vue'
export { default as ProductGridItemTwo } from '../../components/product/ProductGridItemTwo.vue'
export { default as ProductGridStyleThree } from '../../components/product/ProductGridStyleThree.vue'
export { default as ProductWrapperCosmetics } from '../../components/product/ProductWrapperCosmetics.vue'
export { default as OrdersModalTrack } from '../../components/orders/ModalTrack.vue'
export { default as OrdersNote } from '../../components/orders/Note.vue'
export { default as Orders } from '../../components/orders/Orders.vue'
export { default as OrdersHistory } from '../../components/orders/OrdersHistory.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
