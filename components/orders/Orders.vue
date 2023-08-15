<template>
    <div>
        <div class="main">
            <div>
                <div class="d-flex justify-content-end">
                    <button @click="$router.push({path: '/orders-history'})" class="btn bg-trivi-red text-white mb-2">
                        <i class="fa fa-history"></i>
                        Historial de pedidos
                    </button>
                </div>
                <div>
                    <h2>Pedidos Recientes</h2>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="">Cliente</th>
                        <th scope="">Fecha</th>
                        <th scope="">Pago</th>
                        <th scope="">Envío</th>
                        <th scope="">Estado</th>
                        <th scope="">Total</th>
                        <th scope="">Acciones</th>
                        </tr>
                    </thead>
                    <tbody v-if="orders.length > 0">
                        <tr v-for="order in paginatedItems" :key="order.id">
                            <td v-if="order.name != null">{{ order.name }} {{ order.lastname }}</td>
                            <td v-else-if="order.guest == null">{{ order.user_profile?.name }} {{ order.user_profile?.lastname }}</td>
                            <td v-else>{{ order.guest?.name }} {{ order.guest?.lastname }}</td>
                            <td>{{ order.order_date }}</td>
                            <td class=" text-uppercase">{{ order.payment_method }}</td>
                            <td class=" text-uppercase">{{ order.shipping_method }}</td>
                            <td v-if="order.paid == 'PENDIENTE'">Pendiente</td>
                            <td v-if="order.paid == 'PROCESANDO'">Procesando</td>
                            <td v-if="order.paid == 'PAGADO'">Pagado</td>
                            <td v-if="order.paid == 'RECHAZADO'">Rechazado</td>
                            <td>{{ (Number((order.total * 1.21)) + Number(order?.shipping)).toFixed(2) }} &euro;</td>
                            <td>
                                <n-link :to="`/orders-view/${order.id}`" class="btn bg-trivi-blue">
                                    <i class="pe-7s-look"></i>
                                </n-link>
                                <n-link :to="`/order-edit/${order.id}`" class="btn bg-trivi-orange">
                                    <i class="fa fa-edit"></i>
                                </n-link>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="6">No hay pedidos pendientes.</td>
                        </tr>
                    </tbody>
                </table>
                <!-- paginación -->
                <div class="d-flex justify-content-center mt-2">
                    <pagination v-model="page" :records="orders.length" :perPage="parseInt(perPage)" @paginate="myCallback"></pagination>
                </div>
            </div>
        </div>
     </div>
</template>

<script>
export default {
    data() {
        return {
            orders: [],
            order: {},
            pagination: {},
            page: 1,
            perPage: 10,
        }
    },

    mounted() {
        this.getOrders();
    },

    computed: {
        paginatedItems () {
            const start = (this.page - 1) * this.perPage
            return this.orders.slice(start, start + this.perPage)
        }
    },

    methods: {
        async getOrders() {
            const response = await this.$axios.get('/api/orders' );
            this.orders = response.data.data;
            this.$root.$emit('loading', false);
        },

        myCallback(page) {
            this.page = page;
        }
    },
}
</script>
