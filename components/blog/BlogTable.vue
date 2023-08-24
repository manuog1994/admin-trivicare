<template>
    <div>
        <div class="main">
            <!-- Botón para añadir un nuevo producto -->
            <div v-if="edit == false && newProduct == false" class="d-flex justify-content-end mb-4">
                <button @click="onClickNew" class="btn btn-primary">
                    <i class="fa fa-plus"></i>
                </button>
            </div>
            <!-- Tabla con todos los productos -->
            <table class="table" v-if="edit == false && newProduct == false">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Título</th>
                    <th scope="col">Categorías</th>
                    <th scope="col">Autor</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody v-if="blogs.length > 0">
                    <tr v-for="blog in paginatedItems" :key="blog.id">
                    <th scope="row">{{ blog.id }}</th>
                    <td>{{ blog.title }}</td>
                    <td>{{ blog.category }}</td>
                    <td>{{ blog.author }}</td>
                    <td>
                        <select class="form-select" name="status" @change="updateStatus(blog)">
                            <option>{{ blog.status }}</option>
                            <option v-if="blog.status === 'Borrador'" value="Publicado">Publicado</option>
                            <option v-else value="Borrador">Borrador</option>
                        </select>
                    </td>
                    <td>
                        <div>
                            <button title="Editar blog" @click="onClick(blog)" class="btn btn-warning btn-sm text-white">
                                <i class="fa fa-edit"></i>
                            </button>
                            <button title="Eliminar blog" class="btn btn-danger btn-sm text-white" @click="destroy(blog.id)">
                                <i class="fa fa-trash"></i>
                            </button>
                        </div>
                    </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <td colspan="8">No hay post.</td>
                    </tr>
                </tbody>
            </table>
            <!-- paginación -->
            <div v-if="edit == false && newProduct == false" class="d-flex justify-content-center mt-2">
                <pagination v-model="page" :records="blogs.length" :perPage="perPage" @paginate="myCallback"></pagination>
            </div>
            <!-- Editor de productos -->
            <EditBlog v-if="edit == true" :post="blog" />
            <!-- Crear nuevo producto -->
            <CreateBlog v-if="newProduct == true" />
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
    components: {
        EditBlog: () => import("@/components/blog/EditBlog"),
        CreateBlog: () => import("@/components/blog/CreateBlog"),
    },
    data() {
        return {
            blogs: [],
            status: '',
            productId: '',
            yesterday: [],
            today: [],
            index: [],
            store: [],
            productsVisitors: [],
            cart: [],
            checkout: [],
            product : [],
            edit: false,
            newProduct: false,
            page: 1,
            perPage: 10,
        }
    },

    beforeMount() {
        this.$root.$on('closeAdd', (data) => {
            this.newProduct = data;
        })
        this.$root.$on('closeEdit', (data) => {
            this.edit = data;
        })
    },

    async mounted() {
        await this.getBlogs();
    },

    computed: {
        paginatedItems () {
            const start = (this.page - 1) * this.perPage
            return this.blogs.slice(start, start + this.perPage)
        }
    },

    methods: {
        async getBlogs() {
            await this.$axios.get('/api/blogs')
                .then(response => {
                    this.blogs = response.data.data;
                    this.$root.$emit('loading', false);
                })
        },

        onClick(blog) {
            this.$root.$emit('loading', true);
            this.edit = true;
            this.blog = blog;
        },

        onClickNew() {
            this.$root.$emit('loading', true);
            this.newProduct = true;
        },


        async updateStatus(blog) {
            if (blog.status === 'Publicado') {
            await this.$axios.put('/api/blogs/status/' + blog.id, {
                status: 'Borrador',
            }).then(res => {
                this.$notify({title: 'Estado del producto actualizado'})});
            } else {
                await this.$axios.put('/api/blogs/status/' + blog.id, {
                status: 'Publicado',
             }).then(res => {
                 this.$notify({title: 'Estado del producto actualizado'})});
                }
            
                window.location.reload(true);

        },

        destroy(id) {
            Swal.fire({
                title: '¿Estás seguro?',
                text: "¡No podrás revertir esto!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '¡Sí, bórralo!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$axios.delete('/api/blogs/' + id)
                    .then(res => {
                        this.$notify({title: 'Producto eliminado'})
                        window.location.reload(true);
                    })
                }
            })
        },

        myCallback(page) {
            this.page = page;
        }
    },
}
</script>
