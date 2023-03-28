<template>
    <div class="main">
        <!-- Tables -->
        <div class="mb-2">
            <div class="d-flex justify-content-end">
                <button @click="$root.$emit('newReview', true)" class="btn bg-trivi-orange">
                    <i class="fa fa-plus"></i>
                </button>
            </div>
            <div class="d-flex justify-content-start">
                <h3>Valoraciones</h3>
            </div>
        </div>

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Usuario</th>
                    <th scope="col">Valoración</th>
                    <th scope="col">Comentario</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="review in paginatedReviews" :key="review.id">
                    <td>{{ filterProduct(review?.product_id) }}</td>
                    <td>{{ review.user_name }} {{ review.user_lastname }}</td>
                    <td>
                        <vue-star-rating :read-only="true" :rating="review.rating" v-bind:star-size="20"></vue-star-rating>
                    </td>
                    <td>{{ review.message }}</td>
                    <td>
                        <button @click.prevent="destroy(review.id)">
                            <i class="fa fa-trash-o"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div v-if="reviews.length > 10" class="d-flex justify-content-center">
            <pagination v-model="page" :records="reviews.length" :perPage="perPage" @paginate="myCallBack" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [],
            reviews: [],
            page: 1,
            perPage: 10
        }
    },

    mounted() {
        this.getReviews();
        this.getProducts();
    },

    computed: {
        paginatedReviews() {
            return this.reviews.slice((this.page - 1) * this.perPage, this.page * this.perPage)
        }
    },

    methods: {
        async getProducts() {
            await this.$store.dispatch('getProducts', {
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
        },


        async getReviews() {
            await this.$axios.get('/api/reviews')
            .then(response => {
                this.reviews = response.data.reviews
                //console.log(response)
            })
        },


        filterProduct(id){
            return this.products?.filter(product => {
                if(id == product.id) {
                    return product.name
                }
            }).map(product => {
                return product.name
            }).toString()
        },

        async destroy(review) {
            await this.$axios.delete('/api/reviews/' + review)
            .then(response => {
                this.getReviews()
            })
        },

        myCallBack(page) {
            this.page = page
        }
    }
}
</script>

<style>

</style>