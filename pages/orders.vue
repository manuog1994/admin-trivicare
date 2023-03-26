<template>
    <div class="d-flew flex-row">
        <div class="flex-fill">
            <SideNav />
            <NavTop />
            <Search />
            <Orders />    
        </div>
    </div>
</template>

<script>
export default {
    auth: true,
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