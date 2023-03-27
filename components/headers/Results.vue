<template>
    <div>
        {{ results }}
    </div>
</template>

<script>
export default {

    data() {
        return {
            searchFather: false,
            products: [],
            search: '',
            url: process.env.url,
            hidden: true,
            results: [],
            resultsMin: [],
        }
    },

    watch: {
        // escuchamos url query params
        $route() {
            this.search = this.$route.query.search;
        },

    },

    methods: {
        async getOrders() {
            await this.$axios.get('/api/search?search=' + this.search)
                .then(response => {
                    this.results = response.data;
                    this.resultsMin = response.data.slice(0, 5);
                })
                .catch(error => {
                    console.log(error);
                });
        }


    },
    

}
</script>

<style>

</style>