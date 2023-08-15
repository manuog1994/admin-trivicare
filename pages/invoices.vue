<template>
    <div>
        <SideNav />
        <NavTop />
        <Search />
        <InvoicesTable />
        <BigLoader v-if="loading"/>
    </div>
</template>

<script>
export default {
    auth: true,
    components: {
        SideNav: () => import("@/components/headers/SideNav.vue"),
        Search: () => import("@/components/headers/Search.vue"),
        NavTop: () => import("@/components/headers/NavTop.vue"),
        InvoicesTable: () => import("@/components/invoices/InvoicesTable.vue"),
        BigLoader: () => import("@/components/loaders/BigLoader.vue"),
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

}
</script>

<style>

</style>