<template>
    <div>
        <SideNav />
        <NavTop />
        <Search />
        <div class="main">
            <h2>No hay opciones de configuración disponibles</h2>
        </div>
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