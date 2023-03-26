<template>
    <div class="container">
        <div class="row">
            <div class="col-12 mt-md-5">
                 <div class="m-auto">
                    <form class="row" ref="productform" @submit.prevent="newProduct">
                        <div class="col-12 mb-2">
                            <label for="title">Título</label>
                            <input class="form-control" type="text" name="name">
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
                            <label for="specifications">Especificaciones</label>
                            <textarea class="form-control" name="specifications" id="specifications"></textarea>
                        </div>
                        <div class="col-12 col-md-3 mb-2">
                            <label for="price">Precio</label>
                            <input class="form-control" type="number" name="price" step=".01">
                        </div>
                        <div class="col-12 col-md-3 mb-2">
                            <label for="stock">
                                Stock
                            </label>
                            <input class="form-control" type="number" name="stock">
                        </div>
                        <div class="col-12 col-md-6 mb-2">
                            <label for="barcode">Código de Barras</label>
                            <input class="form-control" type="number" name="barcode">
                        </div>
                        <div class="col-12 col-md-4 mb-2">
                            <label for="category">Categoría</label>
                            <select class="form-select" name="category_id">
                                <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-8 mb-2">
                            <label for="slug">Slug</label>
                            <input class="form-control" type="text" name="slug">
                        </div>
                        <div class="col-12 col-md-4 mb-2">
                            <label for="discount">Descuento</label>
                            <input class="form-control" type="number" name="discount" step=".01">
                        </div>
                        <div class="col-12 col-md-4 mb-2">
                            <label for="weight">Peso</label>
                            <input class="form-control" type="number" name="weight" step=".01">
                        </div>
                        <div class="col-12 col-md-4 mb-2">
                            <label for="size">Tamaño</label>
                            <input class="form-control" type="number" name="size" step=".01">
                        </div>
                        <div class="col-12 border-bottom-1 mb-2 pb-4">
                            <label for="dimensions">Dimensiones</label>
                            <input class="form-control" type="text" name="dimensions">
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
                })
                .catch(error => {
                    console.log(error);
                })
        },

        groupImages(e) {
            this.images = e.target.files;
        },

        async newProduct() {
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
        },

    }


}
</script>

<style>

</style>