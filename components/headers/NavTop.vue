<template>
    <!-- Barra de navegación superior -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow d-md-none">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Logo de la marca en el centro-->
            <div class="d-flex justify-content-center">
                <a class="navbar-brand" href="#">
                    <img src="/svg/logo.svg" alt="" width="50" height="24" class="d-inline-block align-text-top">
                </a>
            </div>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav d-md-none">
                    <li class="nav-item">
                        <n-link class="nav-link active" aria-current="page" to="/">Dashboard</n-link>
                    </li>
                    <li class="nav-item">
                        <n-link class="nav-link" to="/orders">Pedidos</n-link>
                    </li>
                    <li class="nav-item">
                        <n-link class="nav-link" to="/products">Productos</n-link>
                    </li>
                    <li class="nav-item">
                        <n-link class="nav-link" to="/clients">Clientes</n-link>
                    </li>
                    <li class="nav-item">
                        <n-link class="nav-link" to="/invoices">Facturas</n-link>
                    </li>
                    <li class="nav-item">
                        <n-link class="nav-link" to="/coupons">Cupones</n-link>
                    </li>
                </ul>
            </div>

            <!-- Botón para cerrar sesión -->
            <div class="d-flex">
                <button class="btn btn-outline-danger" @click="logout">
                    <i class="fa fa-sign-out"></i>
                </button>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    methods: {
        async logout() {
            await this.$auth.logout();
            window.location.reload();
            this.$notify({ title: 'Has cerrado sesión!'})

        },
    }
}
</script>

<style lang="scss">
.margin-responsive {
    position: relative;
    width: 82%;
    margin-left: auto;

    @media (max-width: 768px) {
        width: 100%;
        margin-left: 0;
    }
}


</style>