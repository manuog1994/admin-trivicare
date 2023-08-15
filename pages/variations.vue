<template>
    <div>
        <SideNav />
        <NavTop />
        <Search />
        <VariationsTable />
        <BigLoader v-if="loading" />
    </div>
</template>

<script>

    export default {
        auth: true,
        components: {
            SideNav: () => import("@/components/headers/SideNav"),
            NavTop: () => import("@/components/headers/NavTop"),
            VariationsTable: () => import("@/components/variations/VariationsTable"),
            Search: () => import("@/components/headers/Search"),
            BigLoader: () => import("@/components/loaders/BigLoader"),
        },

        data() {
            return {
                loading: false,
            }
        },


        beforeMount() {
            this.loading = true;
            this.$root.$on('loading', (data) => {
                this.loading = data;
            })
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


