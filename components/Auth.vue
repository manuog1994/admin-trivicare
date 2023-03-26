<template>
    <div class="container-fluid d-flex justify-content-center align-items-center vh-100 bg-trivi-purple">
        <div class="card shadow p-4 p-md-5">
            <div class="card-body">
                <!-- Logo de TriviCare -->
                <div class="text-center mb-30">
                    <nuxt-link to="/"><img src="/svg/logo-horizontal.svg" alt="logo-trivicare" width="300"></nuxt-link>
                </div>
                <!-- Componente Inicio sesión -->
                <Login />
            </div>
        </div>
    </div>
</template>

<script>
import Login from "@/components/Login";
export default {

    components: {
        Login,
    },

    data() {
        return {
            isActive: "Login",
        };
    },

    methods: {
        comA(item) {
            this.isActive = item;
        }
    },

}
</script>

<style>

</style>