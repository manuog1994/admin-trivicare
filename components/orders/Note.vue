<template>
    <modal name="note" @before-open="beforeOpen" width="600px" height="500px">
        <div>
            <div class="modal-header border-bottom-1 mb-5 ">
                <h5 class="modal-title">Notas</h5>
                <button type="button" class="close" @click="$modal.hide('note')">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="mb-2" for="note">Nota del cliente</label>
                    <textarea class="form-control" id="note" rows="10" v-model="note" disabled></textarea>
                </div>
            </div>
        </div>
    </modal>
</template>

<script>
export default {
    auth: true,
    name: 'Note',

    data() {
        return {
            note: '',
        }
    },

    methods: {
        beforeOpen({params: note}) {
            this.note = note;
        },
    },

}
</script>

<style>

</style>