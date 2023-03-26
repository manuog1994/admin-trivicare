<template>
    <div v-if="product.status == 'Publicado'" class="shop-area pt-100 pb-100">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="product-details-slider">
                        <div class="product-details-img">
                            <div class="product-badges">
                                <span class="product-label pink" v-if="product.new === 'Nuevo'">Nuevo</span>
                                <span class="product-label purple" v-if="product.discount">-{{ product.discount }}%</span>
                             </div>
                            <swiper :options="swiperOptionTop" ref="swiperTop">
                                <div v-if="product.images.length == 0" class="swiper-slide text-center">
                                    <nuxt-img loading="lazy" class="principal" provider="customProvider" src="nuxt/default.webp" alt="default" />
                                    <p class="fst-italic">Haz doble click sobre la imagen para zoom</p>
                                </div>
                                <div v-else class="swiper-slide text-center" v-for="image in product.images" :key="'image-' + image.id">
                                    <nuxt-img loading="lazy" class="principal" provider="customProvider" :src="image.path" alt="default" />
                                    <p class="fst-italic">Haz doble click sobre la imagen para zoom</p>
                                </div>
                            </swiper>
                            <swiper class="mt-2" :options="swiperOptionThumbs" ref="swiperThumbs">
                                <div v-if="product.images.length == 0" class="thumb-img swiper-slide">
                                    <nuxt-img loading="lazy" provider="customProvider" src="nuxt/default.webp" alt="default" width="100%" height="100%"/>
                                </div>
                                <div v-else class="thumb-img swiper-slide" v-for="image in product.images" :key="'imagetwo-' + image.id">
                                    <nuxt-img loading="lazy" provider="customProvider" :src="image.path" alt="default" width="100%" height="100%"/>
                                </div>
                            </swiper>
                        </div>
                    </div>
                </div>
                <div v-if="product" class="col-lg-6 col-md-6">
                    <div class="product-details-content ml-70">
                        <h2>{{ product.name }}</h2>
                        <div class="product-details-price">
                            <span>{{ (discountedPrice(product) * 1.21).toFixed(2) }} &euro;</span>
                            <span class="old" v-if="product.discount > 0">{{ (product.price_base * 1.21).toFixed(2) }} &euro;</span>
                        </div>
                        <div class="pro-details-rating-wrap">
                            <client-only>
                                <vue-star-rating :star-size="30" :read-only="true" :show-rating="false" :rating="product.rating"></vue-star-rating>
                            </client-only> 
                            <span><a class="ms-2" href="#des-details3" title="Valoraciones">{{ product.total_reviews }} Valoraciones</a></span>
                        </div>
                        <div>
                            <p>{{ product.specifications }}</p>
                        </div>
                        <div class="pro-details-size-color" v-if="product.variation">
                            <div class="pro-details-color-wrap">
                                <h6 class="label">Color</h6>
                                <div class="pro-details-color-content">
                                    <label :class="item" class="radio" v-for="(item, index) in product.variation.color" :key="index" >
                                        <input type="radio" name="colorGroup"/>
                                        <span class="check-mark"></span>
                                    </label>
                                </div>
                            </div>
                            <!-- <div class="pro-details-size-wrap">
                                <h6 class="label">Size</h6>
                                <div class="pro-details-size-content">
                                    <label class="radio" v-for="(item, index) in product.variation.sizes" :key="index">
                                        <input type="radio" name="sizeGroup" />
                                        <span class="check-mark">{{ item }}</span>
                                    </label>
                                </div>
                            </div> -->
                        </div>
                        <div v-if="product.stock > 0" class="pro-details-quality">
                            <div class="cart-plus-minus">
                                <button @click="decreaseQuantity()" class="dec qtybutton" title="Quitar">-</button>
                                <input class="cart-plus-minus-box" type="text" :value="singleQuantity" readonly>
                                <button @click="increaseQuantity()" class="inc qtybutton" title="Añadir">+</button>
                            </div>
                            <div class="pro-details-cart btn-hover">
                                <button @click="addToCart(product)" title="Añadir al Carrito">Añadir al Carrito</button>
                            </div>
                            <div class="pro-details-wishlist">
                                <button @click="addToWishlist(product)" title="Añadir a la lista de deseos"><i class="fa fa-heart-o"></i></button>
                            </div>
                            <!-- <div class="pro-details-compare">
                                <button @click="addToCompare(product)" title="compare"><i class="pe-7s-shuffle"></i></button>
                            </div> -->
                        </div>
                        <div v-else>
                            <p class="text-danger fst-italic">En estos momento no tenemos stock del producto.</p>
                        </div>
                        <div class="pro-details-meta">
                            <span class="label">Categoría: </span>
                            <ul>
                                <li>
                                    <div>
                                        <a :href="`https://trivicare.com/${product.category.slug}`" :title="product.category.name">{{ product.category.name  }}</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="pro-details-meta">
                            <span class="label me-2">Tag:</span>
                            <ul>
                                <li v-for="taggy in product.tags" :key="'tag-' +  taggy.id">
                                    <n-link class="tag-block" :style="`background-color:${taggy.color}`" :to="`/shop?tag=${taggy.slug}`" title="Etiqueta">#{{ taggy.tag }}</n-link>
                                </li>
                            </ul>
                        </div>
                        <div class="pro-details-social">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/trivicare" target="_blank" title="Facebook">
                                        <fa-icon icon="fa-brands fa-facebook-f" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/trivicare" target="_blank" title="Instagram">
                                        <fa-icon icon="fa-brands fa-instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.tiktok.com/@trivicare" target="_blank" title="TikTok">
                                        <fa-icon icon="fa-brands fa-tiktok" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .tag-block {
        display: inline-flex;
        padding: 1rem, 1rem;
        border-radius: 5px;
        border: 1px solid #a8a8a8;    
    }

    .principal {
        width: 425px;
        height: 425px;

        @media only screen and (max-width: 400px) {
            width: 275px;
            height: 275px;
        }
    }


</style>

<script>
    export default {
        auth: false,
        props: ['product'],

        data() {
            return {
                singleQuantity: 1,
                categories: [],
                tags: [],

                swiperOptionTop: {
                    loop: true,
                    slidesPerView : 1,
                    spaceBetween: 10,
                    effect: 'fade',
                    loopedSlides: 5, // looped slides should be the same
                    zoom: true,
                    modules: '',
                },

                swiperOptionThumbs: {
                    loop: true,
                    spaceBetween: 10,
                    centeredSlides: true,
                    slidesPerView: 5,
                    freeMode: true,
                    watchSlidesVisibility: true,
                    watchSlidesProgress: true,
                    slideToClickedSlide: true,
                    loopedSlides: 5, // looped slides should be the same
                },
            }
        },

        mounted() {
            this.$nextTick(() => {
                const swiperTop = this.$refs.swiperTop.$swiper
                const swiperThumbs = this.$refs.swiperThumbs.$swiper
                swiperTop.controller.control = swiperThumbs
                swiperThumbs.controller.control = swiperTop
            })            
        },

        methods: {
            addToCart(product) {
                const prod = {...product, cartQuantity: this.singleQuantity}
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

            increaseQuantity(){
                if(this.product.stock > this.singleQuantity){
                    this.singleQuantity++
                } else {
                    this.$notify({ title: 'No hay más stock' })
                }
            },

            decreaseQuantity() {
                if(this.singleQuantity > 1) this.singleQuantity--
            },

            addToWishlist(product) {
                // for notification
                if (this.$store.state.wishlist.find(el => product.id === el.id)) {
                    this.$notify({ title: 'Ya está en la lista de deseos!' })
                } else {
                    this.$notify({ title: 'Añadido a la lista de deseos!'})
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

        },

    };
</script>