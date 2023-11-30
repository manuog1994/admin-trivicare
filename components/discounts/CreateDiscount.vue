<template>
    <div class="main w-100">
        <div class="row">
            <div class="mb-4 d-inline-block">
                <div class="d-flex justify-content-end">
                    <button @click="closeAdd" class="btn bg-trivi-red text-white">
                        <i class="fa fa-close"></i>
                        Cerrar
                    </button>
                </div>
                <h1>Añadir descuento</h1>
            </div>
            <div class="col-12">
                 <div class="m-auto">
                    <form class="row" ref="discountform" @submit.prevent="newDiscount">
                        <div class="col-12 mb-2">
                            <label for="category">Productos</label>
                            <select class="form-select" name="product_id" @change="productSelect" required>
                                <option selected>Elige un producto</option>
                                <option v-for="product in products" :key="product.id" :value="product.id">{{ product.name }}</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-3 mb-2">
                            <label for="model">
                                Precio Original con IVA
                            </label>
                            <input class="form-control" type="text" disabled :value="priceOriginal + ' €'">
                        </div>
                        <div class="col-12 col-md-3 mb-2">
                            <label for="color">
                                Con descuento
                            </label>
                            <input class="form-control" type="text" disabled :value="priceDiscount + ' €'">
                        </div>
                        <div class="col-12 col-md-3 mb-2">
                            <label for="discount">
                                Descuento
                            </label>
                            <input class="form-control" type="number" name="discount" v-model="discount">
                        </div>
                        <div class="col-12 col-md-3 mb-2">
                            <label for="stock">
                                Desde
                            </label>
                            <input class="form-control" type="date" name="start_date" required>
                        </div>
                        <div class="col-12 col-md-3 mb-2">
                            <label for="stock">
                                Hasta
                            </label>
                            <input class="form-control" type="date" name="end_date" required>
                        </div>

                        <div class="mb-5">
                            <button class="btn btn-primary" type="submit" title="Crear Variación">Crear Descuento</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputTag: [],
            images: [],
            tags: [],
            content: '',
            title: '',
            products: [],
            priceOriginal: '',
            priceDiscount: '',
            discount: 0,
        }
    },

    mounted() {
        this.getProducts();
    },

    watch: {
        discount() {
            this.discountedPrice();
        }
    },


    methods: {
        async getProducts() {
            await this.$axios.get('/api/products')
                .then(response => {
                    this.products = response.data.data;
                    this.$root.$emit('loading', false);
                })
        },

        async newDiscount() {
            if (this.$refs.discountform.checkValidity()) {
                this.$refs.discountform.classList.remove('was-validated');
                const formData = new FormData(this.$refs.discountform);
                await this.$axios.post('/api/discounts/', formData, {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    },
                }).then((response) => {
                        this.$refs.discountform.reset();
                        this.$notify({ title: 'El descuento se ha creado correctamente', type: 'success' });
                        this.$root.$emit('getDiscounts', true);
                    })
                    .catch((error) => {
                        console.log(error);
                        this.$notify({ title: 'Ha ocurrido un error', type: 'error' });
                    })
            } else {
                this.$refs.discountform.classList.add('was-validated');
            }
        },

        closeAdd() {
            this.$root.$emit('closeAdd', false);
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
        },

        productSelect(event) {
            const id = event.target.value;
            const product = this.products.find(product => product.id == id);
            this.priceOriginal = (product.price_base * 1.21).toFixed(2);
            this.discountedPrice();
        },
        
        discountedPrice() {
            const price = Number(this.priceOriginal) / 1.21;
            this.priceDiscount = ((price - (price * this.discount / 100)) * 1.21).toFixed(2);
        },

    }


}
</script>

<style>

</style>