<template>
    <div>
        <div class=" overflow-auto">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Producto(s)</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Descuento</th>
                    <th scope="col">Vendido(s)</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody v-if="products.length > 0">
                    <tr v-for="product in products" :key="product.id">
                    <th scope="row">{{ product.id }}</th>
                    <td><n-link :to="`/product/${product.slug}`">{{ product.name }}</n-link></td>
                    <td>{{ product.price }} &euro;</td>
                    <td v-if="product.discount > 0">{{ product.discount }} %</td>
                    <td v-else>-</td>
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
                            <button title="Editar producto" @click="onClick(product)" class="btn btn-warning btn-sm">Editar</button>
                            <button title="Eliminar producto" class="btn btn-danger btn-sm" @click="destroy(product.id)">Eliminar</button>
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
            <Edit />
        </div>
    </div>
</template>

<script>
import Edit  from './Edit.vue'
import Swal from 'sweetalert2'

export default {
    auth: true,

    components: {
        Edit,
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
        }
    },

    async mounted() {
        await this.getProducts();
        await this.getVisits();
    },

    methods: {
        async getProducts() {
            await this.$axios.get('/api/products')
                .then(response => {
                    this.products = response.data.data;
                })
        },

        async getVisits() {
            await this.$axios.get('/api/visits')
                .then(response => {
                    const visits = response.data;
                    //filtra las visitas de ayer
                    this.yesterday = visits.filter(visit => {
                        const date = new Date(visit.created_at);
                        let yesterday = new Date();
                        yesterday.setDate(yesterday.getDate() - 1);
                        return date.toDateString() == yesterday.toDateString();
                    });
                    //filtra las visitas de hoy
                    this.today = visits.filter(visit => {
                        const date = new Date();
                        const today = new Date(visit.created_at);
                        return date.toDateString() == today.toDateString();
                    });
                    //filtra las visitas de la tienda
                    this.store = visits.filter(visit => {
                        if(visit.page_visited == 'store') {
                            return visit;
                        }
                    })
                    //filtra las visitas de los productos
                    this.shop = visits.filter(visit => {
                        if(visit.page_visited == 'shop') {
                            return visit;
                        }
                    })
                    //filtra las visitas del carrito
                    this.cart = visits.filter(visit => {
                        if(visit.page_visited == 'cart') {
                            return visit;
                        }
                    })
                    //filtra las visitas de la caja
                    this.checkout = visits.filter(visit => {
                        if(visit.page_visited == 'checkout') {
                            return visit;
                        }
                    })
                    //filtra las visitas de los productos
                    this.productsVisitors = visits.filter(visit => {
                        if(visit.page_visited != 'store' && visit.page_visited != 'shop' && visit.page_visited != 'cart' && visit.page_visited != 'checkout' && visit.page_visited != 'index') {
                            return visit;
                        }
                    })
                })
        },

        onClick(product) {
            this.$modal.show('edit', product);
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
    },
}
</script>
