<template>
    <div>
        <!-- Reviews -->
        <div id="des-details3" ref="review-div" class="tab-pane">
            <div class="row">
                <div class="col-lg-12">
                    <div class="ratting-form-wrapper">
                        <div class="ratting-form">
                            <h3>Añadir una valoración</h3>
                            <form @submit.prevent="createReview" ref="newReview">
                                <div>
                                    <select class="form-select mt-2 mb-2" id="product-select" name="product_id">
                                        <option value="default">Seleccione un producto</option>
                                        <option v-for="product in products" :key="product.id" :value="product.id">{{ product.name }}</option>
                                    </select>
                                </div>
                                <div class="star-box">
                                    <span>Valoración:</span>
                                    <div class="ratting-star">
                                        <vue-star-rating ref="rating" v-bind:star-size="20"></vue-star-rating>
                                    </div>
                                </div>
                                
                                <div class="row">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="rating-form-style mb-10">
                                                <input name="user_name" placeholder="Nombre" type="text" required>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="rating-form-style mb-10">
                                                <input name="user_lastname" placeholder="Apellidos" type="text" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="rating-form-style form-submit">
                                            <textarea name="message" placeholder="Escribe aquí tu valoración..."></textarea>
                                            <button class="btn btn-light" type="submit" title="Enviar">Crear</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Tables -->

        <table class="table mt-5">
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
                    <td>{{ filterProduct(review.product_id) }}</td>
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

    async beforeMount() {
        await this.getProducts()
        await this.getReviews()
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

        filterProduct(id){
            return this.products.filter(product => {
                if(id == product.id) {
                    return product.name
                }
            }).map(product => {
                return product.name
            }).toString()
        },

        createReview() {
            const review = this.$refs.rating._data.selectedRating;
            const form = this.$refs.newReview
            const formData = new FormData(form)
            formData.append('rating', review)
            formData.append('user_id', this.$auth.user.id)
            formData.append('user_profile_id', 1)
            this.$axios.post('/api/reviews', formData)
            .then(response => {
                form.reset();
                this.$refs.rating._data.selectedRating = 0;
                this.getReviews()
            })
            .catch(error => {
                console.log(error);
            });
        },

        async getReviews() {
            await this.$axios.get('/api/reviews')
            .then(response => {
                this.reviews = response.data.reviews
            })
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