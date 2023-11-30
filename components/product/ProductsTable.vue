<template>
    <div>
        <div class="main">
            <!-- Botón para añadir un nuevo producto -->
            <div v-if="edit == false && newProduct == false" class="d-flex justify-content-end mb-4">
                <button @click="onClickNew" class="btn btn-primary">
                    <i class="fa fa-plus"></i>
                </button>
            </div>
            <!-- Tabla con todos los productos -->
            <table class="table" v-if="edit == false && newProduct == false">
                <thead>
                    <tr>
                    <th scope="col">Producto(s)</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Vendido(s)</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody v-if="products.length > 0">
                    <tr v-for="product in paginatedItems" :key="product.id">
                    <td><n-link :to="`/product/${product.slug}`">{{ product.name }}</n-link></td>
                    <td>{{ product.price }} &euro;</td>
                    <td v-if="product.sold > 0">{{ product.sold }}</td>
                    <td v-else>-</td>
                    <td v-if="product.stock > 0">{{ product.stock }}</td>
                    <td v-else>-</td>
                    <td>
                        <select class="form-select" name="status" @change="updateStatus(product)">
                            <option>{{ product.status }}</option>
                            <option v-if="product.status === 'Borrador'" value="Publicado">Publicado</option>
                            <option v-else value="Borrador">Borrador</option>
                        </select>
                    </td>
                    <td>
                        <div>
                            <button title="Editar producto" @click="onClick(product)" class="btn btn-warning btn-sm text-white">
                                <i class="fa fa-edit"></i>
                            </button>
                            <button title="Eliminar producto" class="btn btn-danger btn-sm text-white" @click="destroy(product.id)">
                                <i class="fa fa-trash"></i>
                            </button>
                        </div>
                    </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <td colspan="8">No hay productos.</td>
                    </tr>
                </tbody>
            </table>
            <!-- paginación -->
            <div v-if="edit == false && newProduct == false" class="d-flex justify-content-center mt-2">
                <pagination v-model="page" :records="products.length" :perPage="perPage" @paginate="myCallback"></pagination>
            </div>
            <!-- Editor de productos -->
            <EditProduct v-if="edit == true" :product="product" />
            <!-- Crear nuevo producto -->
            <CreateProduct v-if="newProduct == true" />
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
    components: {
        EditProduct: () => import('~/components/product/EditProduct.vue'),
        CreateProduct: () => import('~/components/product/CreateProduct.vue'),
    },
    data() {
        return {
            products: [],
            status: '',
            productId: '',
            yesterday: [],
            today: [],
            index: [],
            store: [],
            productsVisitors: [],
            cart: [],
            checkout: [],
            product : [],
            edit: false,
            newProduct: false,
            page: 1,
            perPage: 10,
        }
    },

    beforeMount() {
        this.$root.$on('closeAdd', (data) => {
            this.newProduct = data;
        })
        this.$root.$on('closeEdit', (data) => {
            this.edit = data;
        })
    },

    async mounted() {
        await this.getProducts();
    },

    computed: {
        paginatedItems () {
            const start = (this.page - 1) * this.perPage
            return this.products.slice(start, start + this.perPage)
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

        onClick(product) {
            this.$root.$emit('loading', true);
            this.edit = true;
            this.product = product;
        },

        onClickNew() {
            this.$root.$emit('loading', true);
            this.newProduct = true;
        },


        async updateStatus(product) {
            if (product.status === 'Publicado') {
            await this.$axios.put('/api/products/status/' + product.id, {
                status: 'Borrador',
            }).then(res => {
                this.$notify({title: 'Estado del producto actualizado'})});
            } else {
                await this.$axios.put('/api/products/status/' + product.id, {
                status: 'Publicado',
             }).then(res => {
                 this.$notify({title: 'Estado del producto actualizado'})});
                }
            
                window.location.reload(true);

        },

        destroy(id) {
            Swal.fire({
                title: '¿Estás seguro?',
                text: "¡No podrás revertir esto!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '¡Sí, bórralo!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$axios.delete('/api/products/' + id)
                    .then(res => {
                        this.$notify({title: 'Producto eliminado'})
                        window.location.reload(true);
                    })
                }
            })
        },

        myCallback(page) {
            this.page = page;
        }
    },
}
</script>
