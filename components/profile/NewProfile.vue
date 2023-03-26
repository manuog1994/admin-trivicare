<template>
    <div>
        <div v-if="error" class="alert alert-danger" role="alert">
            {{ error }}
        </div>
        <form @submit.prevent="createProfile" class="row" ref="newprofile">
            <div class="col-lg-6 col-md-6">
                <div class="billing-info">
                    <label>Nombre*</label>
                    <input class="form-control" name="name" type="text" required>
                </div>
            </div>
            <div class="col-lg-6 col-md-6">
                <div class="billing-info">
                    <label>Apellidos*</label>
                    <input class="form-control" name="lastname" type="text" required>
                </div>
            </div>
            <div class="col-lg-12 col-md-12">
                <div class="billing-info">
                    <label>Dirección*</label>
                    <input class="form-control" name="address" type="text" required>
                </div>
            </div>
            <div class="col-lg-12 col-md-12">
                <div class="billing-info">
                    <label>Opcional</label>
                    <input class="form-control" name="optional_address" type="text">
                </div>
            </div>
            <div class="col-lg-6 col-md-6">
                <div class="billing-info">
                    <label for="">País*</label>
                    <select class="form-select" aria-label="Default select example" name="country" @change="getStates" v-model="country" required>
                        <option disabled selected>Seleccione su país</option>
                        <option v-for="country in paises" :key="country.id" :value="country.name">{{ country.name }}</option>
                    </select>
                </div>
            </div>
            <div class="col-lg-6 col-md-6">
                <div class="billing-info">
                    <label for="">Provincia*</label>
                    <select class="form-select" aria-label="Default select example" name="state" @change="getCities" v-model="state" required>
                        <option disabled selected>Seleccione su provincia</option>
                        <option v-for="state in provincias" :key="'state'+state.id" :value="state.name">{{ state.name }}</option>
                    </select>
                </div>
            </div>
            <div class="col-lg-8 col-md-8">
                <div class="billing-info">
                    <label for="">Ciudad*</label>
                    <select class="form-select" aria-label="Default select example" name="city" v-model="city" required>
                        <option disabled selected>Seleccione su ciudad</option>
                        <option v-for="city in cities" :key="'city'+city.name" :value="city.name">{{ city.name }}</option>
                    </select>
                </div>
            </div>
            <div class="col-lg-4 col-md-4">
                <div class="billing-info">
                    <label>Código Postal*</label>
                    <input class="form-control" name="zipcode" type="number" required>
                </div>
            </div>
            <div class="col-lg-5 col-md-5">
                <div class="billing-info">
                    <label>Teléfono*</label>
                    <input class="form-control" name="phone" type="number" required>
                </div>
            </div>
            <div class="col-lg-7 col-md-7">
                <div class="billing-info">
                    <label>DNI/NIE/NIF*</label>
                    <input class="form-control" name="dni" type="text" required>
                </div>
            </div>
        </form>
        <div class="d-flex justify-content-end mt-3">
            <button @click="createProfile" class="btn rounded-0 text-info">Guardar</button>
        </div>
    </div>
</template>

<script>
import provincias from '@/data/provincias.json'
import ciudades from '@/data/ciudades.json'
export default {
    data() {
        return {
            checked: false,
            disabled: true,
            paises: [
                { id: 28, name: 'España' }
            ],
            ciudades,
            provincias,
            cities: [],
            error: null,
            country: '',
            state: '',
            city: ''           
        }
    },

    mounted() {
        this.$axios.get('/sanctum/csrf-cookie');
    },
    
    methods: {
        getStates(e) {
            const country_name = e.target.value
            const country_id = this.paises.find(country => country.name === country_name).id
            this.provincias = this.provincias.data.filter(state => state.id_country === country_id)
        },
        getCities(e) {
            const states_name = e.target.value
            const state_id = this.provincias.find(state => state.name === states_name).id
            this.cities = this.ciudades.data.filter(city => city.id_state === state_id)
        },

        async createProfile() {
            if(this.$refs.newprofile.checkValidity()){
                this.$refs.newprofile.classList.remove('was-validated')
                const form = this.$refs.newprofile
                const formData = new FormData(form)
                formData.append('user_id', this.$auth.user.id)
                await this.$axios.post('/api/register-profile', formData)
                .then(res => {
                    this.$refs.newprofile.reset()
                    this.$notify({ type: 'success', text: 'Dirección creada correctamente' })
                    this.$auth.fetchUser()
                    this.error = null
                }).catch(err => {
                    this.error = err.response.data.message;
                })
                this.$root.$emit('newUserAddress', false)
            }else{
                this.$refs.newprofile.classList.add('was-validated')
            }
        },
    }
}
</script>

<style>

</style>