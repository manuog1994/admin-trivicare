<template>
    <div>
        <div class="d-flex justify-content-center">
            <h3>Productos más vendidos</h3>
        </div>
        <div class="d-md-flex justify-content-md-center w-100">
            <apexchart style="width: 100%; min-width: 500px; max-width: 650px; height: 30vh;" type="donut" :options="options" :series="series"></apexchart>
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
                labels: [],
            },
            series: [],

        }
    },

    mounted() {
        this.getProducts()
    },

    methods: {
        async getProducts() {
            this.$root.$emit('loading', true)
            await this.$axios.get('/api/products')
                .then(response => {
                    this.products = response.data.data
                    //console.log(this.products)
                    this.products.forEach(product => {
                        this.series.push(product.sold == null ? 0 : product.sold)
                        this.options.labels.push(product.name)
                    })
                    this.$root.$emit('loading', false)
                }
            )
        }
    }
  }
  </script>