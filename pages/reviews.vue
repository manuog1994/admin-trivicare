<template>
    <div>
        <SideNav />
        <NavTop />
        <Search />
        <ReviewTable v-if="!newReview" />
        <NewReview v-if="newReview"/>
        <BigLoader v-if="loading"/>
    </div>
</template>

<script>

    export default {

        data() {
            return {
                newReview: false,
                loading: true,
            }
        },

        components: {
            SideNav: () => import("@/components/headers/SideNav"),
            NavTop: () => import("@/components/headers/NavTop"),
            Search: () => import("@/components/headers/Search"),
            ReviewTable: () => import("@/components/reviews/ReviewTable"),
            NewReview: () => import("@/components/reviews/NewReview"),
            BigLoader: () => import("@/components/loaders/BigLoader"),
        },

        beforeMount() {
            this.$root.$on('newReview', (data) => {
                this.newReview = data
            });

            this.$root.$on('loading', (data) => {
                this.loading = data;
            });
        },


        head() {
            return {
                titleTemplate: 'Valoraciones',          
            }
        },
        
    };
</script>