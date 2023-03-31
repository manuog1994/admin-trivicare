<template>
    <div class="main">
        <div class="row mt-4 mb-2">
            <div class="col-12">
                <h3>Editar Pedido</h3>
            </div>
            <div>
                <p class="m-0">Nombre del cliente: <strong>{{ order.user_profile?.name == 'Guest' ? order.guest?.name : order.user_profile?.name }} {{ order.user_profile?.lastname == 'Guest' ? order.guest?.lastname : order.user_profile?.lastname }}</strong></p>
                <p class="m-0">Id pedido: <strong>{{ order.id }}</strong></p>
                <p class="m-0" v-if="order.invoice?.id">Factura: <strong>{{ order.invoice?.invoice_number }}</strong></p>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="mt-2">
                    <h4>
                        Productos del pedido actual
                    </h4>
                </div>
                <div class="mt-4">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="">Producto</th>
                                <th scope="">Cantidad</th>
                                <th scope="">Precio</th>
                                <th scope="">Acciones</th>
                            </tr>
                        </thead>
                        <tbody v-if="productsOrder.length > 0">
                            <tr v-for="product in productsOrder" :key="product.id">
                                <td>{{ product.name }}</td>
                                <td>
                                    <div class="row">
                                        <div class="col-12">
                                            <button @click="decrementProduct(product)" class="btn btn-outline-secondary" type="button" id="button-minus">-</button>
                                            <span class="p-2 border">{{ product.cartQuantity }}</span>
                                            <button @click="incremetProduct(product)" class="btn btn-outline-secondary" type="button" id="button-plus">+</button>
                                        </div>
                                    </div>
                                </td>
                                <td>{{ product.price }}</td>
                                <td>
                                    <button @click="deleteProduct(product)" class="btn bg-trivi-red text-white">
                                        <i class="fa fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <div v-if="order.coupon" class="d-flex justify-content-end">
                    <h5>Descuento: {{ order.coupon }}</h5>
                </div>
                <div v-if="order.shipping && post_shipping == 0" class="d-flex justify-content-end">
                    <h5>Envio: {{ getTotal() > 40 ? 'Gratis' : order.shipping  }}</h5>
                </div>
                <div v-if="getTotal() < 40 && order.shipping == 0 && order.shipping_method != 'pickup-point'" class="mb-2">
                    <label for="">Seleccione el envío:</label>
                    <select class="form-select" name="selectStatus" ref="selectStatus" v-model="post_shipping">
                        <option value="0" disabled selected >Seleccione un envío</option>
                        <option value="4.95">Estándar 4.95 &euro;</option>
                        <option value="5.95">Rápido 5.95 &euro;</option>
                        <option value="6.95">Urgente 6.95 &euro;</option>
                    </select>
                </div>
                <div class="d-flex justify-content-end">
                    <h4>Total: {{  getTotal() == 'NaN' ? (order.total * 1.21).toFixed(2) : getTotal()  }}</h4>
                </div>
            </div>
            <div class="col-12">
                <div class="mb-2">
                    <h4>Productos</h4>
                </div>
                <div>
                    <div class="mb-3">
                        <select class="form-select" name="selectProduct" ref="selectProduct">
                            <option value="0" disabled selected >Seleccione un producto</option>
                            <option v-for="product in products" :key="product.id" :value="product.id">{{ product.name }}</option>
                        </select>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button @click="addUpdateProduct" class="btn bg-trivi-green">Añadir producto</button>
                    </div>
                </div>
            </div>
            <div class="col-12 mt-4">
                <div class="text-center text-bg-danger rounded shadow p-3">
                    <p class=" text-white">Antes de confirmar el pedido revisa que el total que se muestra es el correcto, ya que el pedido se generará con ese monto. Si no es así pulsa en cambia la cantidad del primer producto con los botones y vuelve a dejarlo como estaba anteriormente, esto actualizará la variable del total.</p>
                </div>
                <div class=" d-flex justify-content-center mt-4">
                    <button @click="sendModifications" class="btn bg-trivi-blue">Actualizar pedido</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';
export default {
    data() {
        return {
            id: this.$route.params.id,
            order: {},
            productsOrder: [],
            products: [],
            addProduct: '',
            post_shipping: 0,
            total: 0
        }
    },

    mounted() {
        this.getOrder();
        this.getProducts();
    },

    methods: {
        async getOrder() {
            this.$root.$emit('loading', true);
            await this.$axios.get('/api/orders?filter[id]=' + this.id)
                .then(response => {
                    this.$root.$emit('loading', false);
                    const orders = response.data.data;
                    orders.map(order => {
                        if (order.id == this.id) {
                            this.order = order;
                            this.productsOrder = JSON.parse(order.products);
                        }
                    })
                })
                .catch(error => {
                    //console.log(error)
                    this.$root.$emit('loading', false);
                })
        },

        async getProducts() {
            this.$root.$emit('loading', true);
            await this.$axios.get('/api/products')
                .then(response => {
                    this.$root.$emit('loading', false);
                    this.products = response.data.data;
                })
                .catch(error => {
                    //console.log(error)
                    this.$root.$emit('loading', false);
                })
        },

        addUpdateProduct() {
            const selectProduct = this.$refs.selectProduct;
            const product = this.products.find(product => product.id == selectProduct.value);
            const productOrder = this.productsOrder.find(product => product.id == selectProduct.value);
            if (productOrder) {
                productOrder.cartQuantity += 1;
                productOrder.total = productOrder.cartQuantity * productOrder.price_base;
                //this.getTotal();
            } else {
                product.cartQuantity = 1;
                product.total = product.cartQuantity * product.price_base;
                this.productsOrder.push({...product});
                //this.getTotal();
            }
        },

        incremetProduct(product) {
            console.log(product)
            product.cartQuantity += 1;
            // actualizar el total
            product.total = product.cartQuantity * product.price_base;
        },

        decrementProduct(product) {
            if (product.cartQuantity > 1) {
                product.cartQuantity -= 1;
                // actualizar el total
                product.total = product.cartQuantity * product.price_base;
            } else {
                this.deleteProduct(product);
            }
        },

        deleteProduct(product) {
            const index = this.productsOrder.indexOf(product);
            this.productsOrder.splice(index, 1);
        },

        getTotal() {
            // Crear una funcion que sume todos los totales de los productos de un array
            const sum = this.productsOrder.reduce((acc, product) => acc + product.total, 0);
            this.total = sum;
            if((sum * 1.21) < 40) {
                return ((sum * 1.21) + parseFloat(this.order.shipping) + parseFloat(this.post_shipping)).toFixed(2);
            } else {
                return (sum * 1.21).toFixed(2);
            }
        },

        async sendModifications() {
            // Mostrar un mensaje de confirmación
            Swal.fire({
                title: '¿Estás seguro de que quieres guardar los cambios?',
                text: "¡Se borrará la factura anterior y se enviara la rectificada al cliente!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '¡Sí, actualizar!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    this.$root.$emit('loading', true);
                    await this.$axios.put('/api/order-modification', {
                        id: this.id,
                        products: JSON.stringify(this.productsOrder),
                        total: this.getTotal(),
                        shipping: this.post_shipping == 0 ? this.order.shipping : this.post_shipping,
                    })
                        .then(response => {
                            this.$root.$emit('loading', false);
                            Swal.fire({
                                icon: 'success',
                                title: '¡Modificación realizada!',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            this.getOrder();
                        })
                        .catch(error => {
                            //console.log(error)
                            this.$root.$emit('loading', false);
                            console.log(error)
                        }
                    )
                }
            })
        }
    },
}
</script>

<style>

</style>