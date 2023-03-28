<template>
    <div>
        <SideNav />
        <NavTop />
        <Search />
        <div class="main overflow-auto">
            <GraphicMonths />
            <DonutsProducts />
        </div>
    </div>
</template>

<script>

    export default {
        components: {
            SideNav: () => import("@/components/headers/SideNav"),
            NavTop: () => import("@/components/headers/NavTop"),
            Search: () => import("@/components/headers/Search"),
            GraphicMonths: () => import("@/components/dashboard/GraphicMonths"),
            DonutsProducts: () => import("@/components/dashboard/DonutsProducts"),
        },


        head() {
            return {
                titleTemplate: 'Dashboard',          
            }
        },
        
    };
</script>

<style lang="scss">

.main {
    float: right;
    width: 80%;
    padding: 20px;
    // permitir scroll si el height es mayor que el viewport
    overflow-y: auto;

    @media only screen and (max-width: 767px) {
        width: 100%;
    }
}

.main-search {
    float: right;
    width: 80%;
    padding: 20px;
    // permitir scroll si el height es mayor que el viewport
    @media only screen and (max-width: 767px) {
        width: 100%;
    }
}

table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ccc;
}

th {
    background-color: #eee;
}

</style>


