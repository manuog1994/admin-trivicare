<template>
    <div>
        <div class="main">
            <!-- Botón para añadir un nuevo producto -->
            <div v-if="newSeller == false" class="d-flex justify-content-end mb-4">
                <button @click="onClickNew" class="btn btn-primary">
                    <i class="fa fa-plus"></i>
                </button>
            </div>
            <div v-if="!newSeller">
                <div>
                    <div>
                        <h2>Vendedor@s</h2>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="">Nombre</th>
                            <th scope="">Pedidos</th>
                            <th scope="">Último pedido</th>
                            </tr>
                        </thead>
                        <tbody v-if="sellers?.length > 0">
                            <tr v-for="seller in paginatedItems" :key="seller.id">
                                <td>{{ seller.name }} {{ seller.lastname }}</td>
                                <td>{{ seller?.orders?.length }}</td>
                                <!-- Mostrar la fecha del pedido más reciente y quitar los 6 últimos caracteres -->
                                <td>{{ seller?.orders?.[0]?.order_date }}</td>
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
                        <pagination v-model="page" :records="sellers.length" :perPage="perPage" @paginate="myCallback"></pagination>
                    </div>
    
                </div>
            </div>
            <!-- Crear nuevo vendedor -->
            <CreateSeller v-if="newSeller" :signature="signature"/>
        </div>
    </div>
</template>

<script>
const crypto = require('crypto');

export default {
    data() {
        return {
            pagination: {},
            sellers: [],
            guestView: false,
            page: 1,
            perPage: 10,
            signature: '',
            newSeller: false,
        }
    },

    components: {
        CreateSeller: () => import('@/components/sellers/CreateSeller.vue'),
    },

    beforeMount() {
        this.$root.$on('closeAdd', (data) => {
            this.newSeller = data;
            this.getSellers();
        })
    },

    async mounted() {
        const privateKey = process.env.privateKey; // La clave privada que el cliente generó o almacen

        this.signature = crypto.createHmac('sha256', privateKey).digest('hex');
        
        if (this.signature !== '') {
            this.getSellers();
        }
    },

    computed: {
        paginatedItems () {
            const start = (this.page - 1) * this.perPage
            return this.sellers.slice(start, start + this.perPage)
        }
    },


    methods: {
        async getSellers() {
            try {
                const response = await this.$axios.get('http://localhost:3050/api/users',
                {
                    headers: {
                        'X-Public-Key': process.env.publicKey,
                        'X-Signature': this.signature,
                    }
                });
                this.sellers = response.data;
                this.$root.$emit('loading', false)
            } catch (error) {
                console.log(error);                
            } finally {
                this.$root.$emit('loading', false)
            }
        },

        myCallback(page) {
            this.page = page;
        },


        onClickNew() {
            this.$root.$emit('loading', true);
            this.newSeller = true;
        },

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