<template>
    <div class="container">
        <div class="row">
            <div class="col-12 overflow-auto">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Fecha</th>
                        <th scope="col">Estado Pago</th>
                        <th scope="col">Estado Pedido</th>
                        <th scope="col">Método Pago</th>
                        <th scope="col">Transporte</th>
                        <th scope="col">Factura</th>
                        <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody v-if="orders.length > 0">
                        <tr v-for="order in orders" :key="order.id">
                            <td>{{ order.order_date }}</td>
                            <td v-if="order.paid == 'PENDIENTE'">Pendiente</td>
                            <td v-if="order.paid == 'PROCESANDO'">Procesando</td>
                            <td v-if="order.paid == 'PAGADO'">Pagado</td>
                            <td v-if="order.paid == 'RECHAZADO'">Rechazado</td>
                            <td v-if="order.paid == 'CONTRAREEMBOLSO'">Contra reembolso</td>
                            <td v-if="order.paid == 'TRANSFERENCIA'">Transferencia</td>
                            <td v-if="order.status == 4">Entregado</td>
                            <td v-else>Cancelado</td>
                            <td>{{ order.payment_method }}</td>
                            <td>{{ order.shipping_method }}</td>
                            <td v-if="order.invoice_paper == 1">Si</td>
                            <td v-else>No</td>
                            <td>
                                <n-link :to="`/orders/${order.id}`" class="btn btn-primary">
                                    <i class="pe-7s-look"></i>
                                </n-link>
                                <a v-if="order.paid == 'PAGADO' || order.paid == 'CONTRAREEMBOLSO' || order.paid == 'TRANSFERENCIA' && order.invoice != null" @click.prevent="getUrl(order)" class="btn btn-warning">
                                    <i class="pe-7s-download"></i>
                                </a>
                                <a v-if="order.note != null" class="btn btn-secondary" @click.prevent="onClick(order.note)">
                                    <i class=" pe-7s-note2"></i>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="6">No hay pedidos en el historial.</td>
                        </tr>
                    </tbody>
                </table>
                <Note />
                <div class="d-flex justify-content-center mt-5">
                    <nav aria-label="...">
                        <ul class="pagination-custom">
                            <client-only>
                                <li v-for="pagination_link in pagination.links" :key=" 'pagination_link-' + pagination_link.label" class="page-link-custom"
                                :class="{
                                    'disabled' : pagination_link.url == null,
                                    'active' : pagination_link.active == true
                                }">
                                    <a class="page-link" v-html="pagination_link.label" style="cursor: pointer;" @click.prevent="changePage(pagination_link.url)"></a>
                                </li>
                            </client-only>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    auth: true,

    data() {
        return {
            orders: [],
            users: [],
            order: {},
            user: {},
            pagination: {},
        }
    },

    components: {
        Note: () => import("@/components/orders/Note.vue"),
    },

    mounted() {
        this.getOrders();
        this.getUserName();
    },

    computed: {
        page() {
            let page = this.$route.query.page ?? 1;

            if(page > this.pagination.last_page){
                this.$router.replace({
                    query: {
                        page: this.pagination.last_page
                    }
                })
                this.$router.push();
                return this.pagination.last_page;
            }

            return page;
        },
    },

    watch: {
        page() {
            this.$nextTick(() => {
                this.$nuxt.$loading.start()
                setTimeout(() => {
                    this.$nuxt.$loading.finish()
                }, 500);
            });
            setTimeout(() => {
                this.getOrders();
            }, 500);
        },
    },


    methods: {
        onClick(note) {
            this.$modal.show('note', note);
        },

        async getOrders() {
            const response = await this.$axios.get('/api/orders?perPage=10&sort=-id&page=' + this.page + '&history[status]=' );
            this.orders = response.data.data;
            const paginations = response.data;
            this.pagination = {
                    links: paginations['meta'].links,
                    current_page: paginations['meta'].current_page,
                    last_page: paginations['meta'].last_page,
            }
        },

        async getUserName() {
            await this.$axios.get('/api/users')
                .then(response => {
                    this.users = response.data.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },

        getName(order) {
            let users = this.users;
            return users.filter(user => {
                if (user.id == order.user_profile_id) {
                    return user;
                }
            }).map(user => {
                return user.name + ' ' + user.lastname;
            }).toString();
        },


        changePage(url) {
            this.$router.replace({
                query: {
                    page : url.split('page=')[1]
                }
            });
        },

        async getUrl(order){
            let FileDownload = require('js-file-download');
            await this.$axios.get('/api/invoices/' + order.invoice.id, {
                responseType: 'blob'
            }).then(response => {
                FileDownload(response.data, order.invoice.filename);
            });
        },
    },
}
</script>

<style>

</style>