<template>
    <div>
        <div class="main w-100">
            <div class="mb-2 d-inline-block w-100">
                <div class="d-flex justify-content-end">
                    <button @click="closeAdd" class="btn bg-trivi-red text-white">
                        <i class="fa fa-close"></i>
                        Cerrar
                    </button>
                </div>
                <h2>Crear Post</h2>
            </div>
            <ImagesGalery />
            <DropZone />
            <form class="row mt-2" ref="updateproduct" @submit.prevent="createPost">
                <div class="col-12 mb-2">
                    <label for="imageUrl">URL Imagen Principal</label>
                    <input class="form-control" type="text" name="imageUrl" id="imageUrl" ref="imageUrl" />
                </div>
                <div class="col-12 mb-2">
                    <label for="title">Título</label>
                    <input class="form-control" type="text" name="name" ref="title">
                </div>
                <div class="col-12 mb-2">
                    <label for="title">Descripción</label>
                    <input class="form-control" type="text" name="description" ref="description">
                </div>
                <div class="col-12 mb-2">
                    <label for="content">Contenido</label>
                    <editor api-key="8e7yeojh0bqgf51hmsdm12zbmuqh7yjs010wttlmc8yzgm6o" v-model="content" :init="{height: 500, menubar: true, plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                        ], toolbar: 'undo redo | formatselect | bold italic backcolor | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | removeformat | help'}"></editor>
                </div>            
                <div class="col-12 mb-2">
                    <label for="category">Categorías</label>
                    <input type="text" class="form-control" name="category" id="category" ref="category" />
                </div>
                <div class="col-12 col-md-3 mb-2">
                    <label for="supplier">Mod</label>
                    <input class="form-control" type="text" name="supplier" ref="supplier">
                </div>
                <div class="col-12 col-md-3 mb-2">
                    <label for="author">
                        Autor
                    </label>
                    <input class="form-control" type="text" name="author" ref="author">
                </div>
                <div class="col-12 col-md-6 mb-2">
                    <label for="date">Fecha</label>
                    <input class="form-control" type="date" name="date" ref="date" :value="dateToday">
                </div>
                <div class="col-12 col-md-4 mb-2">
                    <label for="slug">Slug</label>
                    <input class="form-control" type="text" name="slug" ref="slug">
                </div>
                <div class="col-12 col-md-8 mb-2">
                    <label for="keywords">Palabras Clave</label>
                    <input class="form-control" type="text" name="keywords" ref="keywords">
                </div>
                <div class="col-12 col-md-4 mb-2">
                    <label for="metaDescription">Meta Descripción</label>
                    <input class="form-control" type="text" name="metaDescription" ref="metaDescription">
                </div>
                <div class="col-12 col-md-4 mb-2">
                    <label for="tags">Tags</label>
                    <input class="form-control" type="text" name="tags" ref="tags">
                </div>
                <div class="col-12 col-md-4 mb-2 pb-4 border-bottom-1">
                    <label for="minTags">Mini Tags</label>
                    <input class="form-control" type="text" name="minTags" ref="minTags">
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
import moment from 'moment';
export default {
    props: ['post'],
    data() {
        return {
            baseUrl: process.env.baseUrl,
            content: '',
            moment: moment,
            dateToday: '',
        };
    },
    components: {
        DropZone,
        ImagesGalery,
    },

    mounted() {
        let today = new Date();

        // Obtener los componentes de la fecha
        let year = today.getFullYear();
        let month = String(today.getMonth() + 1).padStart(2, '0');
        let day = String(today.getDate()).padStart(2, '0');

        // Formatear la fecha en el formato deseado (YYYY-MM-DD)
        this.dateToday = `${year}-${month}-${day}`;
    },

    methods: {
        async createPost() {
            await this.$axios.post('/api/blogs', {
                title: this.$refs.title.value,
                description: this.$refs.description.value,
                content: this.content,
                author: this.$refs.author.value,
                date: this.$refs.date.value,
                slug: this.$refs.slug.value,
                keywords: this.$refs.keywords.value,
                metaDescription: this.$refs.metaDescription.value,
                imageUrl: this.$refs.imageUrl.value,
                category: JSON.stringify(this.JSONParse(this.$refs.category.value)) ,
                supplier: this.$refs.supplier.value,
                tags: JSON.stringify(this.JSONParse(this.$refs.tags.value)),
                minTags: this.$refs.minTags.value,
            }).then((response) => {
                console.log(response);
                this.$notify({ title: 'El post se ha creado correctamente', type: 'success' });
            }).catch((error) => {
                console.log(error);
                this.$notify({ title: 'Ha ocurrido un error', type: 'error' });
            });
        },

        closeAdd() {
            this.$root.$emit('closeAdd', false);
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

}
</script>

