<template>
    <div class="register-form">
        <div>
            <client-only>
                <div class="alert alert-danger" role="alert" v-for="error in errors" :key="error.id">
                    {{ error }}
                </div>
            </client-only>
        </div>
        <form ref="registerform" @submit.prevent="register">
            <input name="name" placeholder="Nombre" type="text" required>
            <input name="email" placeholder="Email" type="email" required>
            <div class="d-flex">
                <input id="passOne" type="password" name="password" placeholder="Contraseña" required>
                <span class="form-pass" @click="viewPass('passOne')">
                    <i class="fa fa-eye"></i>
                </span>
            </div>
            <div class="d-flex">
                <input id="passTwo" type="password" name="password_confirmation" placeholder="Confirma tu contraseña" required>
                <span class="form-pass" @click="viewPass('passTwo')">
                    <i class="fa fa-eye"></i>
                </span>
            </div>
            <div class="d-flex flex-column">
                <div class="mb-2 d-flex align-items-center">
                    <input type="checkbox" name="newsletter" id="newsletter" v-model="newsletter" value="1">
                    <label class="ms-2" for="newsletter">Quiero recibir novedades, ofertas y descuentos.</label>
                </div>
                <div class="mb-2 d-flex align-items-center">
                    <input type="checkbox" name="terms" id="terms" v-model="checked" value="true">
                    <label class="ms-2" for="terms">Acepto los <a href="https://trivicare.com/">términos y condiciones</a></label>
                </div>
            </div>
            <div class="button-box mt-4">
                <button class="btn rounded-0" :class="{'disabled': checked ? false : true}" type="submit" title="Registrarse">Registrar</button>
            </div>
        </form>
    </div>
</template>

<style>
.form-pass {
    background-color: #2AB5B2;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #8c8c8c;
    cursor: pointer;
}
</style>

<script>
    export default {
         data() {
            return {
                errors: [],
                checked: false,
                newsletter: false,
            }
        },

        async mounted() {
            await this.$axios.get('/sanctum/csrf-cookie');
        },

        methods: {
            register() {
                const formData = new FormData(this.$refs.registerform);
                formData.append('newsletter', this.newsletter);
                this.$axios.post('/register', formData)
                .then(res => {
                    //console.log(res);
                    this.$auth.loginWith('laravelSanctum', { data: formData });
                    this.errors = [];
                    this.$router.push({
                        path: '/'
                    });
                    this.$notify({ title: 'Te has registrado correctamente, Bienvenid@!'})

                }).catch((error) => {
                    //console.log(error);
                    this.errors = Object.values(error.response.data.errors).flat();
                    this.$axios.post('/api/error-message', {
                        message: error.response.data.message
                    })
                })

            },

            viewPass(id) {
                const pass = document.getElementById(id);
                if (pass.type === "password") {
                    pass.type = "text";
                } else {
                    pass.type = "password";
                }
            }
        }
    }
</script>