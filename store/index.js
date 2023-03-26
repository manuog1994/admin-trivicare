import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'



Vue.use(Vuex);


export const state = () => ({
    products: [],
    categories: [],
    cart: [],
    wishlist: [],
    compare: [],
    pagination: [],
    tags: [],
    cupon: [],
    guest: [],
    duration: 0,
    notifications: [],
    reserve: '',
    step2: false,
    step3: false,
    step4: false,
    shippingMethod: '',
    shippingAmount: 0,
    pickUpId: 0,
    paymentMethod: '',
    userProfileId: '',
    conditionsStore: false,
    newsletterStore: false,
    order_id: '',
    invoice_paper: false,
    note: '',
    newUserAddress: false,
    bizumPage: false,
    paypalPage: false,
    transferBankPage: false,
})


// your root getters
export const getters = {
    getProducts(state) {
        return state.products
    },

    getCategories(state) {
        return state.categories
    },

    getTags(state) {
        return state.tags
    },

    getCupon(state) {
        return state.cupon
    },

    getDuration(state) {
        return state.duration
    },

    getGuest(state) {
        return state.guest
    },

    getTokenPayment(state) {
        return state.tokenPayment
    },

    getPagination(state) {
        return state.pagination
    },

    getCart: state => {
        return state.cart
    },

    getReserve: state => {
        return state.reserve
    },

    getStep2: state => {
        return state.step2
    },

    getStep3: state => {
        return state.step3
    },

    getStep4: state => {
        return state.step4
    },

    getShippingMethod: state => {
        return state.shippingMethod
    },

    getShippingAmount: state => {
        return state.shippingAmount
    },

    getPickUpId: state => {
        return state.pickUpId
    },

    getPaymentMethod: state => {
        return state.paymentMethod
    },

    getUserProfileId: state => {
        return state.userProfileId
    },

    getConditionsStore: state => {
        return state.conditionsStore
    },

    getNewsletterStore: state => {
        return state.newsletterStore
    },

    getOrderId: state => {
        return state.order_id
    },

    getInvoicePaper: state => {
        return state.invoice_paper
    },

    getNote: state => {
        return state.note
    },

    cartItemCount: state => {
        return state.cart.length
    },

    getWishlist: state => {
        return state.wishlist
    },

    getCompare: state => {
        return state.compare
    },

    getNewUserAddress: state => {
        return state.newUserAddress
    },

    getBizumPage: state => {
        return state.bizumPage
    },

    getPaypalPage: state => {
        return state.paypalPage
    },

    getTransferBankPage: state => {
        return state.transferBankPage
    },

    wishlistItemCount: state => {
        return state.wishlist.length
    },

    compareItemCount: state => {
        return state.compare.length
    },

    notificationsItemCount: state => {
        return state.notifications.length
    },

    getSubTotal: state => {
        let subTotal = 0;
        state.cart.forEach(item => {
            let price = item.discount ? item.price_base - (item.price_base *(item.discount)/100) : item.price_base;
            subTotal += price * item.cartQuantity
        })
        return subTotal;
    },

    getTotal: state => {
        let total = 0;
        state.cart.forEach(item => {
            let price = item.discount ? item.price_base - (item.price_base *(item.discount)/100) : item.price_base;
            total += price * item.cartQuantity
        })
        if (state.cupon.id) {
            total = total - (total * (state.cupon.discount / 100))
        }

        return total;
    }
}

// contains your mutations
export const mutations = {
    SET_PRODUCT(state, product) {
        state.products = product
    },

    SET_CATEGORY(state, category) {
        state.categories = category
    },

    SET_PAGINATION(state, pagination) {
        state.pagination = pagination
    },

    SET_TAG(state, tag) {
        state.tags = tag
    },

    SET_CUPON(state, cupon) {
        state.cupon = cupon
    },

    SET_GUEST(state, guest) {
        state.guest = guest
    },

    SET_TOKENPAYMENT(state, tokenPayment) {
        state.tokenPayment = tokenPayment
    },

    SET_DURATION(state, duration) {
        state.duration = duration
    },

    SET_ORDER_ID(state, order_id) {
        state.order_id = order_id
    },

    SET_INVOICE_PAPER(state, invoice_paper) {
        state.invoice_paper = invoice_paper
    },

    SET_NOTE (state, note) {
        state.note = note
    },

    SET_NEW_USER_ADDRESS (state, newUserAddress) {
        state.newUserAddress = newUserAddress
    },

    UPDATE_CART(state, payload) {
        const item = state.cart.find(el => payload.id === el.id)
        if (item) {
            const price = item.discount ? item.price_base - (item.price_base *(item.discount)/100) : item.price_base;
            item.cartQuantity = item.cartQuantity + payload.cartQuantity
            item.total = item.cartQuantity * price
        } else {
            const price = payload.discount ? payload.price_base - (payload.price_base *(payload.discount)/100) : payload.price_base;
            state.cart.push({...payload, cartQuantity: payload.cartQuantity, total: price })
        }
    },

    REFRESH_WISHLIST(state, payload) {
        state.wishlist = []
        state.wishlist.push(...payload)
    },

    REFRESH_CART(state, products) {
        state.cart = []
        state.cart.push(...products)
    },

    UPDATE_GUEST(state, guest) {
        const item = state.guest;
        if (item) {
            if(item.email === guest.email) {
                item.id = guest.id
                item.user_id = 3
                item.user_profile_id = 1
                return item;
            }
        }
    },

    SET_RESERVE(state, reserve) {
        state.reserve = reserve
    },

    SET_STEP2(state, step2) {
        state.step2 = step2
    },

    SET_STEP3(state, step3) {
        state.step3 = step3
    },

    SET_STEP4(state, step4) {
        state.step4 = step4
    },

    SET_SHIPPING_METHOD(state, shippingMethod) {
        state.shippingMethod = shippingMethod
    },

    SET_SHIPPING_AMOUNT(state, shippingAmount) {
        state.shippingAmount = shippingAmount
    },

    SET_PICKUP_ID(state, pickUpId) {
        state.pickUpId = pickUpId
    },

    SET_PAYMENT_METHOD(state, paymentMethod) {
        state.paymentMethod = paymentMethod
    },

    SET_USER_PROFILE_ID(state, userProfileId) {
        state.userProfileId = userProfileId
    },

    SET_CONDITIONS_STORE(state, conditionsStore) {
        state.conditionsStore = conditionsStore
    },

    SET_NEWSLETTER_STORE(state, newsletterStore) {
        state.newsletterStore = newsletterStore
    },

    SET_BIZUM_PAGE(state, bizumPage) {
        state.bizumPage = bizumPage
    },

    SET_PAYPAL_PAGE(state, paypalPage) {
        state.paypalPage = paypalPage
    },

    SET_TRANSFER_BANK_PAGE(state, transferBankPage) {
        state.transferBankPage = transferBankPage
    },

    REMOVE_PRODUCT_FROM_CART(state, product) {
        state.cart = state.cart.filter(item => {
            return product.id !== item.id
        });
    },

    DECREASE_PRODUCT(state, payload) {
        const found = state.cart.find(el => payload.id === el.id)
        const price = found.discount ? found.price_base - (found.price_base *(found.discount)/100) : found.price_base;
        found.cartQuantity = found.cartQuantity - payload.cartQuantity
        found.total = found.cartQuantity * price
    },

    CLEAR_CART(state) {
        state.cart = []
    },

    CLEAR_CUPON(state) {
        state.cupon = []
    },

    CLEAR_GUEST(state) {
        state.guest = []
    },

    CLEAR_TOKENPAYMENT(state) {
        state.tokenPayment = null
    },
    
    ADD_TO_WISHLIST(state, product) {
        const item = state.wishlist.find(el => product.id === el.id)
        if(item) {
            return
        } {
            state.wishlist.push(product)
        }
    },

    REMOVE_PRODUCT_FROM_WISHLIST(state, product) {
        state.wishlist = state.wishlist.filter(item => {
            return product.id !== item.id
        });
    },

    ADD_TO_COMPARE(state, product) {
        const item = state.compare.find(el => product.id === el.id)
        if(item) {
            return
        } {
            state.compare.push(product)
        }
    },

    REMOVE_FROM_COMPARE(state, product) {
        state.compare = state.compare.filter(item => {
            return product.id !== item.id
        });
    },
}


// contains your actions
export const actions = {
    countdown({commit}, payload) {
        commit('SET_COUNTDOWN', payload)
    },

    addIdToGuest({commit}, payload) {
        commit('UPDATE_GUEST', payload)
    },

    refreshWishList({commit}, products) {
        commit('REFRESH_WISHLIST', products)
    },

    refreshCart({commit}, products) {
        commit('REFRESH_CART', products)
    },

    addToCartItem({commit}, payload) {
        commit('UPDATE_CART', payload)
    },

    removeProductFromCart({commit}, product) {
        commit('REMOVE_PRODUCT_FROM_CART', product)
    },

    decreaseProduct({ commit }, product) {
        commit('DECREASE_PRODUCT', product)
    },

    addToWishlist({commit}, payload) {
        commit('ADD_TO_WISHLIST', payload)
    },

    addToCompare({commit}, payload) {
        commit('ADD_TO_COMPARE', payload)
    },

    removeProductFromWishlist({commit}, product) {
        commit('REMOVE_PRODUCT_FROM_WISHLIST', product)
    },

    removeFromCompare({commit}, product) {
        commit('REMOVE_FROM_COMPARE', product)
    },

 
    async getProducts(context, {perPage, page, category, search, slug, sort, tag, status}) {
        const { data } = await axios.get(
          process.env.baseUrl + '/api/products?perPage=' + perPage + '&page=' + page + '&filter[category_id]=' + category + '&filter[name]=' + search + '&filter[slug]=' + slug + '&filter[status]=' + status +'&sort=' + sort + '&tags=' + tag
        );
        context.commit("SET_PRODUCT", data);
        context.commit("SET_PAGINATION", data.meta);
    },

    async getCategories(context) {
        const { data } = await axios.get(
          process.env.baseUrl + '/api/categories'
        );
        context.commit("SET_CATEGORY", data.data);
    },

    async getTags(context) {
        const { data } = await axios.get(
          process.env.baseUrl + '/api/tags'
        );
        context.commit("SET_TAG", data.data);
    },



}

