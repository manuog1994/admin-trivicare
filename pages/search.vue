<template>
    <div>
        <SideNav />
        <NavTop />
        <Search />
        <Result />
    </div>
</template>

<script>
export default {
    components: {
        SideNav: () => import('~/components/headers/SideNav.vue'),
        NavTop: () => import('~/components/headers/NavTop.vue'),
        Search: () => import('~/components/headers/Search.vue'),
        Result: () => import('~/components/headers/Results.vue')
    }

}
</script>

<style>

</style>