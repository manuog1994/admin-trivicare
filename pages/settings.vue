<template>
    <div>
        <SideNav />
        <NavTop />
        <Search />
    </div>
</template>

<script>

    export default {
        auth: true,

        components: {
            SideNav: () => import("@/components/headers/SideNav"),
            NavTop: () => import("@/components/headers/NavTop"),
            Search: () => import("@/components/headers/Search"),
        },


        head() {
            return {
                titleTemplate: 'Ajustes',          
            }
        },
        
    };
</script>