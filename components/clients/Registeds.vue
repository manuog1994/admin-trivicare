<template>
    <div>
        <div class="main">
            <div>
                <div class="d-flex justify-content-end">
                    <button @click="$router.push({path: '/guests'})" class="btn bg-trivi-red text-white mb-2">
                        <i class="fa fa-user-secret"></i>
                        Invitados
                    </button>
                </div>
                <div>
                    <h2>Clientes registrados</h2>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="">Cliente</th>
                        <th scope="">Pedidos</th>
                        <th scope="">Último pedido</th>
                        </tr>
                    </thead>
                    <tbody v-if="profiles?.length > 0">
                        <tr v-for="profile in paginatedItems" :key="profile.id">
                            <td>{{ profile.name }} {{ profile.lastname }}</td>
                            <td>{{ profile?.orders?.length }}</td>
                            <!-- Mostrar la fecha del pedido más reciente y quitar los 6 últimos caracteres -->
                            <td>{{ profile?.orders?.[0]?.order_date }}</td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="6">No hay pedidos pendientes.</td>
                        </tr>
                    </tbody>
                </table>
                <!-- paginación -->
                <div class="d-flex justify-content-center mt-2">
                    <pagination v-model="page" :records="profiles.length" :perPage="perPage" @paginate="myCallback"></pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pagination: {},
            profiles: [],
            guestView: false,
            page: 1,
            perPage: 10,
        }
    },

    mounted() {
        this.getUserProfiles();
    },

    computed: {
        paginatedItems () {
            const start = (this.page - 1) * this.perPage
            return this.profiles.slice(start, start + this.perPage)
        }
    },


    methods: {
        async getUserProfiles() {
            this.$root.$emit('loading', true)
            const response = await this.$axios.get('/api/user-profile');
            this.profiles = response.data.data;
            // Devolver todos menos la primera fila de la tabla
            this.profiles.shift(1);
            this.$root.$emit('loading', false)
        },

        myCallback(page) {
            this.page = page;
        }

    },
}
</script>

<style lang="scss">
    .w-10 {
        width: 10px;
    }

    .pagination-custom {
        display: flex;
        padding-left: 0;
        list-style: none;
    }

    .page-link-custom {
        position: relative;
        font-size: 18px;
        display: flex;
        padding: 0 .75rem;
        color: #686868;
        text-decoration: none;
        background-color: #fff;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
    @media (prefers-reduced-motion: reduce) {
    .page-link-custom {
        transition: none;
    }
    }
    .page-link-custom:hover {
    z-index: 2;
    color: orange;
    }
    .page-link-custom:focus {
    z-index: 3;
    color: orange;
    outline: 0;
    }
    .page-link-custom.active {
        color: orange;
    }
    .page-link-custom.disabled {
        color: #a0a0a0;
    }

</style>