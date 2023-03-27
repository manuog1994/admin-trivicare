<template>
    <div>
        <SideNav />
        <NavTop />
        <Search />
        <Registeds />
    </div>
</template>

<script>

    export default {
        auth: true,

        components: {
            SideNav: () => import("@/components/headers/SideNav"),
            NavTop: () => import("@/components/headers/NavTop"),
            Search: () => import("@/components/headers/Search"),
            Registeds: () => import("@/components/clients/Registeds"),
        },


        head() {
            return {
                titleTemplate: 'Clientes',          
            }
        },
        
    };
</script>

<style>

</style>


