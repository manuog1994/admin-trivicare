<template>
    <modal name="errorModal" @before-open="beforeOpen" width="300px" :scrollable="true" height=auto>
        <div class="d-flex justify-content-center">
            <div>
                <div class="d-flex justify-content-center mb-5">
                    <img src="/payment/error.webp" alt="error.webp" width="60">
                </div>
                <div class="mb-2">
                    <h2>Se ha producido un error</h2>
                </div>
                <div v-for="error in errors.errors" :key="error">
                    <h4>{{ error.toString() }}</h4>
                </div>
            </div>
        </div>
    </modal>
</template>

<script>
export default {
    data() {
        return {
            errors: {},
        }
    },

    methods: {
        beforeOpen({params: errors}) {
            this.errors = errors;
        },
    },

}
</script>

<style>

</style>