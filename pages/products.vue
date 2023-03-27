<template>
    <div>
        <SideNav />
        <NavTop />
        <Search />
        <ProductsTable />
    </div>
</template>

<script>

    export default {
        auth: true,

        components: {
            SideNav: () => import("@/components/headers/SideNav"),
            NavTop: () => import("@/components/headers/NavTop"),
            ProductsTable: () => import("@/components/product/ProductsTable"),
            Search: () => import("@/components/headers/Search"),
        },


        head() {
            return {
                titleTemplate: 'Productos',          
            }
        },
        
    };
</script>

<style>

</style>


