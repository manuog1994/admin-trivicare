<template>
    <div>
        <SideNav />
        <NavTop />
        <Search />
        <EditOrder />
        <BigLoader v-if="loading" />
    </div>
</template>

<script>

export default {
    auth: true,
   components: {
        SideNav: () => import('@/components/headers/SideNav'),
        NavTop: () => import('@/components/headers/NavTop'),
        Search: () => import('@/components/headers/Search'),
        EditOrder: () => import('@/components/orders/EditOrder'),
        BigLoader: () => import('@/components/loaders/BigLoader'),
    },

    data() {
        return {
            loading: false,
        };
    },

    beforeMount() {
        this.$root.$on('loading', (data) => {
            this.loading = data;
        });
    },


    head() {
        return {
            titleTemplate: 'Editar Pedido | Admin',
        };
    },

}
</script>

<style scoped>

.old {
    text-decoration: line-through;
    color: #999;
}

</style>