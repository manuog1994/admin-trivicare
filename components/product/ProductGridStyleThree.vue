<template>
    <div v-if="product.status == 'Publicado'" class="product-wrap-3 mb-20">
        <div class="product-img">
            <n-link :to="`/product/${slugify(product.title)}`">
                <div v-if="product.images.lenght == 0">
                    <nuxt-img loading="lazy" class="default-img" provider="customProvider" src="nuxt/default.webp" :alt="product.title" width="100%" height="100%"/>
                    <nuxt-img loading="lazy" class="hover-img" provider="customProvider" src="nuxt/default.webp" :alt="product.title" width="100%" height="100%"/>
                </div>
                <div v-else>
                    <nuxt-img loading="lazy" class="default-img" provider="customProvider" :src="product.images[0].path" :alt="product.title" width="100%" height="100%"/>
                    <nuxt-img loading="lazy" class="hover-img" provider="customProvider" :src="product.images[0].path" :alt="product.title" width="100%" height="100%"/>
                </div>
            </n-link>
            <div class="product-badges">
                <span class="product-label pink" v-if="product.new === 'Nuevo'">Nuevo</span>
                <span class="product-label purple" v-if="product.discount">-{{ product.discount }}%</span>
            </div>
            <div class="product-content-3-wrap">
                <div class="product-content-3">
                    <div class="product-title">
                        <h3>
                            <n-link :to="`/product/${slugify(product.title)}`">{{ product.title }}</n-link>
                        </h3>
                    </div>
                    <div class="price-3">
                        <span>${{ (discountedPrice(product) * 1.21).toFixed(2) }}</span>
                        <span class="old" v-if="product.discount > 0">${{ (product.price_base * 1.21).toFixed(2) }}</span>
                    </div>
                    <div class="product-action-3">
                        <!-- <button class="btn" title="Compare" @click="addToCompare(product)"> 
                            <i class="pe-7s-shuffle"></i>
                        </button> -->
                        <button v-if="product.stock > 0" class="btn" title="Añadir al carrito" @click="addToCart(product)">
                            <i class="pe-7s-cart"></i>
                        </button>
                        <button class="btn" title="Añadir a la lista de deseos" @click="addToWishlist(product)">
                            <i class="pe-7s-like"></i>
                        </button>
                        <button class="btn" title="Vista previa" @click="onClick(product)">
                            <i class="pe-7s-look"></i>
                        </button>
                    </div>
                </div>
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
                    this.$notify({ title: 'Already added to cart update with one' })
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
                    this.$notify({ title: 'Already added to wishlist!' })
                } else {
                    this.$notify({ title: 'Add to wishlist successfully!'})
                }

                this.$store.dispatch('addToWishlist', product)
            },

            addToCompare(product) {
                // for notification
                if (this.$store.state.compare.find(el => product.id === el.id)) {
                    this.$notify({ title: 'Already added to compare!' })
                } else {
                    this.$notify({ title: 'Add to compare successfully!'})
                }

                this.$store.dispatch('addToCompare', product)
            },

            onClick(product) {
                this.$modal.show('quickview', product);
            },

            slugify(text) {
                return text
                    .toString()
                    .toLowerCase()
                    .replace(/\s+/g, "-") // Replace spaces with -
                    .replace(/[^\w-]+/g, "") // Remove all non-word chars
                    .replace(/--+/g, "-") // Replace multiple - with single -
                    .replace(/^-+/, "") // Trim - from start of text
                    .replace(/-+$/, ""); // Trim - from end of text
            }
        },
    };
</script>