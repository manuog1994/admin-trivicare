<template>
    <client-only>
        <Auth />
    </client-only>
</template>

<style scoped>

</style>

<script>
    export default {
        auth: false,
        components: {
            Auth: () => import("@/components/Auth"),
        },

        data() {
            return {
                searchChildren: '',
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
                titleTemplate: "Iniciar sesión | Admin",
                // link: [
                //     { rel: 'cannonical', href: 'https://trivicare.com/login'},
                // ],
            }
        }
    };
</script>
