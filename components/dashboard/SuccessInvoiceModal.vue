<template>
    <modal name="successInvoice" @before-open="beforeOpen" width="300px" :scrollable="true" height=auto>
        <div class="d-flex justify-content-center">
            <div>
                <div class="d-flex justify-content-center mb-5">
                    <img src="/payment/success.webp" alt="success.webp" width="60">
                </div>
                <div>
                    <h4>{{ invoice.message }}</h4>
                </div>
                <div class="d-flex justify-content-center mt-3">
                    <a :href="invoice.data" target="_blank" class="btn btn-primary">Ver Factura</a>
                </div>
            </div>
        </div>
    </modal>
</template>

<script>
export default {
    data() {
        return {
            invoice: {},
        }
    },

    methods: {
        beforeOpen({params: invoice}) {
            this.invoice = invoice;
        },
    },

}
</script>

<style>

</style>