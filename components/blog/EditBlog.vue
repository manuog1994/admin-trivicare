<template>
    <div>
        <div class="main w-100">
            <div class="mb-2 d-inline-block w-100">
                <div class="d-flex justify-content-end">
                    <button @click="closeEdit" class="btn bg-trivi-red text-white">
                        <i class="fa fa-close"></i>
                        Cerrar
                    </button>
                </div>
                <h2>Modificar Post</h2>
            </div>
            <ImagesGalery />
            <DropZone />
            <form class="row mt-2" ref="updateproduct" @submit="updatePost">
                <div class="col-12 mb-2">
                    <label for="imageUrl">URL Imagen Principal</label>
                    <input class="form-control" type="text" name="imageUrl" id="imageUrl" :value="item.imageUrl" ref="imageUrl" />
                </div>
                <div class="col-12 mb-2">
                    <label for="title">Título</label>
                    <input class="form-control" type="text" name="name" :value="item.title" ref="title">
                </div>
                <div class="col-12 mb-2">
                    <label for="title">Descripción</label>
                    <input class="form-control" type="text" name="description" :value="item.description" ref="description">
                </div>
                <div class="col-12 mb-2">
                    <label for="content">Contenido</label>
                    <editor api-key="8e7yeojh0bqgf51hmsdm12zbmuqh7yjs010wttlmc8yzgm6o" v-model="item.content" :init="{height: 500, menubar: true, plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                        ], toolbar: 'undo redo | formatselect | bold italic backcolor | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | removeformat | help'}"></editor>
                </div>            
                <div class="col-12 mb-2">
                    <label for="category">Categorías</label>
                    <input type="text" class="form-control" name="category" id="category" :value="JSONStringify(item.category)" ref="category" />
                </div>
                <div class="col-12 col-md-3 mb-2">
                    <label for="supplier">Mod</label>
                    <input class="form-control" type="text" name="supplier" :value="item.supplier" ref="supplier">
                </div>
                <div class="col-12 col-md-3 mb-2">
                    <label for="author">
                        Autor
                    </label>
                    <input class="form-control" type="text" name="author" :value="item.author" ref="author">
                </div>
                <div class="col-12 col-md-6 mb-2">
                    <label for="date">Fecha</label>
                    <input class="form-control" type="date" name="date" :value="item.date" ref="date">
                </div>
                <div class="col-12 col-md-4 mb-2">
                    <label for="slug">Slug</label>
                    <input class="form-control" type="text" name="slug" :value="item.slug" ref="slug">
                </div>
                <div class="col-12 col-md-8 mb-2">
                    <label for="keywords">Palabras Clave</label>
                    <input class="form-control" type="text" name="keywords" :value="item.keywords" ref="keywords">
                </div>
                <div class="col-12 col-md-4 mb-2">
                    <label for="metaDescription">Meta Descripción</label>
                    <input class="form-control" type="text" name="metaDescription" :value="item.metaDescription" ref="metaDescription">
                </div>
                <div class="col-12 col-md-4 mb-2">
                    <label for="tags">Tags</label>
                    <input class="form-control" type="text" name="tags" :value="JSONStringify(item.tags)" ref="tags">
                </div>
                <div class="col-12 col-md-4 mb-2 pb-4 border-bottom-1">
                    <label for="minTags">Mini Tags</label>
                    <input class="form-control" type="text" name="minTags" :value="item.minTags" ref="minTags">
                </div>
                <div class="mb-2">
                    <button class="btn btn-primary" type="submit" title="Guardar">Guardar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import DropZone from '../DropZone.vue';
import ImagesGalery from '../ImagesGalery.vue';
export default {
    props: ['post'],
    data() {
        return {
            item: {
                title: '',
                description: '',
                content: '',
                imageUrl: '',
                category: '',
                supplier: '',
                author: '',
                date: '',
                slug: '',
                keywords: '',
                metaDescription: '',
                tags: '',
                minTags: '',
            },
            baseUrl: process.env.baseUrl,
        };
    },
    async mounted() {
        await this.getBlogs();
    },
    methods: {
        async getBlogs() {
            await this.$axios.get('/api/blogs')
                .then(response => {
                const data = response.data.data;
                data.filter(post => {
                    if (post.id === this.post.id) {
                        this.item = post;
                    }
                });
                this.$root.$emit('loading', false);
            })
                .catch(error => {
                console.log(error);
                this.$root.$emit('loading', false);
            });
        },
        async updatePost() {
            await this.$axios.put('/api/blogs/' + this.item.id, {
                title: this.$refs.title.value,
                description: this.$refs.description.value,
                content: this.item.content,
                author: this.$refs.author.value,
                slug: this.$refs.slug.value,
                date: this.$refs.date.value,
                keywords: this.$refs.keywords.value,
                metaDescription: this.$refs.metaDescription.value,
                imageUrl: this.$refs.imageUrl.value,
                category: JSON.stringify(this.JSONParse(this.$refs.category.value)),
                supplier: this.$refs.supplier.value,
                tags: JSON.stringify(this.JSONParse(this.$refs.tags.value)),
                minTags: this.$refs.minTags.value,
            }).then((response) => {
                console.log(response);
                this.$notify({ title: 'El post se ha actualizado correctamente', type: 'success' });
            })
                .catch((error) => {
                console.log(error);
                this.$notify({ title: 'Ha ocurrido un error', type: 'error' });
            });
        },

        closeEdit() {
            this.$root.$emit('closeEdit', false);
        },
        
        JSONStringify(data) {
            //eliminar [] y "" de los tags
            data = data.replace(/"/g, '');
            data = data.replace('[', '');
            data = data.replace(']', '');
            return data;
        },
        //proceso inverso a JSONStringify
        JSONParse(data) {
            //eliminar los espacios
            data = data.replace(/ /g, '');
            //meter en un array los tags
            data = data.split(',');
            return data;
        },
    },
    components: { DropZone, ImagesGalery },
}
</script>

