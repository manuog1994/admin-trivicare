<template>
    <div class="main">
        <div class="">
            <div class="d-flex justify-content-end">
                <button class="btn bg-trivi-red text-white shadow" title="Volver" @click="$root.$emit('closeNewInvoice', false)">Volver</button>
            </div>            
            <div class="d-flex justify-content-start mb-2">
                <h3>Generar factura</h3>
            </div>
        </div>
        <div>
            <form @submit.prevent="createInvoice" ref="createinvoice">
                <div class="row">
                    <div class="col-12 col-md-6 mb-2">
                        <label for="name">Nombre</label>
                        <input type="text" name="name" id="name" class="form-control">
                    </div>
                    <div class="col-12 col-md-6 mb-2">
                        <label for="lastname">Apellidos</label>
                        <input type="text" name="lastname" id="lastname" class="form-control">
                    </div>
                    <div class="col-12 col-md-6 mb-2">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" class="form-control">
                    </div>
                    <div class="col-12 col-md-6 mb-2">
                        <label for="phone">Teléfono</label>
                        <input type="tel" name="phone" id="phone" class="form-control">
                    </div>
                    <div class="col-12 mb-2">
                        <label for="address">Dirección</label>
                        <input type="text" name="address" id="address" class="form-control">
                    </div>
                    <div class="col-lg-6 col-md-6 mb-2">
                        <label for="">País</label>
                        <select class="form-select" aria-label="Default select example" name="country" @change="getStates" required>
                            <option disabled selected>Seleccione su país</option>
                            <option v-for="country in paises" :key="country.id" :value="country.name">{{ country.name }}</option>
                        </select>
                    </div>
                    <div class="col-lg-6 col-md-6 mb-2">
                        <label for="">Provincia</label>
                        <select class="form-select" aria-label="Default select example" name="state" @change="getCities" required>
                            <option disabled selected>Seleccione su provincia</option>
                            <option v-for="state in provincias" :key="'state'+state.id" :value="state.name">{{ state.name }}</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6 mb-2">
                        <label for="">Ciudad</label>
                        <select class="form-select" aria-label="Default select example" name="city" required>
                            <option disabled selected>Seleccione su ciudad</option>
                            <option v-for="city in cities" :key="'city'+city.name" :value="city.name">{{ city.name }}</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6 mb-2">
                        <label for="zipcode">Código Postal</label>
                        <input type="number" name="zipcode" id="zipcode" class="form-control">
                    </div>
                    <div class="col-12 col-md-6 mb-2">
                        <label for="dni">DNI</label>
                        <input type="text" name="dni" id="dni" class="form-control">
                    </div>
                    <div class="mt-3">
                        <p>Productos</p>
                    </div>
                    <div>
                        <select class="form-select" @change="addToCart">
                            <option disabled selected>Seleccione un producto</option>
                            <option v-for="product in products" :key="product.id" :value="product.id">{{ product.name }}</option>
                        </select>
                    </div>
                    <div class="mt-3 border-bottom-1">
                        <p>Productos agregados</p>
                        <div v-for="item in cart" :key="item.id" class="row d-flex align-items-center mb-2">
                            <div class="col-6">
                                <p>
                                   <strong>{{ item.name }}</strong>
                                </p>
                                <p>{{ (item.total * 1.21).toFixed(2) }} &euro;</p>
                            </div>
                            <div class="col-4">
                                <div class="d-flex justify-content-center">
                                    <button @click.prevent="decrementProduct(item)" class="button-quantity" title="Quitar">-</button>
                                    <input class="box-quantity" type="text" :value="item.cartQuantity" readonly>
                                    <button @click.prevent="incrementProduct(item)" class="button-quantity" title="Añadir">+</button>
                                </div>
                            </div>
                            <div class="col-2" style="text-align:right;">
                                <p>
                                    <strong>
                                        <a @click="removeProduct(item.id)" :title="item.id">x</a>
                                    </strong>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>
                            Total:
                            <strong>{{ ((total - total_discount) * 1.21).toFixed(2) }} &euro;</strong>  
                        </p>
                    </div>
                    <div class="mt-5">
                        <label for="discount">Descuento</label>
                        <div class="d-flex">
                            <input type="number" class="form-control" placeholder="Introduce el descuento" v-model="discount" step="0.01">
                            <button class="ms-1 btn btn-primary" @click.prevent="applyDiscount">Aplicar</button>
                        </div>
                    </div>
                    <div class="mt-5 d-flex justify-content-center">
                        <button class="btn bg-trivi-green text-white" type="submit">Crear Factura</button>
                    </div>
                </div>
            </form>
        </div>
        <SuccessInvoiceModal />
        <ErrorModal />
    </div>
</template>

<script>
import provincias from '@/data/provincias.json'
import ciudades from '@/data/ciudades.json'
export default {

    data() {
        return {
            paises: [
                { id: 28, name: 'España' }
            ],
            ciudades,
            provincias,
            cities: [],
            cart: [],
            products: [],
            total: 0,
            discount: 0,
            total_discount: 0
        }
    },

    components: {
        SuccessInvoiceModal: () => import('@/components/invoices/SuccessInvoiceModal.vue'),
        ErrorModal: () => import('@/components/invoices/ErrorModal.vue')
    },

    mounted() {
        this.getProducts()
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

        async getProducts() {
            this.$root.$emit('loading', true)
            await this.$store.dispatch('getProducts', {
                page: '',
                category: '',
                search: '',
                slug: '',
                sort: '',
                tag: '',
                status: '',
            })
            const products = this.$store.getters.getProducts
            this.products = products.data

            this.$root.$emit('loading', false)
        },

        addToCart(e) {
            const product_id = e.target.value
            const product = this.products.find(product => product.id == product_id)
            if(this.cart.find(item => item.id == product.id)) {
                let cartItem = this.cart.find(item => item.id == product.id).cartQuantity++
                this.cart.find(item => item.id == product.id).total = product.price_base * (cartItem + 1)
                this.getTotal()
            } else {
                this.cart.push({...product, cartQuantity: 1, total: product.price_base * 1})
                this.getTotal()
            }
        },

        incrementProduct(product) {
            this.cart.find(item => item.id === product.id).cartQuantity++
            this.cart.find(item => item.id === product.id).total = product.price_base * product.cartQuantity
            this.getTotal()
        },

        decrementProduct(product) {
            this.cart.find(item => item.id === product.id).cartQuantity--
            this.cart.find(item => item.id === product.id).total = product.price_base * product.cartQuantity
            this.getTotal()
        },

        getTotal() {
            this.total = this.cart.reduce((acc, item) => acc + item.total, 0)
        },

        removeProduct(product) {
            this.cart = this.cart.filter(item => {
                return item.id != product
            })
            this.getTotal()
        },

        applyDiscount() {
            this.total_discount = ((this.total * this.discount) / 100).toFixed(2)
        },

        async createInvoice() {
            const form = this.$refs.createinvoice
            const data = new FormData(form)
            data.append('total', this.total)
            data.append('subTotal', this.total)
            data.append('discount', this.discount)
            data.append('products', JSON.stringify(this.cart))
            await this.$axios.post('/api/new-invoice', data)
            .then(res => {
                const response = res.data
                this.$refs.createinvoice.reset()
                this.cart = []
                this.total = 0
                this.discount = 0
                this.total_discount = 0
                this.$modal.show('successInvoice', response)
            }).catch(err => {
                this.$modal.show('errorModal', err.response.data)
                //console.log(err)
            })
        }
    }

}
</script>

<style>
.box-quantity {
    width: 50px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
    margin: 0 5px;
}

.button-quantity {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
    margin: 0 5px;
    cursor: pointer;
}

</style>