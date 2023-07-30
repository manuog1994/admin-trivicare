<template>
    <div>
        <div class="main">
            <!-- Botón para añadir un nuevo variacion -->
            <div v-if="edit == false && newDiscount == false" class="d-flex justify-content-end mb-4">
                <button @click="onClickNew" class="btn btn-primary">
                    <i class="fa fa-plus"></i>
                </button>
            </div>
            <!-- Tabla con todos los variacions -->
            <table class="table" v-if="edit == false && newDiscount == false">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Producto(s)</th>
                    <th scope="col">Original</th>
                    <th scope="col">Con descuento</th>
                    <th scope="col">Porcentaje</th>
                    <th scope="col">Hasta</th>
                    <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody v-if="discounts?.length > 0">
                    <tr v-for="discount in paginatedItems" :key="discount.id">
                    <th scope="row">{{ discount.id }}</th>
                    <td><n-link :to="`/product/${discount?.product?.slug}`">{{ discount?.product?.name }}</n-link></td>
                    <td>{{ (discount?.product?.price_base * 1.21).toFixed(2) }} &euro;</td>
                    <td>{{ ((discount?.product?.price_base - (discount?.product?.price_base * discount?.discount / 100)) * 1.21).toFixed(2) }} &euro;</td>
                    <td>{{ discount?.discount }} &percnt;</td>
                    <!-- fecha final con formato dd-MM-YY -->
                    <td>{{ formatDate(discount.end_date) }}</td>
                    <td>
                        <div>
                            <button title="Eliminar variacion" class="btn btn-danger btn-sm text-white" @click="destroy(discount.id)">
                                <i class="fa fa-trash"></i>
                            </button>
                        </div>
                    </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <td colspan="8">No hay descuentos.</td>
                    </tr>
                </tbody>
            </table>
            <!-- paginación -->
            <div v-if="edit == false && newDiscount == false" class="d-flex justify-content-center mt-2">
                <pagination v-model="page" :records="discounts?.length" :perPage="perPage" @paginate="myCallback"></pagination>
            </div>
            <!-- Crear nuevo variacion -->
            <CreateDiscount v-if="newDiscount == true" />
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
    auth: true,

    components: {
        CreateDiscount: () => import('~/components/discounts/CreateDiscount.vue'),
    },
    data() {
        return {
            discounts: [],
            status: '',
            variationId: '',
            yesterday: [],
            today: [],
            index: [],
            store: [],
            variationVisitors: [],
            cart: [],
            checkout: [],
            discount : [],
            edit: false,
            newDiscount: false,
            page: 1,
            perPage: 10,
        }
    },

    beforeMount() {
        this.$root.$on('closeAdd', (data) => {
            this.newDiscount = data;
        })
        this.$root.$on('closeEdit', (data) => {
            this.edit = data;
        })
    },

    async mounted() {
        await this.getDiscounts();
    },

    computed: {
        paginatedItems () {
            const start = (this.page - 1) * this.perPage
            return this.discounts.slice(start, start + this.perPage)
        }
    },

    methods: {
        async getDiscounts() {
            await this.$axios.get('/api/discounts')
                .then(response => {
                    this.discounts = response.data.data;
                    this.$root.$emit('loading', false);
                })
        },

        onClick(discount) {
            this.$root.$emit('loading', true);
            this.edit = true;
            this.discount = discount;
        },

        onClickNew() {
            this.$root.$emit('loading', true);
            this.newDiscount = true;
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
                    this.$axios.delete('/api/discounts/' + id)
                    .then(res => {
                        this.$notify({title: 'Descuento eliminado'})
                        window.location.reload(true);
                    })
                }
            })
        },

        myCallback(page) {
            this.page = page;
        },

        formatDate(date) {
            if (date) {
                return new Date(date).toLocaleDateString();
            }
        },
    },
}
</script>
