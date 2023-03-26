<template>
    <div v-if="product.status == 'Publicado'" class="product-wrap-2 mb-25">
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
            <div class="product-action-2">
                <!-- <button class="btn" title="Compare" @click="addToCompare(product)"> 
                    <i class="pe-7s-shuffle"></i>
                </button> -->
                <button v-if="product.stock > 0" class="btn" title="Añadir al carrito" @click="addToCart(product)">
                    <i class="pe-7s-cart"></i>
                </button>
                <button class="btn" title="Vista previa" @click="onClick(product)">
                    <i class="pe-7s-look"></i>
                </button>
            </div>
        </div>
         <div class="product-content-2">
            <div class="title-price-wrap-2">
                <h3>
                    <n-link :to="`/product/${product.slug}`">{{ product.name }}</n-link>
                </h3>
                <div class="price-2">
                    <span>{{ (discountedPrice(product) * 1.21).toFixed(2) }} &euro;</span>
                    <span class="old" v-if="product.discount > 0">{{ (product.price_base * 1.21).toFixed(2) }} &euro;</span>
                </div>
            </div>
            <div class="pro-wishlist-2">
                <button @click="addToWishlist(product)" title="Añadir a la lista de deseos"><i class="pe-7s-like"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["product"],

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