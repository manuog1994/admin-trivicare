<template>
    <div>
        <div class="main" v-if="newCoupon == false">
            <div>
                <div class="d-flex justify-content-end">
                    <button @click="newCoupon = true" class="btn bg-trivi-green text-white mb-2">
                        <i class="fa fa-plus"></i>
                    </button>
                </div>
                <div>
                    <h2>Cupones</h2>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="">Código</th>
                        <th scope="">Descuento</th>
                        <th scope="">Fecha de expiración</th>
                        <th scope="">Estado</th>
                        <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody v-if="coupons?.length > 0">
                        <tr v-for="coupon in paginatedItems" :key="coupon.id">
                            <td>{{ coupon.code }}</td>
                            <td>{{ coupon.discount }}</td>
                            <td>{{ coupon.validity }}</td>
                            <td v-if="coupon.status == 1">Inactivo</td>
                            <td v-else>Activo</td>
                            <td>
                                <form @submit.prevent="destroy(coupon.id)">
                                    <button type="submit" class="btn btn-danger" title="Eliminar">
                                        Eliminar
                                    </button>
                                </form>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="6">No hay cupones.</td>
                        </tr>
                    </tbody>
                </table>
                <!-- paginación -->
                <div class="d-flex justify-content-center mt-2">
                    <pagination v-model="page" :records="coupons.length" :perPage="perPage" @paginate="myCallback"></pagination>
                </div>
            </div>
        </div>
        <CreateCoupons v-if="newCoupon == true" />
    </div>
</template>

<script>
export default {
    auth: true,

    components: {
        CreateCoupons: () => import('@/components/coupons/CreateCoupons.vue'),
    },

    data() {
        return {
            coupons: [],
            page: 1,
            perPage: 10,
            newCoupon: false,
        }
    },

    beforeMount() {
        this.$root.$on('closeNewCoupon', (data) => {
            this.newCoupon = data;
        })
    },

    mounted() {
        this.getCoupons();
    },


    computed: {
        paginatedItems () {
            const start = (this.page - 1) * this.perPage
            return this.coupons.slice(start, start + this.perPage)
        }
    }, 
   


    methods: {
        async getCoupons() {
            await this.$axios.get('/api/cupons')
                .then(response => {
                    this.coupons = Object.values(response.data.data).flat();
                }).catch(error => {
                    console.log(error)
                })
        },

        async destroy(id) {
            await this.$axios.delete(`/api/cupons/${id}`)
                .then(() => {
                    this.getCoupons();
                    this.$notify({title: 'Cupón eliminado'});
                }).catch(error => {
                    console.log(error)
                })
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

</style>