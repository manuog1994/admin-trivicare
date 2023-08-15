<template>
    <div class="main w-100">
        <div class="row">
            <div class="mb-4 d-inline-block">
                <div class="d-flex justify-content-end">
                    <button @click="closeAdd" class="btn bg-trivi-red text-white">
                        <i class="fa fa-close"></i>
                        Cerrar
                    </button>
                </div>
                <h1>Añadir regalo</h1>
            </div>
            <div class="col-12">
                 <div class="m-auto">
                    <form class="row" ref="giftform" @submit.prevent="newGift">
                        <div class="col-12 mb-2">
                            <label for="name">
                                Nombre
                            </label>
                            <input class="form-control" type="text" name="name">
                        </div>
                        <div class="col-12 col-md-6 mb-2">
                            <label for="for_total">
                                Para total
                            </label>
                            <input class="form-control" type="number" name="for_total">
                        </div>
                        <div class="col-12 col-md-6 mb-2">
                            <label for="stock">
                                Stock
                            </label>
                            <input class="form-control" type="number" name="stock">
                        </div>
                        <div class="col-12 mb-2">
                            <label for="image">
                                Imagen
                            </label>
                            <input class="form-control" type="file" name="image">
                        </div>
                        <div class="mb-5">
                            <button class="btn btn-primary" type="submit" title="Crear Variación">Crear Regalo</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$root.$emit('loading', false);
    },

    methods: {
        async newGift() {
            if (this.$refs.giftform.checkValidity()) {
                this.$refs.giftform.classList.remove('was-validated');
                const formData = new FormData(this.$refs.giftform);
                await this.$axios.post('/api/gifts/', formData, {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    },
                }).then((response) => {
                        this.$refs.giftform.reset();
                        this.$notify({ title: 'El regalo se ha creado correctamente', type: 'success' });
                        window.location.reload(true);
                    })
                    .catch((error) => {
                        console.log(error);
                        this.$notify({ title: 'Ha ocurrido un error', type: 'error' });
                    })
            } else {
                this.$refs.giftform.classList.add('was-validated');
            }
        },

        closeAdd() {
            this.$root.$emit('closeAdd', false);
        },

        slugify(text) {
            return text
                .toString()
                .toLowerCase()
                .replace(/\s+/g, "-") // Replace spaces with -
                .replace(/[^\w-]+/g, "") // Remove all non-word chars
                .replace(/--+/g, "-") // Replace multiple - with single -
                .replace(/^-+/, "") // Trim - from start of text
                .replace(/-+$/, ""); // Trim - from end of text
        },

    }


}
</script>

<style>

</style>