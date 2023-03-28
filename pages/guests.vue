<template>
    <div>
        <SideNav />
        <NavTop />
        <Search />
        <Guests />
    </div>
</template>

<script>

    export default {
       components: {
            SideNav: () => import("@/components/headers/SideNav"),
            NavTop: () => import("@/components/headers/NavTop"),
            Search: () => import("@/components/headers/Search"),
            Guests: () => import("@/components/clients/Guests"),
        },


        head() {
            return {
                titleTemplate: 'Invitados',          
            }
        },
        
    };
</script>

<style>

</style>


