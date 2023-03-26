<template>
    <modal name="modal-track" @before-open="beforeOpen" width="800px" height=auto>
        <div>
            <h2>Añadir número de seguimiento</h2>
        </div>
        <form @submit.prevent="updateStatus">
            <div>
                <label for="track">Número de seguimiento</label>
                <input type="text" name="track" id="track" v-model="order.track">
            </div>
            <div class="d-flex justify-content-end mt-3">
                <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
        </form>
    </modal>
  </template>

<script>
export default {
    data() {
        return {
            order: {
                id: '',
                track: '',
            },
        }
    },

    methods: {
        beforeOpen ({params: order}) {
            this.order.id = order;
        },

        async updateStatus() {
            await this.$axios.put('/api/orders/status/' + this.order.id, {
                status: 3,
                track: this.order.track
            }).then(() => {
                this.$notify({ title: 'El estado del pedido ha sido actualizado'});
                this.$modal.hide('modal-track'); 
                this.order.track = '';
            });
        }
    }
}
</script>

<style>

</style>