<template>
    <div class="main">
        <div class="mb-2">
            <div class="d-flex justify-content-end">
                <button @click="$root.$emit('closeNewCoupon', false)" class="btn bg-trivi-red">
                    <i class="fa fa-close"></i>
                    Cerrar
                </button>
            </div>
            <div>
                <h3>Nuevo cupón</h3>
            </div>
        </div>
        <!-- Formulario -->
        <div class="">
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
</template>

<script>
export default {
    methods: {
        newCoupon() {
            const data = new FormData(this.$refs.createCoupon);

            this.$axios.post('/api/cupons', data)
                .then(() => {
                    this.$refs.createCoupon.reset();
                    this.$root.$emit('closeNewCoupon', false);
                    window.location.reload();
                }).catch(error => {
                    console.log(error)
                })
        },
    }
}
</script>

<style>

</style>