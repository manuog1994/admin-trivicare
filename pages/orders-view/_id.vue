<template>
    <client-only>
        <div class="shop-page-wrapper">
            <OrdersCom />
            <BigLoader v-if="loading" />
        </div>
    </client-only>
</template>

<script>

export default {
    auth: true,
   components: {
        OrdersCom: () => import('@/components/orders/OrdersCom'),
        BigLoader: () => import('@/components/loaders/BigLoader'),
    },

    data() {
        return {
            loading: false,
        };
    },

    beforeMount() {
        this.$root.$on('loading', (data) => {
            this.loading = data;
        });
    },


    head() {
        return {
            titleTemplate: 'Detalle del Pedido | Admin',
        };
    },

}
</script>

<style scoped>

.old {
    text-decoration: line-through;
    color: #999;
}

</style>