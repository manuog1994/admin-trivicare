<template>
    <div>
        <SideNav />
        <NavTop />
        <Search />
        <Registeds />
        <BigLoader v-if="loading"/>
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
            BigLoader: () => import("@/components/loaders/BigLoader"),
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


        head() {
            return {
                titleTemplate: 'Clientes',          
            }
        },
        
    };
</script>

<style>

</style>


