<template>
    <div class="container-fluid">
        <div class="mb-4">
            <h2>Visitas</h2>
        </div>
        <div class="d-flex justify-content-around">
            <div class="card bg-trivi-green text-white shadow" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title text-white">Inicio</h5>
                    <p class="card-text fa-2x text-white">{{ visitsIndex[0]?.count }} Visitas</p>
                    <h6 class="card-subtitle mb-2 font-big text-end">Hoy</h6>
                </div>
            </div>
            <div class="card bg-trivi-orange text-white shadow" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title text-white">Tienda</h5>
                    <p class="card-text fa-2x text-white">{{ visitsShop[0]?.count }} Visitas</p>
                    <h6 class="card-subtitle mb-2 font-big text-end">Hoy</h6>
                </div>
            </div>
            <div class="card bg-trivi-red text-white shadow" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title text-white">Páginas de Productos</h5>
                    <p class="card-text fa-2x text-white">{{ otherVisits }} Visitas</p>
                    <h6 class="card-subtitle mb-2 font-big text-end">Hoy</h6>
                </div>
            </div>
        </div>
        <div class="mt-5">
            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Página</th>
                        <th>Visitas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="visit in visits" :key="visit.id">
                        <td>{{ visit.date }}</td>
                        <td>{{ visit.page }}</td>
                        <td>{{ visit.count }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                visitsIndex: 0,
                visitsShop: 0,
                otherVisits: 0,
                visits: []
            }
        },

        async mounted() {
            await this.getVisits()
        },

        methods: {
            getVisits() {
                this.$axios.get('/api/visits')
                .then(response => {
                    //filtrar visitas del dia de hoy y pagina /
                    const today = new Date().toISOString().slice(0, 10)
                    this.visitsIndex = response.data.filter(visit => visit.date === today && visit.page === '/');
                    //filtrar visitas del dia de hoy y pagina /shop
                    this.visitsShop = response.data.filter(visit => visit.date === today && visit.page === '/shop');
                    //filtrar visitas del dia de hoy y paginas que no sean / o /shop
                    this.otherVisits = response.data.filter(visit => visit.date === today && visit.page !== '/' && visit.page !== '/shop').length;
                    //filtrar visitas del dia de hoy
                    this.visits = response.data.filter(visit => visit.date === today);
                })
            }
        }
    }
</script>

<style scoped>
    .font-big {
        position: relative;
        font-size: 3rem;
        font-weight: 800;
        color: rgba(255, 255, 255, 0.701);
    }
</style>