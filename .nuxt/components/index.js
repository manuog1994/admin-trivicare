export { default as Auth } from '../../components/Auth.vue'
export { default as HeaderWithTopbar } from '../../components/HeaderWithTopbar.vue'
export { default as Login } from '../../components/Login.vue'
export { default as MobileBar } from '../../components/MobileBar.vue'
export { default as MyAccountContainer } from '../../components/MyAccountContainer.vue'
export { default as NavBottom } from '../../components/NavBottom.vue'
export { default as Navigation } from '../../components/Navigation.vue'
export { default as OffCanvasMobileMenu } from '../../components/OffCanvasMobileMenu.vue'
export { default as ProductDetailsDescriptionReview } from '../../components/ProductDetailsDescriptionReview.vue'
export { default as Register } from '../../components/Register.vue'
export { default as ResponsiveMobileMenu } from '../../components/ResponsiveMobileMenu.vue'
export { default as Search } from '../../components/Search.vue'
export { default as TheFooter } from '../../components/TheFooter.vue'
export { default as TheHeader } from '../../components/TheHeader.vue'
export { default as ClientsGuests } from '../../components/clients/Guests.vue'
export { default as ClientsRegisteds } from '../../components/clients/Registeds.vue'
export { default as CouponsTable } from '../../components/coupons/CouponsTable.vue'
export { default as CouponsCreateCoupons } from '../../components/coupons/CreateCoupons.vue'
export { default as DashboardAnalyticsGoogle } from '../../components/dashboard/AnalyticsGoogle.vue'
export { default as DashboardDonutsProducts } from '../../components/dashboard/DonutsProducts.vue'
export { default as DashboardGraphicMonths } from '../../components/dashboard/GraphicMonths.vue'
export { default as HeadersNavTop } from '../../components/headers/NavTop.vue'
export { default as HeadersResults } from '../../components/headers/Results.vue'
export { default as HeadersSearch } from '../../components/headers/Search.vue'
export { default as HeadersSideNav } from '../../components/headers/SideNav.vue'
export { default as InvoicesErrorModal } from '../../components/invoices/ErrorModal.vue'
export { default as InvoicesInvoiceViewer } from '../../components/invoices/InvoiceViewer.vue'
export { default as InvoicesTable } from '../../components/invoices/InvoicesTable.vue'
export { default as InvoicesNewInvoice } from '../../components/invoices/NewInvoice.vue'
export { default as InvoicesSuccessInvoiceModal } from '../../components/invoices/SuccessInvoiceModal.vue'
export { default as LoadersBigLoader } from '../../components/loaders/BigLoader.vue'
export { default as LoadersSmallLoading } from '../../components/loaders/SmallLoading.vue'
export { default as OrdersEditOrder } from '../../components/orders/EditOrder.vue'
export { default as OrdersModalTrack } from '../../components/orders/ModalTrack.vue'
export { default as OrdersNote } from '../../components/orders/Note.vue'
export { default as Orders } from '../../components/orders/Orders.vue'
export { default as OrdersCom } from '../../components/orders/OrdersCom.vue'
export { default as OrdersHistory } from '../../components/orders/OrdersHistory.vue'
export { default as ProductCreateProduct } from '../../components/product/CreateProduct.vue'
export { default as ProductEditProduct } from '../../components/product/EditProduct.vue'
export { default as ProductDetailsWrapper } from '../../components/product/ProductDetailsWrapper.vue'
export { default as ProductGridItem } from '../../components/product/ProductGridItem.vue'
export { default as ProductGridItemTwo } from '../../components/product/ProductGridItemTwo.vue'
export { default as ProductGridStyleThree } from '../../components/product/ProductGridStyleThree.vue'
export { default as ProductWrapperCosmetics } from '../../components/product/ProductWrapperCosmetics.vue'
export { default as ProductProductsTable } from '../../components/product/ProductsTable.vue'
export { default as ProfileNewGuest } from '../../components/profile/NewGuest.vue'
export { default as ProfileNewProfile } from '../../components/profile/NewProfile.vue'
export { default as ReviewsNewReview } from '../../components/reviews/NewReview.vue'
export { default as ReviewsReviewTable } from '../../components/reviews/ReviewTable.vue'

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
