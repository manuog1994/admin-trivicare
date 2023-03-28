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
                    <li class="nav-item-top">
                        <n-link class="nav-link active" aria-current="page" to="/">Dashboard</n-link>
                    </li>
                    <li class="nav-item-top">
                        <n-link class="nav-link-top" to="/orders">Pedidos</n-link>
                    </li>
                    <li class="nav-item-top">
                        <n-link class="nav-link-top" to="/products">Productos</n-link>
                    </li>
                    <li class="nav-item-top">
                        <n-link class="nav-link-top" to="/clients">Clientes</n-link>
                    </li>
                    <li class="nav-item-top">
                        <n-link class="nav-link-top" to="/invoices">Facturas</n-link>
                    </li>
                    <li class="nav-item-top">
                        <n-link class="nav-link-top" to="/coupons">Cupones</n-link>
                    </li>
                    <li class="nav-item-top">
                        <n-link class="nav-link-top" to="/reviews">Valoraciones</n-link>
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

.nav-link {
	display: block;
	padding: 10px;
    margin-left: 0.5rem;
	color: #333;
	text-decoration: none;
}

.nav-link-top.active {
    background-color: #fff;
    color: #333;
    margin: 0.2rem;
    padding-left: 1rem;
    border-radius: 5px;
}
.nav-link-top:hover {
	color: #333;
    margin-left: 0.5rem;
    scale: 1.1;
    transition: all 0.3s ease;
}


</style>