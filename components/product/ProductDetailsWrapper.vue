<template>
    <div class="shop-area pt-100 pb-100">
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
                                    <nuxt-img loading="lazy" class="principal" provider="customProvider" :src="image.path + image.name + '.' + image.ext" alt="default" />
                                    <p class="fst-italic">Haz doble click sobre la imagen para zoom</p>
                                </div>
                            </swiper>
                            <swiper class="mt-2" :options="swiperOptionThumbs" ref="swiperThumbs">
                                <div v-if="product.images.length == 0" class="thumb-img swiper-slide">
                                    <nuxt-img loading="lazy" provider="customProvider" src="nuxt/default.webp" alt="default" width="100%" height="100%"/>
                                </div>
                                <div v-else class="thumb-img swiper-slide" v-for="image in product.images" :key="'imagetwo-' + image.id">
                                    <nuxt-img loading="lazy" provider="customProvider" :src="image.path + image.name + '.' + image.ext" alt="default" width="100%" height="100%"/>
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
                        <div class="pro-details-size-color" v-if="product.variations">
                            <div v-if="errorVariation">
                                <p class="text-danger">
                                    <i>Debes seleccionar el modelo, color o tamaño antes de añadirlo al carrito.</i>
                                </p>
                            </div>
                            <div class="pro-details-color-wrap">
                                <div v-if="model?.length > 0">
                                   <h6 class="label">Modelo</h6>
                                    <div class="d-flex mb-4">
                                        <div class="d-flex justify-content-around" v-for="modelo, index in model">
                                            <button :id="'button-model' + index" class="btn btn-hover-blue border-black rounded-0 ms-2" :title="modelo" @click="setVariation">{{ modelo }}</button>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="color?.length > 0">
                                   <h6 class="label">Color</h6>
                                    <div class="d-flex mb-4">
                                        <div class="d-flex justify-content-around" v-for="colores, index in color">
                                            <button :id="'button-color' + index" class="btn btn-hover-blue border-black rounded-0 ms-2" :title="colores" @click="setVariation">{{ colores }}</button>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="size?.length > 0">
                                   <h6 class="label">Tamaño</h6>
                                    <div class="d-flex mb-4">
                                        <div class="d-flex justify-content-around" v-for="tamanos, index in size">
                                            <button :id="'button-size' + index" class="btn btn-hover-blue border-black rounded-0 ms-2" :title="tamanos" @click="setVariation">{{ tamanos }}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
        props: ['product'],

        data() {
            return {
                singleQuantity: 1,
                categories: [],
                tags: [],
                model: [],
                color: [],
                size: [],
                variation: '',
                errorVariation: false,
                selectVariation: false,
                idButtonVariation: '',
                imageVariation: [],

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
            
            this.getModels();
            this.getColors();
            this.getSizes();
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

            getModels() {
                this.product.variations.map(el => {
                    if(el.model !== '') {
                        this.model.push(el.model);
                    }
                })
            },

            getColors() {
                this.product.variations.map(el => {
                    if(el.color !== ''){
                        this.color.push(el.color);
                    }
                })
            },

            getSizes() {
                this.product.variations.map(el => {
                    if(el.size){
                        this.size.push(el.size);
                    }
                })
            },

            setVariation(e) {
                let id = e.target.id;
                this.variation = e.target.title;
                this.errorVariation = false;

                if(id !== this.idButtonVariation && this.idButtonVariation !== '') {
                    document.getElementById(this.idButtonVariation).classList.remove('bg-trivi-blue');
                }
                
                //Marcar el botón según la id recibida
                document.getElementById(id).classList.add('bg-trivi-blue');

                this.idButtonVariation = id;

                //Extraer variación según el título

                this.product.variations.map(el => {
                    if (el.model === e.target.title || el.color === e.target.title || el.size === e.target.title) {
                        this.$axios.get('api/variations/' + el.id).then(res => {
                            let response = res.data.data;
                            response.map(element => {
                                let imageVariation = element.image;
                                let slide = document.querySelector('.swiper-slide-active');
                                let imagen = slide.querySelector('img');
                                imagen.src = process.env.baseUrl + '/' + imageVariation.path + imageVariation.name + '.' + imageVariation.ext;
                            })
                        })
                    }
                })
            } 

        },

    };
</script>