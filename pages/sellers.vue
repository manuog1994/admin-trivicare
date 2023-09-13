<template>
    <div>
        <SideNav />
        <NavTop />
        <Search />
        <SellersTable />
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
            SellersTable: () => import("@/components/sellers/SellersTable"),
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


