<template>
    <div>
        <SideNav />
        <NavTop />
        <Search />
        <Orders />
        <BigLoader v-if="loading"/>    
    </div>
</template>

<script>
export default {
    components: {
        SideNav: () => import("@/components/headers/SideNav.vue"),
        Orders: () => import("@/components/orders/Orders.vue"),
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