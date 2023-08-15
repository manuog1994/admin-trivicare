<template>
    <div class="container-fluid mt-5">
        <div class="mb-4">
            <h2>Ventas</h2>
        </div>

        <div class="d-flex justify-content-around">
            <div class="card bg-trivi-blue text-white shadow" style="width: 18rem; height: 20vh;">
                <div class="card-body">
                    <h5 class="card-title text-white">Mes Anterior</h5>
                    <p class="card-text fa-2x text-white">{{ ordersLastMonth }} Ventas</p>
                    <p class="text-end font-big">{{ salesLastMonth.toFixed(2) }} €</p>

                </div>
            </div>
            <div class="card bg-trivi-purple text-white shadow" style="width: 18rem; height: 20vh;">
                <div class="card-body">
                    <h5 class="card-title text-white">Mes Actual</h5>
                    <p class="card-text fa-2x text-white">{{ ordersThisMonth }} Ventas</p>
                    <p class="text-end font-big">{{ salesThisMonth.toFixed(2) }} €</p>
                </div>
            </div>
            <div class="card bg-trivi-green text-white shadow" style="width: 18rem; height: 20vh;">
                <div class="card-body">
                    <h5 class="card-title text-white">Este Año</h5>
                    <p class="card-text fa-2x text-white">{{ orders }} Ventas</p>
                    <p class="text-end font-big">{{ salesThisYear.toFixed(2) }} €</p>
                </div>
            </div>
        </div>

        <div class="mt-5">
            <h3>Últimos pedidos</h3>
        </div>
        <div class="mt-4 mb-5">
            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Cliente</th>
                        <th>Pago</th>
                        <th>Importe</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="order in lastFiveOrders" :key="order.id">
                        <!-- Mostrar la fecha en formato dd-mm-YY hh:mm:ii -->
                        <td>{{ moment(order.created_at).locale('es').format('L') }}</td>
                        <td>{{ order.name }} {{ order.lastname }}</td>
                        <td>{{ order.paid }}</td>
                        <td>{{ (order.total * 1.21).toFixed(2) }} €</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        data() {
            return {
                ordersThisMonth: 0,
                salesThisMonth: 0,
                ordersLastMonth: 0,
                salesLastMonth: 0,
                orders: 0,
                salesThisYear: 0,
                lastFiveOrders: [],
                moment,
            }
        },

        mounted() {
            this.getOrders();
        },

        methods: {
            async getOrders() {
                const response = await this.$axios.get('/api/orders' );
                const lastMonth = new Date().getMonth() - 1;
                const month = new Date().getMonth();
                const year = new Date().getFullYear();
                this.ordersLastMonth = response.data.data.filter(order => new Date(order.created_at).getMonth() === lastMonth && new Date(order.created_at).getFullYear() === year && order.paid === 'PAGADO').length;
                this.ordersThisMonth = response.data.data.filter(order => new Date(order.created_at).getMonth() === month && new Date(order.created_at).getFullYear() === year && order.paid === 'PAGADO').length;
                this.orders = response.data.data.filter(order => new Date(order.created_at).getFullYear() === year && order.paid === 'PAGADO').length;
                this.salesLastMonth = response.data.data.filter(order => new Date(order.created_at).getMonth() === lastMonth && new Date(order.created_at).getFullYear() === year && order.paid === 'PAGADO').reduce((acc, order) => acc + Number((Number((order.total * 1.21)) + Number(order?.shipping)).toFixed(2)), 0);
                this.salesThisMonth = response.data.data.filter(order => new Date(order.created_at).getMonth() === month && new Date(order.created_at).getFullYear() === year && order.paid === 'PAGADO').reduce((acc, order) => acc + Number((Number((order.total * 1.21)) + Number(order?.shipping)).toFixed(2)), 0);
                this.salesThisYear = response.data.data.filter(order => new Date(order.created_at).getFullYear() === year && order.paid === 'PAGADO').reduce((acc, order) => acc + Number((Number((order.total * 1.21)) + Number(order?.shipping)).toFixed(2)), 0);
                this.lastFiveOrders = response.data.data.filter(order => order).slice(0, 5);
                this.$root.$emit('loading', false);
            },
        },
    }
</script>

<style scoped>
    .font-big {
        padding-top: 20px;
        font-size: 3rem;
        font-weight: 800;
        color: rgba(255, 255, 255, 0.701);
    }
</style>