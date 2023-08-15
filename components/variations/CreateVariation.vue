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
                <h1>Añadir variación</h1>
            </div>
            <div class="col-12">
                 <div class="m-auto">
                    <form class="row" ref="variationform" @submit.prevent="newVariation">
                        <div class="col-12 mb-2">
                            <label for="category">Productos</label>
                            <select class="form-select" name="product_id" @change="productSelect" required>
                                <option selected>Elige un producto</option>
                                <option v-for="product in products" :key="product.id" :value="product.id">{{ product.name }}</option>
                            </select>
                        </div>
                        <div class="col-12 mb-2">
                            <label for="category">Imagen</label>
                            <select class="form-select" name="image_id" required>
                                <option v-for="image in images" :key="image.id" :value="image.id">{{ image.name }}</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-3 mb-2">
                            <label for="model">
                                Modelo
                            </label>
                            <input class="form-control" type="text" name="model">
                        </div>
                        <div class="col-12 col-md-3 mb-2">
                            <label for="color">
                                Color
                            </label>
                            <input class="form-control" type="text" name="color">
                        </div>
                        <div class="col-12 col-md-3 mb-2">
                            <label for="size">
                                Tamaño
                            </label>
                            <input class="form-control" type="text" name="size">
                        </div>
                        <div class="col-12 col-md-3 mb-2">
                            <label for="stock">
                                Stock
                            </label>
                            <input class="form-control" type="number" name="stock" required>
                        </div>

                        <div class="mb-5">
                            <button class="btn btn-primary" type="submit" title="Crear Variación">Crear Variación</button>
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
            images: [],
        }
    },

    mounted() {
        this.getProducts();
    },


    methods: {
        async getProducts() {
            await this.$axios.get('/api/products')
                .then(response => {
                    this.products = response.data.data;
                    this.$root.$emit('loading', false);
                })
        },

        async newVariation() {
            if (this.$refs.variationform.checkValidity()) {
                this.$refs.variationform.classList.remove('was-validated');
                const formData = new FormData(this.$refs.variationform);
                await this.$axios.post('/api/variations/', formData, {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    },
                }).then((response) => {
                        this.$refs.variationform.reset();
                        this.$notify({ title: 'El variación se ha creado correctamente', type: 'success' });
                    })
                    .catch((error) => {
                        console.log(error);
                        this.$notify({ title: 'Ha ocurrido un error', type: 'error' });
                    })
            } else {
                this.$refs.variationform.classList.add('was-validated');
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
            const images = product.images;
            this.images = images;
        }

    }


}
</script>

<style>

</style>