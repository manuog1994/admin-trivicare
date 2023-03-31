<template>
    <div>
        <div class="main" v-if="!newInvoice">
            <div>
                <div v-if="selectedInvoices?.length == 0" class="d-flex justify-content-end">
                    <button @click="newInvoice = true" class="btn bg-trivi-red text-white mb-2">
                        <i class="fa fa-plus"></i>
                    </button>
                </div>
                <div v-if="selectedInvoices?.length > 0" class="d-flex justify-content-end">
                    <button @click="downloadZip" class="btn bg-trivi-green text-white mb-2">
                        <i class="fa fa-download"></i>
                        Descargar {{ selectedInvoices?.length }} facturas
                    </button>
                </div>
                <div>
                    <h2>Facturas</h2>
                </div>
            </div>
            <div class="d-flex justify-content-between">
                <!-- Crear un select para mostrar más o menos resultados -->
                <div class="form-group">
                    <label for="limit">Mostrar</label>
                    <select class="form-control" id="limit" v-model="limit">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="1000">Todo</option>
                    </select>
                </div>
    
                <div class="d-flex">
                    <!-- Crear un filtro que filtre las facturas por día -->
    
                    <div class="form-group me-2">
                        <label for="day">Día</label>
                        <select class="form-control" id="day" v-model="day">
                            <option value="0">Todos</option>
                            <option v-for="day in 31" :key="day" :value="day">{{ day }}</option>
                        </select>
                    </div>
            
    
                    <!-- Crear un filtro que filtre las facturas por mes -->
                    <div class="form-group me-2">
                        <label for="month">Mes</label>
                        <select class="form-control" id="month" v-model="month">
                            <option value="0">Todos</option>
                            <option value="1">Enero</option>
                            <option value="2">Febrero</option>
                            <option value="3">Marzo</option>
                            <option value="4">Abril</option>
                            <option value="5">Mayo</option>
                            <option value="6">Junio</option>
                            <option value="7">Julio</option>
                            <option value="8">Agosto</option>
                            <option value="9">Septiembre</option>
                            <option value="10">Octubre</option>
                            <option value="11">Noviembre</option>
                            <option value="12">Diciembre</option>
                        </select>
                    </div>
                    <!-- Crear un filtro que filtre las facturas por año -->
    
                    <div class="form-group">
                        <label for="year">Año</label>
                        <select class="form-control" id="year" v-model="year">
                            <option value="0">Todos</option>
                            <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                        </select>
                    </div>
    
    
                </div>
            </div>
    
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                        <th>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" ref="checkSelect" @change="selectAll">
                            </div>
                        </th>
                        <th scope="">Factura</th>
                        <th scope="">Cliente</th>
                        <th scope="">Fecha</th>
                        <th scope="">Acciones</th>
                        </tr>
                    </thead>
                    <tbody v-if="invoices?.length > 0">
                        <tr v-for="invoice in paginatedItems" :key="invoice.id">
                            <td>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" :value="invoice.id" v-model="selectedInvoices">
                                </div>
                            </td>
                            <td>{{ invoice.invoice_number }}</td>
                            <td>{{ invoice.order?.user_profile?.name == 'Guest' ? invoice.order?.guest?.name : invoice.order?.user_profile?.name }} {{ invoice.order?.user_profile?.lastname == 'Guest' ? invoice.order?.guest?.lastname : invoice.order?.user_profile?.lastname }}</td>
                            <td>{{ formatDate(invoice.created_at) }}</td>
                            <td>
                                <!-- <a @click.prevent="changeView(invoice.id)" class="p-2">
                                    <i class="pe-7s-look"></i>
                                </a> -->
                                <a @click.prevent="getUrl(invoice)" class="btn bg-trivi-orange">
                                    <i class="pe-7s-download"></i>
                                </a>
                            </td>
    
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="6">No hay pedidos pendientes.</td>
                        </tr>
                    </tbody>
                </table>
                <!-- paginación -->
                <div class="d-flex justify-content-center mt-2">
                    <pagination v-model="page" :records="invoices.length" :perPage="parseInt(limit)" @paginate="myCallback"></pagination>
                </div>
            </div>
        </div>
        <InvoiceViewer v-if="pdfViewer" :id="id" />
        <NewInvoice v-if="newInvoice" />
    </div>
</template>

<script>
export default {
    auth: true,

    data() {
        return {
            invoices: [],
            selectedInvoices: [],
            month: 0,
            limit: 10,
            day: 0,
            year: 0,
            years: [],
            page: 1,
            perPage: 10,
            pdfViewer: false,
            id: '',
            newInvoice: false,
        }
    },

    beforeMount() {
        this.$root.$on('closeNewInvoice', (data) => {
            this.newInvoice = data;
        });
    },

    mounted() {
        this.getInvoices();
    },

    components: {
        InvoiceViewer: () => import('@/components/invoices/InvoiceViewer.vue'),
        NewInvoice: () => import('@/components/invoices/NewInvoice.vue'),
    },

    computed: {
        paginatedItems () {
            const start = (this.page - 1) * parseInt(this.limit)
            return this.invoices.slice(start, start + parseInt(this.limit))
        }
    }, 

    watch: {
        day() {
            setTimeout(() => {
                this.getInvoices();
            }, 500);
        },

        month() {
            setTimeout(() => {
                this.getInvoices();
            }, 500);
        },

        year() {
            setTimeout(() => {
                this.getInvoices();
            }, 500);
        },

        limit() {
            setTimeout(() => {
                this.getInvoices();
            }, 500);
        },

        id() {
            this.pdfViewer = true;
        }
    },


    methods: {
        async getInvoices() {
            this.$root.$emit('loading', true)
            const response = await this.$axios.get('/api/invoice');
            this.invoices = response.data.data;
            // Filtrar por dia
            if(this.day != 0){
                this.invoices = this.invoices.filter(invoice => {
                    let date = new Date(invoice.created_at);
                    return date.getDate() == this.day;
                });
            }
            // Filtrar por mes
            if(this.month != 0){
                this.invoices = this.invoices.filter(invoice => {
                    let date = new Date(invoice.created_at);
                    return date.getMonth() + 1 == this.month;
                });
            }
            // Filtrar por año
            if(this.year != 0){
                this.invoices = this.invoices.filter(invoice => {
                    let date = new Date(invoice.created_at);
                    return date.getFullYear() == this.year;
                });
            }

            this.getYears();
            this.$root.$emit('loading', false)
        },

        async getUrl(invoice){
            let FileDownload = require('js-file-download');
            await this.$axios.get('/api/invoices/' + invoice.id, {
                responseType: 'blob'
            }).then(response => {
                FileDownload(response.data, invoice.filename);
            });
        },

        formatDate(date) {
            let d = new Date(date);
            let month = '' + (d.getMonth() + 1);
            let day = '' + d.getDate();
            let year = d.getFullYear();

            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;

            return [day, month, year].join('-');
        },

        // Descargar zip de facturas
        async downloadZip() {
            let FileDownload = require('js-file-download');
            await this.$axios.get('/api/multiples-invoices'
                , {
                    responseType: 'blob',
                    params: {
                        selecteds: JSON.stringify(this.selectedInvoices)
                    }
                }
            ).then(response => {
                FileDownload(response.data, 'facturas.zip');
                //console.log(response.data);
            }).catch(error => {
                //console.log(error.response.data.message);
            })
        },

        selectAll() {
            if(this.$refs.checkSelect.checked){
                this.invoices.forEach(invoice => {
                this.selectedInvoices.push(invoice.id);
            });
            }else{
                this.selectedInvoices = [];
            }
        },

        getYears() {
            // Crear array de años disponibles en las facturas
            this.invoices.forEach(invoice => {
                let date = new Date(invoice.created_at);
                if(!this.years.includes(date.getFullYear())){
                    this.years.push(date.getFullYear());
                }
            });

            
        },

        myCallback(page) {
            this.page = page;
        },

        async changeView(id) {
            this.id = id;
        }
    },
}
</script>

<style>

</style>