<template>
   <div class="container">
        <!-- Formulario -->
        <div class="row mt-2 mb-2">
            <div class="col-12">
                <div class="card m-auto">
                    <div class="card-title p-3">
                        <h2>Crear cupón</h2>
                    </div>
                    <div class="w-75 m-auto mb-4">
                        <form @submit.prevent="newCoupon" ref="createCoupon">
                            <div class="mb-2">
                                <label for="code">Código</label>
                                <input class="form-control" type="text" name="code">
                            </div>
                            <div class="mb-2">
                                <label for="discount">Descuento</label>
                                <input class="form-control" type="number" name="discount">
                            </div>
                            <div class="mb-2">
                                <label for="validity">Validez</label>
                                <input class="form-control" type="date" name="validity">
                            </div>
                            <div class="mb-4">
                                <label for="status">Estado</label>
                                <select class="form-select" name="status">
                                    <option value="1">Inactivo</option>
                                    <option value="2">Activo</option>
                                </select>
                            </div>
                            <div class="mb-2">
                                <button type="submit" class="btn btn-primary" title="Crear">Crear</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- Tabla -->
        <div class="row mt-5">
            <div class="col-12 overflow-auto">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th>Código</th>
                            <th>Descuento(%)</th>
                            <th>Validez</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="coupon in coupons" :key="coupon.id">
                            <th scope="row">{{ coupon.id }}</th>
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
                </table>
            </div>
        </div>
   </div> 
</template>

<script>
export default {
    auth: true,

    data() {
        return {
            coupons: [],
        }
    },

    mounted() {
        this.getCupons();
    },

    methods: {
        async getCupons() {
            await this.$axios.get('/api/cupons')
                .then(response => {
                    this.coupons = Object.values(response.data.data).flat();
                }).catch(error => {
                    console.log(error)
                })
        },

        newCoupon() {
            const data = new FormData(this.$refs.createCoupon);

            this.$axios.post('/api/cupons', data)
                .then(() => {
                    this.getCupons();
                    this.$notify({title: 'Cupón creado'});
                    this.$refs.createCoupon.reset();
                }).catch(error => {
                    console.log(error)
                })
        },

        async destroy(id) {
            await this.$axios.delete(`/api/cupons/${id}`)
                .then(() => {
                    this.getCupons();
                    this.$notify({title: 'Cupón eliminado'});
                }).catch(error => {
                    console.log(error)
                })
        },
    }
}
</script>

<style>

</style>