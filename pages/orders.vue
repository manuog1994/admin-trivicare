<template>
    <div>
        <SideNav />
        <NavTop />
        <Search />
        <Orders />    
    </div>
</template>

<script>
export default {
    components: {
        SideNav: () => import("@/components/headers/SideNav.vue"),
        Orders: () => import("@/components/orders/Orders.vue"),
        Search: () => import("@/components/headers/Search.vue"),
        NavTop: () => import("@/components/headers/NavTop.vue"),
    },

}
</script>

<style>

</style>