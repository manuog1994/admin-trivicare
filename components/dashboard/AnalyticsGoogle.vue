<template>
    <div>
      <apexchart :options="options" :series="series" type="line" height="350" />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        options: {
          chart: {
            id: 'visits-chart'
          },
          xaxis: {
            categories: []
          }
        },
        series: [
          {
            name: 'Visitas',
            data: []
          }
        ]
      }
    },
    mounted() {
      const viewId = 'TU_VIEW_ID_DE_GOOGLE_ANALYTICS' // Reemplaza esto con el ID de vista que deseas utilizar.
      const startDate = '7daysAgo'
      const endDate = 'today'
      const metrics = 'ga:sessions'
  
      this.$ga.ready(() => {
        this.$ga
          .get('/data/ga', {
            params: {
              ids: `ga:${viewId}`,
              'start-date': startDate,
              'end-date': endDate,
              metrics: metrics
            }
          })
          .then(response => {
            const data = response.data.rows.map(row => parseInt(row[0]))
            const categories = response.data.rows.map(row => row[1])
            this.series[0].data = data
            this.options.xaxis.categories = categories
          })
      })
    }
  }
  </script>
  