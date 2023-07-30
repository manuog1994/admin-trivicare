<template>
    <div>
        <div class="main">
            <!-- Botón para añadir un nuevo variacion -->
            <div v-if="edit == false && newVariation == false" class="d-flex justify-content-end mb-4">
                <button @click="onClickNew" class="btn btn-primary">
                    <i class="fa fa-plus"></i>
                </button>
            </div>
            <!-- Tabla con todos los variacions -->
            <table class="table" v-if="edit == false && newVariation == false">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Producto(s)</th>
                    <th scope="col">Variacion(es)</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody v-if="variations?.length > 0">
                    <tr v-for="variation in paginatedItems" :key="variation.id">
                    <th scope="row">{{ variation.id }}</th>
                    <td><n-link :to="`/product/${variation?.product?.slug}`">{{ variation?.product?.name }}</n-link></td>
                    <td>{{ variation.model != '' ? variation.model : variation.color != '' ? variation.color : variation.size != '' ? variation.size : '--' }}</td>
                    <td>{{ variation.stock }}</td>
                    <td>
                        <div>
                            <button title="Eliminar variacion" class="btn btn-danger btn-sm text-white" @click="destroy(variation.id)">
                                <i class="fa fa-trash"></i>
                            </button>
                        </div>
                    </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <td colspan="8">No hay variaciones.</td>
                    </tr>
                </tbody>
            </table>
            <!-- paginación -->
            <div v-if="edit == false && newVariation == false" class="d-flex justify-content-center mt-2">
                <pagination v-model="page" :records="variations?.length" :perPage="perPage" @paginate="myCallback"></pagination>
            </div>
            <!-- Crear nuevo variacion -->
            <CreateVariation v-if="newVariation == true" />
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
    auth: true,

    components: {
        CreateVariation: () => import('~/components/variations/CreateVariation.vue'),
    },
    data() {
        return {
            variations: [],
            status: '',
            variationId: '',
            yesterday: [],
            today: [],
            index: [],
            store: [],
            variationVisitors: [],
            cart: [],
            checkout: [],
            variation : [],
            edit: false,
            newVariation: false,
            page: 1,
            perPage: 10,
        }
    },

    beforeMount() {
        this.$root.$on('closeAdd', (data) => {
            this.newVariation = data;
        })
        this.$root.$on('closeEdit', (data) => {
            this.edit = data;
        })
    },

    async mounted() {
        await this.getVariations();
    },

    computed: {
        paginatedItems () {
            const start = (this.page - 1) * this.perPage
            return this.variations.slice(start, start + this.perPage)
        }
    },

    methods: {
        async getVariations() {
            await this.$axios.get('/api/variations')
                .then(response => {
                    this.variations = response.data;
                    this.$root.$emit('loading', false);
                })
        },

        onClick(variation) {
            this.$root.$emit('loading', true);
            this.edit = true;
            this.variation = variation;
        },

        onClickNew() {
            this.$root.$emit('loading', true);
            this.newVariation = true;
        },

        destroy(id) {
            Swal.fire({
                title: '¿Estás seguro?',
                text: "¡No podrás revertir esto!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '¡Sí, bórralo!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$axios.delete('/api/variations/' + id)
                    .then(res => {
                        this.$notify({title: 'Variación eliminada'})
                        window.location.reload(true);
                    })
                }
            })
        },

        myCallback(page) {
            this.page = page;
        }
    },
}
</script>
