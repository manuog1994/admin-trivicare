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
                <h1>Añadir producto</h1>
            </div>
            <div class="col-12">
                 <div class="m-auto">
                    <form class="row" ref="productform" @submit.prevent="newProduct">
                        <div class="col-12 mb-2">
                            <label for="title">Título</label>
                            <input class="form-control" type="text" name="name" v-model="title" required>
                        </div>
                        <div class="col-12 mb-2">
                            <label for="description">Descripción</label>
                            <editor api-key="8e7yeojh0bqgf51hmsdm12zbmuqh7yjs010wttlmc8yzgm6o" v-model="content" :init="{height: 500, menubar: true, plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                              ], toolbar: 'undo redo | formatselect | bold italic backcolor | \
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | help'}"></editor>
                        </div>
                        <div class="col-12 mb-2">
                            <label for="specifications">Mini Descripción</label>
                            <textarea class="form-control" name="specifications" id="specifications" required></textarea>
                        </div>
                        <div class="col-12 mb-2">
                            <label for="specifications">Meta Descripción</label>
                            <textarea class="form-control" name="meta_description" id="meta_description" required></textarea>
                        </div>
                        <div class="col-12 col-md-3 mb-2">
                            <label for="price">Precio</label>
                            <input class="form-control" type="number" name="price" step=".01" required>
                        </div>
                        <div class="col-12 col-md-3 mb-2">
                            <label for="stock">
                                Stock
                            </label>
                            <input class="form-control" type="number" name="stock" required>
                        </div>
                        <div class="col-12 col-md-6 mb-2">
                            <label for="barcode">Código de Barras</label>
                            <input class="form-control" type="number" name="barcode" required>
                        </div>
                        <div class="col-12 col-md-4 mb-2">
                            <label for="category">Categoría</label>
                            <select class="form-select" name="category_id" required>
                                <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-8 mb-2">
                            <label for="slug">Slug</label>
                            <input class="form-control" type="text" name="slug" :value="slugify(title)" required>
                        </div>
                        <div class="col-12 col-md-4 mb-2">
                            <label for="discount">Descuento</label>
                            <input class="form-control" type="number" name="discount" step=".01">
                        </div>
                        <div class="col-12 col-md-4 mb-2">
                            <label for="weight">Peso</label>
                            <input class="form-control" type="number" name="weight" step=".01" required>
                        </div>
                        <div class="col-12 col-md-4 mb-2">
                            <label for="size">Tamaño</label>
                            <input class="form-control" type="number" name="size" step=".01">
                        </div>
                        <div class="col-12 border-bottom-1 mb-2 pb-4">
                            <label for="dimensions">Dimensiones</label>
                            <input class="form-control" type="text" name="dimensions" required>
                        </div>

                        <!-- Form Activos -->
                        <div class="border-bottom-1 mb-3">
                            <div>
                                <h2 class="mt-3">Activos</h2>
                            </div>
                            <div class="row mt-2 mb-2">
                                <div class="form-check col-6 col-md-3 mb-2" v-for="tag in tags" :key="tag.id">
                                    <input class="form-check-input" type="checkbox" :value="tag.id" id="flexCheckDefault" v-model="inputTag">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        {{ tag.name }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <!-- Form Imágenes -->
                        <div class="border-bottom-1 mb-4 pb-3">
                            <div class="row">
                                <div class="mb-2">
                                    <h2>Imágenes</h2>
                                </div>
                                <div class="mb-2">
                                    <label for="images">Imágenes</label>
                                    <input class="form-control" type="file" name="files" @change="groupImages" multiple>
                                </div>
                            </div>
                        </div>

                        <div class="mb-5">
                            <button class="btn btn-primary" type="submit" title="Crear Producto">Crear Producto</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    auth: true,
 

    data() {
        return {
            inputTag: [],
            images: [],
            tags: [],
            content: '',
            title: '',
        }
    },

    computed: {
        categories() {
            return this.$store.state.categories;
        },
    },

    mounted() {
        setTimeout(() => {
            this.getTags();
            this.getCategories();
        }, 1000);
    },

    methods: {
        async getCategories() {
            await this.$store.dispatch('getCategories')
        },

        async getTags() {
            await this.$axios.get('api/tags')
                .then(response => {
                    this.tags = response.data.data;
                    this.$root.$emit('loading', false);
                })
                .catch(error => {
                    console.log(error);
                })
        },

        groupImages(e) {
            this.images = e.target.files;
        },

        async newProduct() {
            if (this.$refs.productform.checkValidity()) {
                this.$refs.productform.classList.remove('was-validated');
                const formData = new FormData(this.$refs.productform);
                formData.append('tags', JSON.stringify(this.inputTag));
                formData.append('description', this.content)
                const images = this.images;
                for (let i = 0; i < images.length; i++) {
                    formData.append('images[]', images[i]);
                }
                await this.$axios.post('/api/products/', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Access-Control-Allow-Origin': '*',
                    },
                }).then((response) => {
                        this.$refs.productform.reset();
                        this.$notify({ title: 'El producto se ha creado correctamente', type: 'success' });
                    })
                    .catch((error) => {
                        console.log(error);
                        this.$notify({ title: 'Ha ocurrido un error', type: 'error' });
                    })
            } else {
                this.$refs.productform.classList.add('was-validated');
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
        }

    }


}
</script>

<style>

</style>