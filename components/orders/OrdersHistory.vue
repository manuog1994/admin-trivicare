<template>
    <div class="main">
        <div>
            <div class="d-flex justify-content-end">
                <button @click="$router.push({path: '/orders'})" class="btn bg-trivi-green text-white mb-2">
                    <i class="fa fa-check"></i>
                    Pedidos recientes
                </button>
            </div>
            <div>
                <h2>Historial de pedidos</h2>
            </div>
        </div>
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="">Cliente</th>
                    <th scope="">Fecha</th>
                    <th scope="">Estado</th>
                    <th scope="">Acciones</th>
                    </tr>
                </thead>
                <tbody v-if="orders.length > 0">
                    <tr v-for="order in paginatedItems" :key="order.id">
                        <td v-if="order.guest == null">{{ order.user_profile?.name }} {{ order.user_profile?.lastname }}</td>
                        <td v-else>{{ order.guest?.name }} {{ order.guest?.lastname }}</td>
                        <td>{{ order.order_date }}</td>
                        <td v-if="order.status == 4">Completado</td>
                        <td v-if="order.status == 5">Cancelado</td>
                        <td>
                            <n-link :to="`/orders-view/${order.id}`" class="btn bg-trivi-blue">
                                <i class="pe-7s-look"></i>
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
                <pagination v-model="page" :records="orders.length" :perPage="perPage" @paginate="myCallback"></pagination>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    auth: true,

    data() {
        return {
            orders: [],
            users: [],
            order: {},
            user: {},
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
            const response = await this.$axios.get('/api/orders?history[status]=' );
            this.orders = response.data.data;
        },

        myCallback(page) {
            this.page = page;
        },
    },
}
</script>

<style>

</style>