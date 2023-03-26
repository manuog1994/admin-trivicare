<template>
    <div v-if="product.status == 'Publicado'" class="product-wrap mb-30">
         <div class="product-img">
            <n-link :to="`/product/${product.slug}`">
                <div v-if="product.images.length == 0 || product.images.length == 1">
                    <nuxt-img loading="lazy" class="default-img" provider="customProvider" src="nuxt/default.webp" :alt="product.name" width="100%" height="100%"/>
                    <nuxt-img loading="lazy" class="hover-img" provider="customProvider" src="nuxt/default.webp" :alt="product.name" width="100%" height="100%"/>
                </div>
                <div v-else>
                    <nuxt-img loading="lazy" class="default-img" provider="customProvider" :src="product.images[0].path" :alt="product.name" width="100%" height="100%"/>
                    <nuxt-img loading="lazy" class="hover-img" provider="customProvider" :src="product.images[1].path" :alt="product.name" width="100%" height="100%"/>
                </div>
            </n-link>
            <div class="product-badges">
                <span class="product-label pink" v-if="product.new === 'Nuevo'">Nuevo</span>
                <span class="product-label purple" v-if="product.discount">-{{ product.discount }}%</span>
            </div>
             <div class="product-action" v-if="layout === 'twoColumn' || layout === 'threeColumn'">
                <div class="pro-same-action pro-wishlist">
                    <button class="btn" title="Añadir a la lista de deseos" @click="addToWishlist(product)"> 
                        <i class="pe-7s-like"></i>
                    </button>
                </div>
                <div class="pro-same-action pro-cart">
                    <n-link :to="`/product/${product.slug}`" class="btn" v-if="product.variation">
                        selecciona una opción
                    </n-link>
                    <button class="btn" title="Añadir al carrito" @click="addToCart(product)" v-else>
                        <i class="pe-7s-cart"></i> 
                        Añadir al carrito
                    </button>
                </div>
                <div class="pro-same-action pro-quickview">
                    <button class="btn" title="Vista previa" @click="onClick(product)">
                        <i class="pe-7s-look"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="product-content text-center mt-4">
            <h3 class="mb-1">
                <n-link :to="`/product/${product.slug}`">{{ product.name }}</n-link>
            </h3>
            <div :class="{ 'product-grid-change': layout === 'list' ? false : true }">
                <client-only>
                    <vue-star-rating :star-size="20" :read-only="true" :show-rating="false" :rating="product.rating"></vue-star-rating>
                </client-only>
            </div>
            <div class="product-price">
                <span>{{ (discountedPrice(product) * 1.21).toFixed(2) }} &euro;</span>
                <span class="old" v-if="product.discount > 0">{{ (product.price_base * 1.21).toFixed(2) }} &euro;</span>
            </div>
            <div class="product-content__list-view" v-if="layout === 'list'">
                <!-- <p class="">{{ (product.description).substring(0,100)+"..." }}</p> -->
                <div class="pro-action d-flex align-items-center" >
                    <div class="pro-cart btn-hover">
                        <button class="btn" title="Añadir al carrito" @click="addToCart(product)" v-if="product.stock > 0">
                            <i class="pe-7s-cart"></i> 
                            Añadir al carrito
                        </button>
                        <button v-else class="btn disabled" title="No hay stock">
                            <i class="pe-7s-attention"></i>
                             No hay Stock
                        </button>
                    </div>
                    <div class="pro-wishlist">
                        <button @click="addToWishlist(product)" title="Añadir a la lista de deseos">
                            <i class="fa fa-heart-o"></i>
                        </button>
                    </div>
                    <!-- <div class="pro-compare">
                        <button @click="addToCompare(product)">
                            <i class="pe-7s-shuffle"></i>
                        </button>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .product-grid-change{
        display: flex;
        justify-content: center;
        margin-bottom: 0.5rem;
    }
</style>

<script>
    export default {
        auth: false,
        props: ["layout", "product"],

        data() {
            return {
                tag: Object.values(this.product.tags).flat(),
            }
        },

        methods: {
            addToCart(product) {
                const prod = {...product, cartQuantity: 1}
                // for notification
                if (this.$store.state.cart.find(el => product.id === el.id)) {
                    this.$notify({ title: 'Se ha actualizado la cantidad del producto' })
                } else {
                    this.$notify({ title: 'Añadido al carrito' })
                }

                this.$store.dispatch('addToCartItem', prod)
            },

            discountedPrice(product) {
                return product.price_base - (product.price_base * product.discount / 100)
            },

            addToWishlist(product) {
                // for notification
                if (this.$store.state.wishlist.find(el => product.id === el.id)) {
                    this.$notify({ title: 'Ya estaba añadido a la lista de deseos!' })
                } else {
                    this.$notify({ title: 'Añadido a la lista de deseos!'})
                }

                this.$store.dispatch('addToWishlist', product)
            },

            // addToCompare(product) {
            //     // for notification
            //     if (this.$store.state.compare.find(el => product.id === el.id)) {
            //         this.$notify({ title: 'Already added to compare!' })
            //     } else {
            //         this.$notify({ title: 'Add to compare successfully!'})
            //     }

            //     this.$store.dispatch('addToCompare', product)
            // },

            onClick(product) {
                this.$modal.show('quickview', product);
            },

        },
    };
</script>