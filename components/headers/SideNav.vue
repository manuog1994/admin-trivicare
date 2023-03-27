<script>
export default {
    data() {
        return {
            closeSideNav: false,
            isActive: false,
        }
    },

    mounted() {
        this.isActive = this.$route.path;
    },

    methods: {
        async logout() {
            await this.$auth.logout();
            window.location.reload();
            this.$notify({ title: 'Has cerrado sesión!'})

        },
    }

}
</script>

<template>
    <nav class="sidebar d-none d-md-block">
        <div class="logo">
            <nuxt-link to="/"><img src="/logo-sidenav.png" alt="logo-trivicare" width="80"></nuxt-link>
        </div>
        <div class="position-sticky pt-3">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <n-link class="nav-link" :class="{'active': isActive == '/'}" aria-current="page" to="/">
                        <i class="fa fa-dashboard icon-list"></i>
                        Dashboard
                    </n-link>
                </li>
                <li class="nav-item">
                    <n-link class="nav-link" :class="{'active': isActive == '/orders' || isActive == '/orders-history'}" to="/orders">
                        <i class="fa fa-shopping-cart icon-list"></i>
                        Pedidos
                    </n-link>
                </li>
                <li class="nav-item">
                    <n-link class="nav-link" :class="{'active': isActive == '/products'}" to="/products">
                        <i class="fa fa-cubes icon-list"></i>
                        Productos
                    </n-link>
                </li>
                <li class="nav-item">
                    <n-link class="nav-link" :class="{'active': isActive == '/clients' || isActive == '/guests'}" to="/clients">
                        <i class="fa fa-users icon-list"></i>
                        Clientes
                    </n-link>
                </li>
                <li class="nav-item">
                    <n-link class="nav-link" :class="{'active': isActive == '/invoices'}" to="/invoices">
                        <i class="fa fa-file-text icon-list"></i>
                        Facturas
                    </n-link>
                </li>
                <li class="nav-item">
                    <n-link class="nav-link" :class="{'active': isActive == '/coupons'}" to="/coupons">
                        <i class="fa fa-ticket icon-list"></i>
                        Cupones
                    </n-link>
                </li>
            </ul>
        </div>
        <!-- Botón para cerrar la sesión posicionado al final de la barra -->
        <div class="position-absolute bottom-0 button-final">
            <div class="d-flex justify-content-around">
                <n-link class="nav-link" to="/settings">
                    <i class="fa fa-cog icon-size"></i>
                </n-link>
                <button @click="logout" class="nav-link" to="/logout">
                    <i class="fa fa-sign-out icon-size"></i>
                </button>
            </div>
        </div>
    </nav>
</template>

<style lang="scss">
body {
	margin: 0;
	padding: 0;
	font-family: Arial, sans-serif;
}

.sidebar {
    position: fixed;
	float: left;
	width: 20%;
	background-color: #DD88B8;
	height: 100vh;
    
}

.sidebar ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
}

.sidebar li {
	margin: 10px 0;
}

.nav-link {
	display: block;
	padding: 10px;
    margin-left: 0.5rem;
	color: #fff;
	text-decoration: none;
}

.nav-link.active {
    background-color: #fff;
    color: #333;
    margin: 0.2rem;
    padding-left: 1rem;
    border-radius: 5px;
}
.nav-link:hover {
	color: #333;
    margin-left: 0.5rem;
    scale: 1.1;
    transition: all 0.3s ease;
}

.logo {
    text-align: center;
    margin-bottom: 30px;
    margin-top: 30px;
}

.icon-size {
    font-size: 1.5rem;
}

.button-final {
    width: 100%;
}

.icon-list {
    margin-right: 5px;
}

</style>