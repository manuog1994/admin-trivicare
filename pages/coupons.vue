<template>
    <div>
        <SideNav />
        <NavTop />
        <Search />
        <CouponsTable/>
        <BigLoader v-if="loading"/>
    </div>
</template>

<script>
    export default {
        components: {
            SideNav: () => import("@/components/headers/SideNav"),
            NavTop: () => import("@/components/headers/NavTop"),
            CouponsTable: () => import("@/components/coupons/CouponsTable"),
            Search: () => import("@/components/headers/Search"),
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
                titleTemplate: 'Cupones',          
            }
        },
        
    };
</script>

<style>

</style>


