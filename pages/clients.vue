<template>
    <div>
        <SideNav />
    </div>
</template>

<script>

    export default {
        auth: true,

        components: {
            SideNav: () => import("@/components/headers/SideNav"),
        },


        head() {
            return {
                titleTemplate: 'Clientes',          
            }
        },
        
    };
</script>

<style>

</style>


