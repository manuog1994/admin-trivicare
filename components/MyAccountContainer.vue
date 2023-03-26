<template>
    <client-only>
        <div>
            <div class="my-account-area pb-80 pt-100">
                <div class="w-50 m-auto" v-if="errors">
                    <client-only>
                        <div class="alert alert-danger" role="alert" v-for="error in errors" :key="error.id">
                            {{ error }}
                        </div>
                    </client-only>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="ms-auto me-auto col-lg-9">
                            <div class="my-account-wrapper">
                                <div id="faq" class="panel-group">
                                    <div class="panel panel-default single-my-account">
                                        <div class="panel-heading my-account-title">
                                            <h3 class="panel-title"><span>1 .</span> <a data-bs-toggle="collapse"
                                                    href="#my-account-1">Editar datos de tu cuenta </a></h3>
                                        </div>
    
                                        <div id="my-account-1" class="panel-collapse collapse show" data-bs-parent="#faq">
                                            <div class="panel-body">
                                                <form @submit.prevent="updateEmail">
                                                    <div class="myaccount-info-wrapper">
                                                        <div class="account-info-wrapper">
                                                            <h4>Información de mi cuenta</h4>
                                                            <h5>Correo eléctronico</h5>
                                                         </div>
                                                        <div class="row">
                                                            <div class="col-lg-12 col-md-12">
                                                                <p><strong>Email actual:</strong> {{ $auth.user.email }}</p>
    
                                                                <div class="billing-info">
                                                                    <label>Email</label>
                                                                    <input v-model="email" type="email" required>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="billing-back-btn">
                                                            <div class="billing-back">
                                                                <a href="#"><i class="fa fa-arrow-up" title="Atrás"></i> atrás</a>
                                                            </div>
                                                            <div class="billing-btn">
                                                                <button type="submit" title="Actualizar email">Actualizar Email</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default single-my-account">
                                        <div class="panel-heading my-account-title">
                                            <h3 class="panel-title"><span>2 .</span> <a data-bs-toggle="collapse"
                                                    href="#my-account-2">Cambiar tu contraseña </a></h3>
                                        </div>
                                        <div id="my-account-2" class="panel-collapse collapse" data-bs-parent="#faq">
                                            <div class="panel-body">
                                                <div class="myaccount-info-wrapper">
                                                    <div class="account-info-wrapper">
                                                        <h4>Cambiar Contraseña</h4>
                                                        <h5>Tu Contraseña</h5>
                                                    </div>
                                                    <form @submit.prevent="updatePassword">
                                                        <div class="row">
                                                            <div class="col-lg-12 col-md-12">
                                                                <div class="billing-info">
                                                                    <label>Contraseña actual</label>
                                                                    <div class="d-flex">
                                                                        <input id="passOne" v-model="old_password" type="password" name="password" required>
                                                                        <span class="form-pass" @click="viewPass('passOne')">
                                                                            <i class="fa fa-eye"></i>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-12 col-md-12">
                                                                <div class="billing-info">
                                                                    <label>Nueva Contraseña</label>
                                                                    <div class="d-flex">
                                                                        <input id="passTwo" v-model="password" type="password" name="password" required>
                                                                        <span class="form-pass" @click="viewPass('passTwo')">
                                                                            <i class="fa fa-eye"></i>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-12 col-md-12">
                                                                <div class="billing-info">
                                                                    <label>Confirma tu nueva Contraseña</label>
                                                                    <div class="d-flex">
                                                                        <input id="passThree" v-model="password_confirmation" type="password" name="password" required>
                                                                        <span class="form-pass" @click="viewPass('passThree')">
                                                                            <i class="fa fa-eye"></i>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="billing-back-btn">
                                                            <div class="billing-back">
                                                                <a href="#"><i class="fa fa-arrow-up" title="Atrás"></i> atrás</a>
                                                            </div>
                                                            <div class="billing-btn">
                                                                <button type="submit" title="Actualizar contraseña">Actualizar contraseña</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default single-my-account">
                                        <div class="panel-heading my-account-title">
                                            <h3 class="panel-title"><span>3 .</span> <a data-bs-toggle="collapse"
                                                    href="#my-account-3">Gestionar tu dirección de envío </a></h3>
                                        </div>
                                        <div id="my-account-3" class="panel-collapse collapse" data-bs-parent="#faq">
                                            <div class="panel-body">
                                                <div class="myaccount-info-wrapper">
                                                    <div class="account-info-wrapper">
                                                        <h4>Direcciónes de Envío</h4>
                                                    </div>
                                                    <div class="row">
                                                        <client-only>
                                                            <div v-for="profile in $auth.user.user_profile" :key="'profile' + profile.id">
                                                                <div class="card shadow w-75 m-auto mb-3" v-if="profile.name != 'deleted'">
                                                                    <div class="card-body">
                                                                        <h5 class="card-title">{{ profile.name }}
                                                                            {{ profile.lastname }}</h5>
                                                                        <p class="card-text">{{ profile.address }}</p>
                                                                        <p class="card-text">{{ profile.phone }}</p>
                                                                        <p class="card-text">{{ profile.zipcode }}
                                                                            {{ profile.city }} ({{ profile.state }})</p>
                                                                        <p class="card-text">{{ profile.country }}</p>
                                                                        <a @click.prevent="deleteProfile(profile.id)"
                                                                            class="btn btn-light">Eliminar</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </client-only>
                                                    </div>
                                                    <div class="billing-back-btn">
                                                        <div class="billing-back">
                                                            <a href="#" title="Atrás"><i class="fa fa-arrow-up"></i> atrás</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default single-my-account">
                                        <div class="panel-heading my-account-title">
                                            <h3 class="panel-title"><span>4 .</span> <a data-bs-toggle="collapse" href="#my-account-4">Crear
                                                    otra dirección de envío </a></h3>
                                        </div>
                                        <div id="my-account-4" class="panel-collapse collapse" data-bs-parent="#faq">
                                            <div class="panel-body">
                                                <div class="myaccount-info-wrapper">
                                                    <NewProfile />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="text-center mb-5">
                <a class="btn btn-light" @click.prevent="deleteAccount">Eliminar cuenta</a>
            </div>
        </div>
    </client-only>
</template>


<script>
    import Swal from 'sweetalert2'
    export default {
 
        data() {
            return {
                email: '',
                old_password: '',
                password: '',
                password_confirmation: '',
                errors: [],
                disabled: true,
                checked: false,
             }
        },

        components: {
            NewProfile: () => import('~/components/profile/NewProfile.vue'),
        },

        mounted() {
            this.$nextTick(() => {
                this.$nuxt.$loading.start()
                setTimeout(() => {
                    this.$nuxt.$loading.finish()
                }, 2000);
            });
            var tituloOriginal = document.title; // Lo guardamos para restablecerlo
            window.onblur = function(){ // Si el usuario se va a otro lado...
            document.title = "Ey, vuelve aquí!";// Cambiamos el título
            }

            window.onfocus = function(){
            document.title = tituloOriginal; // Si el usuario vuelve restablecemos el título
            }
            this.$auth.fetchUser();
        },

        methods: {

            async updateEmail() {
                Swal.fire({
                    title: '¿Estas seguro de que quieres cambiar tu email?',
                    showCancelButton: true,
                    confirmButtonText: 'Si, cambiar',
                }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        this.$axios.post('/api/update-email/' + this.$auth.user.id, {
                            email: this.email,
                        }).then(() => {
                            Swal.fire('¡Email actualizado!', '', 'success')
                            this.$auth.fetchUser()
                            this.errors = []
                            this.email = ''
                        }).catch((error) => {
                            this.errors = Object.values(error.response.data).flat();
                        })

                    }
                })



            },

            async updatePassword() {
                await this.$axios.post('/api/update-password/' + this.$auth.user.id, {
                    old_password: this.old_password,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                }).then(() => {
                    Swal.fire('¡Contraseña actualizada!', '', 'success')
                    this.old_password = '';
                    this.password = '';
                    this.password_confirmation = '';
                    this.errors = [];
                    this.$auth.fetchUser()
                }).catch((error) => {
                    this.errors = Object.values(error.response.data).flat();
                })
            },

            async deleteProfile(id) {
                Swal.fire({
                    title: '¿Estas seguro de que quieres eliminar esta dirección?',
                    showCancelButton: true,
                    confirmButtonText: 'Si, eliminar',
                }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        this.$axios.delete('/api/delete-profile/' + id)
                        this.$auth.fetchUser()
                        Swal.fire('Su dirección ha sido eliminada!', '', 'success')

                    }
                })
            },

            async deleteAccount() {
                Swal.fire({
                    title: '¿Estas seguro de que quieres eliminar tu cuenta?',
                    showCancelButton: true,
                    confirmButtonText: 'Si, eliminar',
                }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        this.$axios.delete('/api/destroy/' + this.$auth.user.id)
                        Swal.fire('Su cuenta ha sido eliminada!', '', 'success')
                        this.$auth.logout()
                        this.$router.push('/')
                    }
                })
            },

            async resendEmail() {
                await this.$axios.post('/api/resend-email/' + this.$auth.user.id)
                .then(res => {
                    console.log(res);
                    this.$notify({ title: 'Email reenviado'});
                }).catch((error) => {
                    this.errors = Object.values(error.response.data).flat();
                })
            },

            viewPass(id) {
                var x = document.getElementById(id);
                if (x.type === "password") {
                    x.type = "text";
                } else {
                    x.type = "password";
                }
            }
        },

        head() {
            return {
                title: "Mi Cuenta",
            }
        },


    }
</script>

<style scoped>
.form-pass {
    background-color: #2AB5B2;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #8c8c8c;
    cursor: pointer;
}
</style>