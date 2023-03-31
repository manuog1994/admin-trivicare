<template>
    <div class="main">
        <!-- Reviews -->

        <div id="des-details3" ref="review-div" class="tab-pane">
            <div class="row">
                <div class="col-lg-12">
                    <div class="ratting-form-wrapper">
                        <div class="ratting-form">
                            <div class="mb-2">
                                <div class="d-flex justify-content-end">
                                    <button @click="$root.$emit('newReview', false)" class="btn bg-trivi-orange">
                                        Cerrar
                                    </button>
                                </div>
                                <div class="d-flex justify-content-start">
                                    <h3>Añadir valoraciones</h3>
                                </div>
                            </div>
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [],
        }
    },

    mounted() {
        this.getProducts()
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
            this.$root.$emit('loading', false)
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
                // Reset rating
                window.location.reload()
            })
            .catch(error => {
                console.log(error);
            });
        },
    }
}
</script>

<style>

</style>