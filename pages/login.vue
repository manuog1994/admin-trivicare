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
            }
        },

        methods: {
            closeMenus() {
                this.searchOpacity(false);
                this.$root.$emit('closeMenu', this.closeMenu);
            },

            searchOpacity(searchFather) {
                if (searchFather == true) {
                    document.getElementById("post-nav").classList.add("search-screen");
                } else {
                    document.getElementById("post-nav").classList.remove("search-screen");
                }
            }
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
