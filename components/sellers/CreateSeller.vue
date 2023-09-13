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
                <h1>Crear nuevo vendedor</h1>
            </div>
            <div class="col-12">
                 <div class="m-auto">
                    <form class="row" ref="sellerform" @submit.prevent="createSeller">
                        <div class="col-12 mb-2">
                            <label for="name">Nombre</label>
                            <input class="form-control" type="text" name="name" required>
                        </div>
                        <div class="col-12 mb-2">
                            <label for="lastname">Apellidos</label>
                            <input class="form-control" type="text" name="lastname" required>
                        </div>
                        <div class="col-12 mb-2">
                            <label for="email">Email</label>
                            <input class="form-control" type="email" name="email" required>
                        </div>
                        <div class="col-12 mb-2">
                            <label for="password">Contraseña</label>
                            <div class="d-flex justify-content-between align-items-center">
                                <input class="form-control" type="text" name="password" v-model="password" required>
                                <button class="btn btn-primary ms-2" type="button" @click="generatePassword">Generar</button>
                            </div>
                        </div>
                        <div class="col-12 mb-2">
                            <label for="identification">NIF / NIE</label>
                            <input class="form-control" type="text" name="identification" minlength="9" required>
                        </div>
                        <div class="col-12 mb-2">
                            <label for="phone">Teléfono</label>
                            <input class="form-control" type="tel" name="phone" maxlength="9" required>
                        </div>

                        <div class="mb-5">
                            <button class="btn btn-primary" type="submit" title="Crear Vendedor">Crear Vendedor</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        signature: {
            type: String,
            required: true
        }
    },

    data() {
        return {
            password: '',
        }
    },

    mounted() {
        this.$root.$emit('loading', false);
    },

    methods: {
        async createSeller() {
            this.$root.$emit('loading', true);
            const form = this.$refs.sellerform;
            if (this.signature) {
                try {
                    const response = await this.$axios.post('http://localhost:3050/api/users/create', {
                        name: form.name.value,
                        lastname: form.lastname.value,
                        email: form.email.value,
                        password: form.password.value,
                        identification: form.identification.value,
                        phone: form.phone.value,
                    },
                {
                    headers: {
                        'X-Public-Key': process.env.publicKey,
                        'X-Signature': this.signature,
                    }
                });
                    console.log(response.data);
                    this.$root.$emit('loading', false);
                    this.closeAdd();
                } catch (error) {
                    console.log(error);
                } finally {
                    this.$root.$emit('loading', false);
                }
            }
        },

        closeAdd() {
            this.$root.$emit('closeAdd', false);
        },

        generatePassword() {
            let length = 8,
                charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
                retVal = "";
            for (let i = 0, n = charset.length; i < length; ++i) {
                retVal += charset.charAt(Math.floor(Math.random() * n));
            }

            this.password = retVal;
        }
    }


}
</script>

<style>

</style>