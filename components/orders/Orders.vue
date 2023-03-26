<template>
    <div class="main">
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="">Cliente</th>
                    <th scope="">Fecha</th>
                    <th scope="">Estado</th>
                    <th scope="">Acciones</th>
                    </tr>
                </thead>
                <tbody v-if="orders.length > 0">
                    <tr v-for="order in orders" :key="order.id">
                        <td v-if="order.guest == null">{{ order.user_profile?.name }} {{ order.user_profile?.lastname }}</td>
                        <td v-else>{{ order.guest?.name }} {{ order.guest?.lastname }}</td>
                        <td>{{ order.order_date }}</td>
                        <td v-if="order.paid == 'PENDIENTE'">
                            <select class="form-control w-50" :value="order.paid" @change="updatePaid" @click="loadOrder(order)">
                                <option value="PENDIENTE">Pendiente</option>
                                <option value="PAGADO">Pagado</option>
                                <option value="RECHAZADO">Rechazado</option>
                            </select>
                        </td>
                        <td v-if="order.paid == 'PROCESANDO'">Procesando</td>
                        <td v-if="order.paid == 'PAGADO'">Pagado</td>
                        <td v-if="order.paid == 'RECHAZADO'">Rechazado</td>
                        <td v-if="order.paid == 'CONTRAREEMBOLSO'">Contra reembolso</td>
                        <td v-if="order.paid == 'TRANSFERENCIA'">Transferencia</td>
                        <td>
                            <n-link :to="`/orders/${order.id}`" class="p-2">
                                <i class="pe-7s-look"></i>
                            </n-link>
                            <a v-if="order.paid == 'PAGADO' || order.paid == 'CONTRAREEMBOLSO' || order.paid == 'TRANSFERENCIA' && order.invoice != null" @click.prevent="getUrl(order)" class="p-2">
                                <i class="pe-7s-download"></i>
                            </a>
                            <a v-if="order.note != null" class="p-2" @click.prevent="onClick(order.note)">
                                <i class=" pe-7s-note2"></i>
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
            <Note />
            <ModalTrack />
            <!-- paginación -->
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
        ModalTrack: () => import("@/components/orders/ModalTrack.vue"),
    },

    mounted() {
        this.getOrders();
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
            const response = await this.$axios.get('/api/orders?perPage=10&sort=-id&page=' + this.page + '&status[status]=' );
            this.orders = response.data.data;
            const paginations = response.data;
            this.pagination = {
                links: paginations['meta'].links,
                current_page: paginations['meta'].current_page,
                last_page: paginations['meta'].last_page,
            }
        },

        async getUrl(order){
            let FileDownload = require('js-file-download');
            await this.$axios.get('/api/invoices/' + order.invoice.id, {
                responseType: 'blob'
            }).then(response => {
                FileDownload(response.data, order.invoice.filename);
            });
        },

        loadOrder(order) {
            this.order = order;
        },

        async updateStatus(e) {
            const status = e.target.value;
            if (status == 3) {
                this.$modal.show('modal-track', this.order.id);
            } else {
                await this.$axios.put('/api/orders/status/' + this.order.id, {
                    status: status
                }).then(() => this.$notify({ title: 'El estado del pedido ha sido actualizado'}));
            }
        },

        async updatePaid(e) {
            const paid = e.target.value;
            await this.$axios.put('/api/orders/paid/' + this.order.id, {
                paid: paid
            }).then(() => this.$notify({ title: 'El estado del pedido ha sido actualizado'}));
            
        },

        changePage(url) {
            this.$router.replace({
                query: {
                    page : url.split('page=')[1]
                }
            });
        },
    },
}
</script>

<style lang="scss">
    .w-10 {
        width: 10px;
    }

    .pagination-custom {
        display: flex;
        padding-left: 0;
        list-style: none;
    }

    .page-link-custom {
        position: relative;
        font-size: 18px;
        display: flex;
        padding: 0 .75rem;
        color: #686868;
        text-decoration: none;
        background-color: #fff;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
    @media (prefers-reduced-motion: reduce) {
    .page-link-custom {
        transition: none;
    }
    }
    .page-link-custom:hover {
    z-index: 2;
    color: orange;
    }
    .page-link-custom:focus {
    z-index: 3;
    color: orange;
    outline: 0;
    }
    .page-link-custom.active {
        color: orange;
    }
    .page-link-custom.disabled {
        color: #a0a0a0;
    }

    .main {
        float: right;
        width: 80%;
        padding: 20px;

        @media only screen and (max-width: 600px) {
            width: 100%;
        }
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th, td {
        padding: 10px;
        text-align: left;
        border-bottom: 1px solid #ccc;
    }

    th {
        background-color: #eee;
    }
</style>