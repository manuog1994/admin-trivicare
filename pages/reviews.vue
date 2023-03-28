<template>
    <div>
        <SideNav />
        <NavTop />
        <Search />
        <ReviewTable v-if="!newReview" />
        <NewReview v-if="newReview"/>
    </div>
</template>

<script>

    export default {

        data() {
            return {
                newReview: false,
            }
        },

        components: {
            SideNav: () => import("@/components/headers/SideNav"),
            NavTop: () => import("@/components/headers/NavTop"),
            Search: () => import("@/components/headers/Search"),
            ReviewTable: () => import("@/components/reviews/ReviewTable"),
            NewReview: () => import("@/components/reviews/NewReview"),
        },

        beforeMount() {
            this.$root.$on('newReview', (data) => {
                this.newReview = data
            });
        },


        head() {
            return {
                titleTemplate: 'Valoraciones',          
            }
        },
        
    };
</script>