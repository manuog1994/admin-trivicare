<template>
    <div>
        <div class="product-area pb-95 d-none d-md-block">
            <div class="container">
                <ul class="nav product-tab-list-2 pb-55">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#sale-product" role="tab" title="Vista previa">Más Vendidos</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" data-bs-toggle="pill" data-bs-target="#new-product" role="tab" title="Últimos productos añadidos">Últimos Productos Añadidos</button>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane fade" id="new-product" role="tabpanel">
                        <div class="row">
                            <div class="col-xl-3 col-lg-4 col-sm-6" v-for="(product, index) in newsProducts" :key="index">
                                <ProductGridItemTwo :product="product" />
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade active show" id="sale-product" role="tabpanel">
                        <div class="row">
                            <div class="col-xl-3 col-lg-4 col-sm-6" v-for="(product, index) in bestSold" :key="index">
                                <ProductGridItemTwo :product="product" />
                            </div>
                        </div>
                    </div>
                    <div class="view-more text-center mt-20 toggle-btn2">
                        <n-link to="/shop" class="loadMore2">VER MÁS PRODUCTOS</n-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        components: {
            ProductGridItemTwo: () => import('@/components/product/ProductGridItemTwo'),
         },

        data() {
            return {
                products: [],
                bestSold: [],
                newsProducts: [],
            };
        },

        async mounted() {
            await this.getProducts();
        },



        methods: {
            async getProducts() {
                await this.$store.dispatch('getProducts', {
                    perPage: '',
                    page: '',
                    category: '',
                    search: '',
                    slug: '',
                    sort: '',
                    tag: '',
                    status: 2
                })
                const products = this.$store.getters.getProducts
                this.products = products.data
                this.lastProducts();
                this.bestSales();
            },


            lastProducts() {
                const allProducts = this.products.map((item) => {
                    return item;
                });
                const idProducts = this.products.map((item) => {
                    if (item.status === 'Publicado'){
                        return item.id;
                    }
                });
                idProducts.sort((a, b) => b - a);

                const lastIdProducts = idProducts.slice(0, 4);

                const lastFourProducts = allProducts.filter((item) => {
                    return lastIdProducts.includes(item.id);
                });

                lastFourProducts.sort((a, b) => b.id - a.id);
                this.newsProducts = lastFourProducts;

            },

            bestSales() {
                const best = this.products.map((item) => {
                    return item.sold;
                });
                best.sort((a, b) => b - a);
                const bestSold = best.slice(0, 4);

                const allProducts = this.products.map((item) => {
                    return item;
                });

                const bestProducts = allProducts.filter((item) => {
                    return bestSold.includes(item.sold);
                });
                
                bestProducts.sort((a, b) => b.sold - a.sold);
                
                if(bestProducts.length > 4) {
                    this.bestSold = this.newsProducts;
                } else {
                    this.bestSold = bestProducts;
                }
            }
        }
    };
</script>