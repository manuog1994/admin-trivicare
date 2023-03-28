<template>
    <div class="mb-2">
        <div class="d-flex justify-content-center">
            <h3>Ventas por mes</h3>
        </div>
        <div class="d-flex justify-content-center">
            <apexchart style="width: 100%; min-width: 300px; max-width: 650px; height: 30vh;" type="bar" :options="options" :series="series"></apexchart>
        </div>
    </div>
</template>
  
  <script>
  export default {
    name: 'Donut',
    components: {
      [process.browser && 'apexchart']: () => import('vue-apexcharts'),
    },
    data: function() {
        return {
            options: {
                chart: {
                id: 'vuechart-example'
                },
                xaxis: {
                categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
                }
            },
            series: [{
                name: 'series-1',
                data: []
            }],
            orders: [],
            jan: [],
            feb: [],
            mar: [],
            apr: [],
            may: [],
            jun: [],
            jul: [],
            aug: [],
            sep: [],
            oct: [],
            nov: [],
            dec: [],
        }
    },
    
    mounted() {
        this.getOrders()
    },

    methods: {
        getOrders() {
            this.$axios.get('/api/orders')
            .then(response => {
                this.orders = response.data.data
                // si el año del created_at es igual al año actual
            
                this.orders.filter(order => {
                    if(new Date(order.created_at).getFullYear() == new Date().getFullYear()) {
                        // Iterar y asignar valores a cada mes              
                        this.jan = this.orders.filter(order => new Date(order.created_at).getMonth() + 1 == 1 && new Date(order.created_at).getFullYear() == new Date().getFullYear()).length > 0 ? this.orders.filter(order => new Date(order.created_at).getMonth() + 1 == 1).length : 0
                        this.feb = this.orders.filter(order => new Date(order.created_at).getMonth() + 1 == 2 && new Date(order.created_at).getFullYear() == new Date().getFullYear()).length > 0 ? this.orders.filter(order => new Date(order.created_at).getMonth() + 1 == 2).length : 0
                        this.mar = this.orders.filter(order => new Date(order.created_at).getMonth() + 1 == 3 && new Date(order.created_at).getFullYear() == new Date().getFullYear()).length > 0 ? this.orders.filter(order => new Date(order.created_at).getMonth() + 1 == 3).length : 0
                        this.apr = this.orders.filter(order => new Date(order.created_at).getMonth() + 1 == 4 && new Date(order.created_at).getFullYear() == new Date().getFullYear()).length > 0 ? this.orders.filter(order => new Date(order.created_at).getMonth() + 1 == 4).length : 0
                        this.may = this.orders.filter(order => new Date(order.created_at).getMonth() + 1 == 5 && new Date(order.created_at).getFullYear() == new Date().getFullYear()).length > 0 ? this.orders.filter(order => new Date(order.created_at).getMonth() + 1 == 5).length : 0
                        this.jun = this.orders.filter(order => new Date(order.created_at).getMonth() + 1 == 6 && new Date(order.created_at).getFullYear() == new Date().getFullYear()).length > 0 ? this.orders.filter(order => new Date(order.created_at).getMonth() + 1 == 6).length : 0
                        this.jul = this.orders.filter(order => new Date(order.created_at).getMonth() + 1 == 7 && new Date(order.created_at).getFullYear() == new Date().getFullYear()).length > 0 ? this.orders.filter(order => new Date(order.created_at).getMonth() + 1 == 7).length : 0
                        this.aug = this.orders.filter(order => new Date(order.created_at).getMonth() + 1 == 8 && new Date(order.created_at).getFullYear() == new Date().getFullYear()).length > 0 ? this.orders.filter(order => new Date(order.created_at).getMonth() + 1 == 8).length : 0
                        this.sep = this.orders.filter(order => new Date(order.created_at).getMonth() + 1 == 9 && new Date(order.created_at).getFullYear() == new Date().getFullYear()).length > 0 ? this.orders.filter(order => new Date(order.created_at).getMonth() + 1 == 9).length : 0
                        this.oct = this.orders.filter(order => new Date(order.created_at).getMonth() + 1 == 10 && new Date(order.created_at).getFullYear() == new Date().getFullYear()).length > 0 ? this.orders.filter(order => new Date(order.created_at).getMonth() + 1 == 10).length : 0
                        this.nov = this.orders.filter(order => new Date(order.created_at).getMonth() + 1 == 11 && new Date(order.created_at).getFullYear() == new Date().getFullYear()).length > 0 ? this.orders.filter(order => new Date(order.created_at).getMonth() + 1 == 11).length : 0
                        this.dec = this.orders.filter(order => new Date(order.created_at).getMonth() + 1 == 12 && new Date(order.created_at).getFullYear() == new Date().getFullYear()).length > 0 ? this.orders.filter(order => new Date(order.created_at).getMonth() + 1 == 12).length : 0
                    }
                })

                this.series = [{
                    name: 'series-1',
                    data: [this.jan, this.feb, this.mar, this.apr, this.may, this.jun, this.jul, this.aug, this.sep, this.oct, this.nov, this.dec]
                }]
            })
        }
    }
  }
  </script>