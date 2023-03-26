<template>
    <div class="">
        <div>
            <client-only>
                <div class="alert alert-danger" role="alert" v-for="error in errors" :key="error.id">
                    {{ error }}
                </div>
            </client-only>
        </div>
        <form ref="loginform" @submit.prevent="login">
            <!-- @csrf -->
            <div class="mb-2 shadow">
                <input class="form-control" type="email" name="email" placeholder="Email" required>
            </div>
            <div class="mb-2 shadow">
                <input class="form-control" id="passOne" type="password" name="password" placeholder="Contraseña" required>
            </div>
            <div class="mt-4">
                <div class="d-flex justify-content-center">
                    <button class="btn bg-trivi-blue text-white shadow" title="Iniciar sesión">Iniciar sesión</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>

    export default {
        
        data() {
            return {
                disabled: false,
                errors: [],
            }
        },

        computed: {
     
        },

        mounted() {
            this.$axios.get('/sanctum/csrf-cookie');
        },

        methods: {
            async login() {
                try {
                    const formData = new FormData(this.$refs.loginform);
                    await this.$auth.loginWith('laravelSanctum', {
                        data: formData
                    }).then(res => {
                        //console.log(res);
                        //window.location.reload();
                        this.errors = [];
                        this.$modal.hide('loginModal');
                        //this.$notify({ title: 'Bienvenid@ de nuevo!'})
                    });
                } catch (error) {
                    this.errors = ['El correo electrónico o la contraseña son incorrectos.']; 
                    //console.log(error.response.data)
                    this.$axios.post('/api/error-message', {
                        message: error.response.data.message
                    })            
                }
            },

            viewPass(id) {
                var x = document.getElementById(id);
                if (x.type === "password") {
                    x.type = "text";
                } else {
                    x.type = "password";
                }
            },
        },
    }
</script>