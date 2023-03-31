<template>
    <div class="container pt-3 pb-100">
        <!-- Numero de pedido -->
        <div class="mb-5">
            <div>
                <h2>Detalle del pedido</h2>
            </div>
        </div>
        <!-- Datos del pedido -->
        <div>
            <div class="row">
                <div class="col-lg-4 mb-4">
                    <h4>Datos del pedido</h4>
                    <p>Id pedido: <strong>{{ order.id }}</strong></p>
                    <p v-if="order?.invoice?.invoice_number">Nº Factura: <strong>{{ order?.invoice?.invoice_number }}</strong></p>
                    <p>Fecha: <strong>{{ order.order_date }}</strong></p>
                    <p>Estado: <strong>{{ getState(order) }}</strong></p>
                    <p>Estado de pago: <strong>{{ getPaymentState(order) }}</strong></p>
                    <p>Método de pago: <strong>{{ order.payment_method }}</strong></p>
                    <p>Método de envío: <strong>{{ order.shipping_method }}</strong></p>
                    <p v-if="order?.shipping_method == 'pickup-point' && order.pickup_point != null">Punto de recogida: <strong>{{ order.pickup_point }}</strong></p>
                </div>
                <div class="col-lg-4 mb-4">
                    <h4>Datos del cliente</h4>
                    <p>Nombre: <strong>{{ order.user_profile?.name == 'Guest' ?  order.guest?.name : order.user_profile?.name}} {{ order.user_profile?.lastname == 'Guest' ?  order.guest?.lastname : order.user_profile?.lastname }}</strong></p>
                    <p>Correo: <strong>{{ order.user?.email == 'guest@guest.com' ? order.guest?.email : order.user?.email }}</strong></p>
                    <p>Teléfono: <strong>{{ order.user_profile?.phone == 0 ? order.guest?.phone : order.user_profile?.phone  }}</strong></p>
                    <p>DNI/NIE/NIF: <strong>{{ order.user_profile?.dni == '00000000A' ? order.guest?.dni : order.user_profile?.dni }}</strong></p>
                </div>
                <div class="col-lg-4 mb-4">
                    <h4>Datos de envío</h4>
                    <p>Dirección: <strong>{{ order.user_profile?.address == 'Guest' ? order.guest?.address : order.user_profile?.address}}</strong></p>
                    <p>Ciudad: <strong>{{ order.user_profile?.city == 'Guest' ? order.guest?.city : order.user_profile?.city }}</strong></p>
                    <p>Provincia: <strong>{{ order.user_profile?.state == 'Guest' ? order.guest?.state : order.user_profile?.state }}</strong></p>
                    <p>Código postal: <strong>{{ order.user_profile?.zipcode == 0 ? order.guest?.zipcode : order.user_profile?.zipcode }}</strong></p>
                </div>
            </div>
        </div>
        <!-- Tabla de productos -->
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in this.products" :key="product.id">
                        <td><strong>{{ product.name }}</strong></td>
                        <td>{{ product.cartQuantity }}</td>
                        <td>
                            <span v-if="product.discount < 0">
                                {{ (product.price_base * 1.21).toFixed(2) }} &euro;
                            </span>
                            <span v-else>
                                {{ (discountedPrice(product) * 1.21).toFixed(2) }} &euro;
                            </span>
                        </td>
                        <td>{{ ((product.price_base * product.cartQuantity) * 1.21).toFixed(2) }} &euro;</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- Total del pedido -->
        <div class="pb-100 mb-5">
            <div class="d-flex justify-content-start">
                <div class="mt-2">
                    <h4>Nota del pedido: <strong>{{ order.note }}</strong></h4>
                    <h4 class="mt-2">Factura en papel: <strong>{{ order.invoice_paper == true ? 'Si' : 'No' }}</strong></h4>
                </div>
            </div>
            <div class="d-flex justify-content-end mt-4">
                <div class="d-flex flex-column">
                    <div class="d-flex justify-content-between mb-2">
                        <div class="me-2 fw-bold">Subtotal:</div>
                        <div>{{ (order.total * 1.21).toFixed(2) }} &euro;</div>
                    </div>
                    <div v-if="order.coupon" class="d-flex justify-content-between mb-2">
                        <div class="me-2 fw-bold">Cupón:</div>
                        <div>{{ order.coupon }} </div>
                    </div>
                    <div class="d-flex justify-content-evenly mb-2">
                        <div class="me-2">
                            <p class="fw-bold">Gastos de envío:</p>
                        </div>
                        <div v-if="order.shipping == 0">
                            <p class="text-danger ms-4">Gratis</p>
                        </div>
                        <div v-else>
                            <p class="text-danger ms-4">{{ order.shipping }} &euro;</p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between mt-2">
                        <div class="me-2 fs-4 fw-bold">Total:</div>
                        <div v-if="order.shipping == 0" style="font-size:20px;">{{ (order.total * 1.21).toFixed(2) }} &euro;</div>
                        <div v-else style="font-size:20px;">{{ ((parseFloat(order.total) * 1.21) + parseFloat(order.shipping)).toFixed(2) }} &euro;</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Botones de estado del pedido -->
        <div class="d-flex justify-content-around mt-5 fixed-bottom bg-trivi-purple p-4">
            <button @click="$modal.show('update-state', order)" class="btn bg-trivi-blue text-white">
                <i class="fa fa-truck icon-nav-order"></i>
            </button>
            <button @click="$modal.show('update-pay', order)" class="btn bg-trivi-orange text-white">
                <i class="fa fa-credit-card icon-nav-order"></i>
            </button>
            <button :class="{'disabled': order.invoice?.filename ? false : true}" class="btn bg-trivi-green text-white" @click.prevent="getUrl(order)">
                <i class="fa fa-download icon-nav-order"></i>
            </button>
            <button @click="$router.push({path: '/orders'})" class="btn bg-trivi-red text-white">
                <i class="fa fa-level-up icon-nav-order"></i>
            </button>
        </div>
        <!-- Change status order -->
        <modal name="update-state" width="800px" height=auto>
            <div class="p-5">
                <div>
                    <h2>Cambiar estado del pedido</h2>
                </div>
                <form @submit.prevent="updateStatus" ref="formStatus">
                    <div>
                        <label for="status">Estado</label>
                        <select class="form-select" name="status" id="status" :value="order.status">
                            <option value="1">Recibido</option>
                            <option value="2">Preparando</option>
                            <option value="3">Enviado</option>
                            <option value="4">Entregado</option>
                            <option value="4">Cancelado</option>
                        </select>
                    </div>
                    <div class="d-flex justify-content-end mt-3">
                        <button type="submit" class="btn btn-primary">Enviar</button>
                    </div>
                </form>
            </div>
        </modal>

        <!-- Modal track -->
        <ModalTrack />

        <!-- Change status pay -->
        <modal name="update-pay" width="800px" height=auto>
            <div class="p-5">
                <div>
                    <h2>Cambiar estado de pago</h2>
                </div>
                <form @submit.prevent="updatePaid" ref="formPaid">
                    <div>
                        <label for="pay">Estado</label>
                        <select class="form-select" name="paid" id="paid" :value="order.paid">
                            <option value="Selecciona un estado" disabled selected>Seleccione un estado</option>
                            <option value="1">Pendiente</option>
                            <option value="2">Procesando</option>
                            <option value="3">Pagado</option>
                            <option value="4">Rechazado</option>
                        </select>
                    </div>
                    <div class="d-flex justify-content-end mt-3">
                        <button type="submit" class="btn btn-primary">Enviar</button>
                    </div>
                </form>
            </div>
        </modal>
    </div>
</template>

<script>
export default {
    components: {
        ModalTrack: () => import('@/components/orders/ModalTrack.vue'),
    },

    data() {
        return {
            order: {},
            products: [],
            id: this.$route.params.id,
            users: [],
            user: {},
            status: '',
        }
    },

    mounted() {
        this.getOrder();
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
                            this.products = JSON.parse(order.products);
                        }
                    })
                })
                .catch(error => {
                    //console.log(error)
                    this.$root.$emit('loading', false);
                })
        },

        discountedPrice(product) {
            return product.price_base - (product.price_base * product.discount / 100)
        },

        getState(order) {
            if (order.status == 1) {
                return 'Recibido';
            } else if (order.status == 2) {
                return 'Preparando';
            } else if (order.status == 3) {
                return 'Enviado';
            } else if (order.status == 4) {
                return 'Entregado';
            } else {
                return 'Cancelado';
            }
        },

        getPaymentState(order) {
            if (order.paid == 'PENDIENTE') {
                return 'Pendiente';
            } else if (order.paid == 'PROCESANDO') {
                return 'Procesando';
            } else if (order.paid == 'PAGADO') {
                return 'Pagado';
            } else if (order.paid == 'RECHAZADO') {
                return 'Rechazado';
            } else if (order.paid == 'CONTRAREEMBOLSO') {
                return 'Contra reembolso';
            } else if (order.paid == 'TRANSFERENCIA') {
                return 'Transferencia';
            }
        },


        async getUrl(order){
            //console.log(order);
            this.$root.$emit('loading', true);
            let FileDownload = require('js-file-download');
            await this.$axios.get('/api/invoices/' + order.invoice.id, {
                responseType: 'blob'
            }).then(response => {
                FileDownload(response.data, order.invoice.filename);
                this.$root.$emit('loading', false);
            });
        },

        async updateStatus() {
            this.$root.$emit('loading', true);
            const status = this.$refs.formStatus.status.value;
            if (status == 3) {
                this.$modal.hide('update-state')
                this.$modal.show('modal-track', this.order.id);
                this.$root.$emit('loading', false);
            } else {
                await this.$axios.put('/api/orders/status/' + this.order.id, {
                    status: status
                }).then(() => window.location.reload());
                this.$root.$emit('loading', false);
            }
        },

        async updatePaid() {
            this.$root.$emit('loading', true);
            const paid = this.$refs.formPaid.paid.value;
            await this.$axios.put('/api/orders/paid/' + this.order.id, {
                paid: paid
            }).then(() => {
                window.location.reload()
                this.$root.$emit('loading', false);
            });
            
        },

    },

}
</script>

<style>
.icon-nav-order {
    font-size: 30px;
}
</style>