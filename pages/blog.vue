<template>
    <div>
        <SideNav />
        <NavTop />
        <Search />
        <BlogTable />
        <BigLoader v-if="loading" />
    </div>
</template>

<script>


    export default {
        auth: true,
        components: {
            SideNav: () => import("@/components/headers/SideNav"),
            NavTop: () => import("@/components/headers/NavTop"),
            Search: () => import("@/components/headers/Search"),
            BigLoader: () => import("@/components/loaders/BigLoader"),
            BlogTable: () => import("@/components/blog/BlogTable"),
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
                titleTemplate: 'Blog',          
            }
        },
        
    };
</script>




