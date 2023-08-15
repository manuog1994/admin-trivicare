<template>
    <div>
        <div class="main">
            <!-- Botón para añadir un nuevo variacion -->
            <div v-if="edit == false && newGift == false" class="d-flex justify-content-end mb-4">
                <button @click="onClickNew" class="btn btn-primary">
                    <i class="fa fa-plus"></i>
                </button>
            </div>
            <!-- Tabla con todos los variacions -->
            <table class="table" v-if="edit == false && newGift == false">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Para total</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody v-if="gifts?.length > 0">
                    <tr v-for="gift in paginatedItems" :key="gift.id">
                    <th scope="row">{{ gift.id }}</th>
                    <td>{{ gift.name }}</td>
                    <td>{{ gift.for_total }}</td>
                    <td>{{ gift.stock }}</td>
                    <td>
                        <div>
                            <button title="Eliminar variacion" class="btn btn-danger btn-sm text-white" @click="destroy(gift.id)">
                                <i class="fa fa-trash"></i>
                            </button>
                        </div>
                    </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <td colspan="8">No hay regalos.</td>
                    </tr>
                </tbody>
            </table>
            <!-- paginación -->
            <div v-if="edit == false && newGift == false" class="d-flex justify-content-center mt-2">
                <pagination v-model="page" :records="gifts?.length" :perPage="perPage" @paginate="myCallback"></pagination>
            </div>
            <!-- Crear nuevo variacion -->
            <CreateGift v-if="newGift == true" />
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
    components: {
        CreateGift: () => import('~/components/gifts/CreateGift.vue'),
    },
    data() {
        return {
            gifts: [],
            status: '',
            yesterday: [],
            today: [],
            index: [],
            store: [],
            cart: [],
            checkout: [],
            Gift : [],
            edit: false,
            newGift: false,
            page: 1,
            perPage: 10,
        }
    },

    beforeMount() {
        this.$root.$on('closeAdd', (data) => {
            this.newGift = data;
        })
        this.$root.$on('closeEdit', (data) => {
            this.edit = data;
        })
    },

    async mounted() {
        await this.getGifts();
    },

    computed: {
        paginatedItems () {
            const start = (this.page - 1) * this.perPage
            return this.gifts.slice(start, start + this.perPage)
        }
    },

    methods: {
        async getGifts() {
            await this.$axios.get('/api/gifts')
                .then(response => {
                    this.gifts = response.data.data;
                    this.$root.$emit('loading', false);
                })
        },

        onClick(Gift) {
            this.$root.$emit('loading', true);
            this.edit = true;
            this.gift = gift;
        },

        onClickNew() {
            this.$root.$emit('loading', true);
            this.newGift = true;
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
                    this.$axios.delete('/api/gifts/' + id)
                    .then(res => {
                        this.$notify({title: 'Regalo eliminado'})
                        window.location.reload(true);
                    })
                }
            })
        },

        myCallback(page) {
            this.page = page;
        },
    },
}
</script>
