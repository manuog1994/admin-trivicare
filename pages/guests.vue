<template>
    <div>
        <SideNav />
        <NavTop />
        <Search />
        <Guests />
        <BigLoader v-if="loading"/>
    </div>
</template>

<script>

    export default {
       components: {
            SideNav: () => import("@/components/headers/SideNav"),
            NavTop: () => import("@/components/headers/NavTop"),
            Search: () => import("@/components/headers/Search"),
            Guests: () => import("@/components/clients/Guests"),
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
                titleTemplate: 'Invitados',          
            }
        },
        
    };
</script>

<style>

</style>


