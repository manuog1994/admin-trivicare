<template>
    <div>
        <SideNav />
        <NavTop />
        <Search />
        <OrdersHistory />
        <BigLoader v-if="loading"/>    
    </div>
</template>

<script>
export default {
    components: {
        SideNav: () => import("@/components/headers/SideNav.vue"),
        OrdersHistory: () => import("@/components/orders/OrdersHistory.vue"),
        Search: () => import("@/components/headers/Search.vue"),
        NavTop: () => import("@/components/headers/NavTop.vue"),
        BigLoader: () => import("@/components/loaders/BigLoader.vue"),
    },

    data() {
        return {
            loading: true,
        }
    },

    beforeMount() {
        this.$root.$on('loading', (data) => {
            this.loading = data;
        });
    },

}
</script>

<style>

</style>