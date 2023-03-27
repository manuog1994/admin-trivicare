<template>
    <div>
        <SideNav />
        <NavTop />
        <Search />
        <InvoicesTable />
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
    },

}
</script>

<style>

</style>