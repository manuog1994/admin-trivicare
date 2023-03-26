<template>
    <modal name="edit" @before-open="beforeOpen" width="800px" :scrollable="true" height=auto>
        <div class="mb-2 ps-md-4 pt-md-4">
            <h2>Modificar Producto</h2>
        </div>
        <form class="row p-md-5" ref="updateproduct" @submit="updateProduct">
            <div class="col-12 mb-2">
                <label for="title">Título</label>
                <input class="form-control" type="text" name="name" :value="item.name" ref="name">
            </div>
            <div class="col-12 mb-2">
                <label for="description">Descripción</label>
                <editor api-key="8e7yeojh0bqgf51hmsdm12zbmuqh7yjs010wttlmc8yzgm6o" v-model="item.description" :init="{height: 500, menubar: true, plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                    ], toolbar: 'undo redo | formatselect | bold italic backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | help'}"></editor>
            </div>            
            <div class="col-12 mb-2">
                <label for="specifications">Especificaciones</label>
                <textarea class="form-control" name="specifications" id="specifications" :value="item.specifications" ref="specifications"></textarea>
            </div>
            <div class="col-12 col-md-3 mb-2">
                <label for="price">Precio</label>
                <input class="form-control" type="number" name="price" step=".01" :value="item.price" ref="price">
            </div>
            <div class="col-12 col-md-3 mb-2">
                <label for="stock">
                    Stock
                </label>
                <input class="form-control" type="number" name="stock" step=".01" :value="item.stock" ref="stock">
            </div>
            <div class="col-12 col-md-6 mb-2">
                <label for="barcode">Código de Barras</label>
                <input class="form-control" type="number" name="barcode" :value="item.barcode" ref="barcode">
            </div>
            <div class="col-12 col-md-4 mb-2">
                <label for="category">Categoría</label>
                <select class="form-select" name="category_id" :value="item.category_id" ref="category_id">
                    <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
                </select>
            </div>
            <div class="col-12 col-md-8 mb-2">
                <label for="slug">Slug</label>
                <input class="form-control" type="text" name="slug" :value="item.slug" ref="slug">
            </div>
            <div class="col-12 col-md-4 mb-2">
                <label for="discount">Descuento</label>
                <input class="form-control" type="number" name="discount" step=".01" :value="item.discount" ref="discount">
            </div>
            <div class="col-12 col-md-4 mb-2">
                <label for="weight">Peso</label>
                <input class="form-control" type="number" name="weight" step=".01" :value="item.weight" ref="weight">
            </div>
            <div class="col-12 col-md-4 mb-2">
                <label for="size">Tamaño</label>
                <input class="form-control" type="number" name="size" step=".01" :value="item.size" ref="size">
            </div>
            <div class="col-12 mb-2 pb-4 border-bottom-1">
                <label for="dimensions">Dimensiones</label>
                <input class="form-control" type="text" name="dimensions" :value="item.dimensions" ref="dimensions">
            </div>

            <!-- Checks de Activos -->
            <div id="actives">
                <div class="mb-2">
                    <h2 class="mt-3">Activos</h2>
                </div>
                <div class="bg-aqua rounded mb-3">
                    <span class="ms-2">Actuales:</span>
                    <div class="row">
                        <div class="col-6 col-md-4" v-for="tag in item.tags" :key="tag.id">
                            <p class="ms-2">
                                {{ tag.name }} 
                                <a @click.prevent="deleteTag(tag)"><i class="fa fa-trash"></i></a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row mt-2 mb-3 pb-3 border-bottom-1">
                    <div class="form-check col-12 col-md-3 mb-2 ms-3" v-for="tag in tags" :key="tag.id">
                        <input class="form-check-input" type="checkbox" :value="tag.id" id="flexCheckDefault" v-model="inputTags">
                        <label class="form-check-label" for="flexCheckDefault">
                            {{ tag.name }}
                        </label>
                    </div>
                </div>
            </div>
            <div class="mb-2">
                <button class="btn btn-primary" type="submit" title="Guardar">Guardar</button>
            </div>
        </form>

        <!-- Formulario de imágenes -->
        <div class="ps-md-5 pe-md-5 mt-2">
            <div class="row mb-5">
                <div class="mb-2">
                    <h2>Imágenes</h2>
                    <p>(<span class="fw-bold">¡IMPORTANTE!</span> Guardar los cambios antes de borrar o subir nuevas imágenes)</p>
                </div>
                <div class="col-3 text-center mb-3" v-for="image in item.images" :key="image.id">
                    <img class="img-fluid" :src="baseUrl + '/' + image.path" :alt="product.name">
                    <a @click.prevent="deleteImage(image)">Eliminar <i class="fa fa-trash"></i></a>               
                </div>
    
                <div class="mb-2">
                    <label for="images">Imágenes</label>
                    <input class="form-control" type="file" @change="updateImage" ref="file" multiple>
                </div>
            </div>
        </div>
    </modal>
</template>

<script>
export default {
    auth: true,

    name: 'Edit',

    data() {
        return {
            item: {
                name: '',
                description: '',
                specifications: '',
                price: '',
                stock: '',
                barcode: '',
                category_id: '',
                slug: '',
                status: '',
                discount: '',
                weight: '',
                size: '',
                dimensions: '',
                new: '',
                tags: '',
                content: '',
            },
            images: [],
            inputTags: [],
            products: [],
            singleProduct: {},
            tags: [],
            baseUrl: process.env.baseUrl
        }
    },

    computed: {
        product() {
            return this.singleProduct;
        },

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
        beforeOpen ({params: product}) {
            this.singleProduct = product
            this.getProducts();
        },

        async getProducts() {
            await this.$axios.get('/api/products')
                .then(response => {
                    const data = response.data.data;
                    data.filter(product => {
                        if (product.id === this.singleProduct.id) {
                            this.item = product
                        }
                    })
                })
                .catch(error => {
                    console.log(error);
                })
        },

        async getCategories() {
            await this.$store.dispatch('getCategories')
        },

        async getTags() {
            await this.$axios.get('/api/tags')
                .then(response => {
                    this.tags = response.data.data
                })
        },

        async updateProduct() {
            await this.$axios.put('/api/products/' + this.item.id, {
                name: this.$refs.name.value,
                description: this.item.description,
                specifications: this.$refs.specifications.value,
                price: this.$refs.price.value,
                stock: this.$refs.stock.value,
                barcode: this.$refs.barcode.value,
                category_id: this.$refs.category_id.value,
                slug: this.$refs.slug.value,
                discount: this.$refs.discount.value,
                weight: this.$refs.weight.value,
                size: this.$refs.size.value,
                dimensions: this.$refs.dimensions.value,
                tags: JSON.stringify(this.inputTags),
            }).then((response) => {
                console.log(response);
                this.$notify({ title: 'El producto se ha actualizado correctamente', type: 'success' });
            })
            .catch((error) => {
                console.log(error);
                this.$notify({ title: 'Ha ocurrido un error', type: 'error' });
            })

        },

        deleteTag(tag) {
            const tag_id = tag.id;
            const product_id = this.item.id;
            this.$axios.delete('/api/products/' + product_id + '/tags/' + tag_id)
                .then((response) => {
                    this.getProducts();
                    this.$notify({ title: 'El tag se ha eliminado correctamente', type: 'success' });
                })
                .catch((error) => {
                    console.log(error);
                    this.$notify({ title: 'Ha ocurrido un error', type: 'error' });
                })
            

        },

        deleteImage(image) {
            const image_id = image.id;
            this.$axios.delete('/api/images/' + image_id)
            .then((response) => {
                this.getProducts();
                this.$notify({ title: 'La imagen se ha eliminado correctamente', type: 'success' });
            })
            .catch((error) => {
                console.log(error);
                this.$notify({ title: 'Ha ocurrido un error', type: 'error' });
            });
            
        },

        async updateImage(e) {
            this.images = e.target.files;
            let formData = new FormData();
            const images = this.images;
            for (let i = 0; i < images.length; i++) {
                formData.append('images[]', images[i]);
            }
            formData.append('product_id', this.item.id);
            await this.$axios.post('/api/images', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((response) => {
                console.log(response);
                this.images = [];
                this.$refs.file.value = '';
                this.getProducts();
                this.$notify({title: 'La imagen se ha subido correctamente!'});
            }).catch((error) => {
                console.log(error);
                this.$notify({title: 'Ha ocurrido un error al subir la imagen!'});
            })
            
        }
    },
}
</script>

