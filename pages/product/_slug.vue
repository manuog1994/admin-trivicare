<template>
    <client-only>
        <div class="product-details-page-wrapper">
            <HeaderWithTopbar containerClass="container-fluid"/>
            <TheHeader :searchFather="searchChildren" @opacity="searchOpacity"/>
            <div id="post-nav" class="" @click="closeMenus">
                <NavBottom />
                <ProductDetailsWrapper :product="productDetails" v-if="productDetails" />
                <ProductDetailsDescriptionReview :product="productDetails" :reviews="productDetails.reviews" v-if="productDetails" />
             </div>
             <TheFooter />
        </div>
    </client-only>
</template>

<script>

    export default {
        auth: true,
        async asyncData({ store, params }) {
            try {
                const productDispatch = await store.dispatch('getProducts', {
                    page: '',
                    category: '',
                    search: '',
                    slug: params.slug,
                    sort: '',
                    tag: '',
                    status: '',
                });
                const productDetails = store.getters.getProducts
                return {
                    productDetails: productDetails.data[0],
                }


            } catch (error) {
                console.log(error)
            }
        },

        head() {
            return {
                title: this.productDetails.name + ' | TriviCare Natural Cosmetics',
                link: [
                    { rel: 'cannonical', href: 'https://trivicare.com/product/'}
                ],
                meta: [
                    { charset: 'utf-8' },
                    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                    {
                        hid: 'description',
                        name: 'description',
                        content: this.productDetails.meta_description
                    }
                ],

            }
        },

        
        data() {
            return {
                searchChildren: '',
            }
        },

        async mounted() {
            this.$nextTick(() => {
                this.$nuxt.$loading.start()
                setTimeout(() => {
                    this.$nuxt.$loading.finish()
                }, 2000);
            });

            await this.$axios.post('/api/visit', {
                ip_address: 'No Ip',
                page_visited: this.productDetails.name,
            })
         },

        methods: {
            closeMenus() {
                this.searchOpacity(false);
                this.$root.$emit('closeMenu', this.closeMenu);
            },

            searchOpacity(searchFather) {
                if (searchFather == true) {
                    document.getElementById("post-nav").classList.add("search-screen");
                } else {
                    document.getElementById("post-nav").classList.remove("search-screen");
                }
            }
        },
    };
</script>
