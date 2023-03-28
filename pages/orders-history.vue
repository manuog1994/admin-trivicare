<template>
    <div>
        <SideNav />
        <NavTop />
        <Search />
        <OrdersHistory />    
    </div>
</template>

<script>
export default {
    components: {
        SideNav: () => import("@/components/headers/SideNav.vue"),
        OrdersHistory: () => import("@/components/orders/OrdersHistory.vue"),
        Search: () => import("@/components/headers/Search.vue"),
        NavTop: () => import("@/components/headers/NavTop.vue"),
    },

}
</script>

<style>

</style>