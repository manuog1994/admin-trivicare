<template>
    <div>
        <SideNav />
        <NavTop />
        <Search />
        <CouponsTable/>
    </div>
</template>

<script>

    export default {
        auth: true,

        components: {
            SideNav: () => import("@/components/headers/SideNav"),
            NavTop: () => import("@/components/headers/NavTop"),
            CouponsTable: () => import("@/components/coupons/CouponsTable"),
            Search: () => import("@/components/headers/Search"),
        },


        head() {
            return {
                titleTemplate: 'Cupones',          
            }
        },
        
    };
</script>

<style>

</style>


