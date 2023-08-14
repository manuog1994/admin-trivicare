<template>
    <div class="mt-5">
        <div class="mb-4">
            <h2>Ventas</h2>
        </div>

        <div class="d-flex justify-content-around">
            <div class="card bg-trivi-blue text-white shadow" style="width: 18rem; height: 20vh;">
                <div class="card-body">
                    <h5 class="card-title text-white">Mes Anterior</h5>
                    <p class="card-text fa-2x text-white">{{ ordersLastMonth }} Ventas</p>
                </div>
            </div>
            <div class="card bg-trivi-purple text-white shadow" style="width: 18rem; height: 20vh;">
                <div class="card-body">
                    <h5 class="card-title text-white">Mes Actual</h5>
                    <p class="card-text fa-2x text-white">{{ ordersThisMonth }} Ventas</p>
                    <p class="text-white text-end fa-2x">
                        <span v-if="(((ordersThisMonth - ordersLastMonth) / ordersThisMonth) * 100).toFixed(2) > 0">
                            <i class=" fa fa-arrow-circle-o-up"></i>
                            {{ (((ordersThisMonth - ordersLastMonth) / ordersThisMonth) * 100).toFixed(2) }}%
                        </span>
                        <span v-else-if="(((ordersThisMonth - ordersLastMonth) / ordersThisMonth) * 100).toFixed(2) < 0">
                            <i class=" fa fa-arrow-circle-o-down"></i>
                            {{ (((ordersThisMonth - ordersLastMonth) / ordersThisMonth) * 100).toFixed(2) }}%
                        </span>
                    </p>
                    <!-- Mostrar porcentaje de diferencia entre el mes actual y el mes pasado -->

                </div>
            </div>
            <div class="card bg-trivi-green text-white shadow" style="width: 18rem; height: 20vh;">
                <div class="card-body">
                    <h5 class="card-title text-white">Este Año</h5>
                    <p class="card-text fa-2x text-white">{{ orders }} Ventas</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ordersThisMonth: 0,
                ordersLastMonth: 0,
                orders: 0,
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
                this.$root.$emit('loading', false);
            },
        },
    }
</script>