<template>
    <client-only>
        <div class="home-cosmetics">
            <Nav />
            <div class="login-register-area pt-5 pb-100">
                <div class="container">
                    <div class="d-flex justify-content-center mb-5">
                        <select class="form-select" @change="openOption">
                            <option value="All" @click="comA('All')" :class="{ active: isActive === 'All' }">Todos los productos</option>
                            <option value="Create" @click="comA('Create')" :class="{ active: isActive === 'Create' }">Crear producto</option>
                            <option value="Orders" @click="comA('Orders')" :class="{ active: isActive === 'Orders' }">Pedidos</option>
                            <option value="OrdersHistory" @click="comA('OrdersHistory')" :class="{ active: isActive === 'OrdersHistory' }">Historial de pedidos</option>
                            <option value="Coupons" @click="comA('Coupons')" :class="{ active: isActive === 'Coupons' }">Cupones</option>
                            <option value="NewInvoice" @click="comA('NewInvoice')" :class="{ active: isActive === 'NewInvoice' }">Nueva Factura</option>
                            <option value="FormReview" @click="comA('FormReview')" :class="{ active: isActive === 'FormReview' }">Formulario de valoración</option>
                            <option value="Newsletter" @click="comA('Newsletter')" :class="{ active: isActive === 'Newsletter' }">Newsletter</option>
                        </select>
                    </div>
                    <div class="row">
                        <div class="">
                            <component :is="isActive" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </client-only>
</template>

<script>
export default {
    auth: true,

    components: {
        Nav: () => import("@/components/dashboard/Nav"),
        All: () => import("@/components/dashboard/All"),
        Create: () => import("@/components/dashboard/Create"),
        Coupons: () => import("@/components/dashboard/Coupons"),
        NewInvoice: () => import("@/components/dashboard/NewInvoice"),
        FormReview: () => import("@/components/dashboard/FormReview"),
        Newsletter: () => import("@/components/dashboard/Newsletter"), 
     },

    data() {
        return {
            isActive: "All",
            unauthorized: '',
        }
    },

    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start()
            setTimeout(() => {
                this.$nuxt.$loading.finish()
            }, 2000);
        });

        if(this.$axios.onError(error => {
            const code = error.response.status;
            if (code == 401) {
                this.$auth.logout();
            }
        }));
    },

    methods: {
        comA(item) {
            this.isActive = item;
        },

        openOption(e) {
            let option = e.target.value;
            this.comA(option);
        },

    },

    head() {
        return {
            title: "Panel de Control",
        }
    }
}
</script>

<style>

</style>