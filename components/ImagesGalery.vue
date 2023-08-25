<template>
    <div class="container-fluid mt-5 mt-5">
        <swiper :options="swiperOption" ref="mySwiper" class="swiper-container">
            <swiper-slide v-for="(image, index) in images" :key="index">
                <div class="image-container">
                    <img :src="baseUrl + '/' + image.url" alt="">
                    <div class="overlay">
                        <button class="overlay-button" @click.prevent="copyImage(image.url)">
                            <i class="fa fa-copy"></i>
                        </button>
                        <button class="overlay-button" @click.prevent="deleteImage(image.id)">
                            <i class="fa fa-trash"></i>
                        </button>
                    </div>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="d-flex justify-content-center mt-5 mb-5">
            <button class="btn btn-primary" @click.prevent="getImages">Recargar</button>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
    data() {
        return {
            images: [],
            baseUrl: process.env.baseUrl,
            swiperOption: {
                slidesPerView: 3,
                spaceBetween: 50,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            },
        }
    },

    async mounted() {
        await this.getImages();
    },

    methods: {
        async getImages() {
            await this.$axios.get('/api/images-post')
                .then(response => {
                    this.images = response.data.data;
                    //ordenar las imagenes por id
                    this.images.sort((a, b) => b.id - a.id);
                    this.$root.$emit('loading', false);
                })
        },

        copyImage(url) {
            const el = document.createElement('textarea');
            el.value = this.baseUrl + '/' + url;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            Swal.fire({
                icon: 'success',
                title: 'Imagen copiada',
                showConfirmButton: false,
                timer: 1500
            })
        },

        deleteImage(id) {
            Swal.fire({
                title: '¿Estás seguro?',
                text: "¡No podrás revertir esto!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                cancelButtonText: 'Cancelar',
                confirmButtonText: 'Sí, bórralo'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$axios.delete('/api/images-post/' + id)
                        .then(response => {
                            console.log(response);
                            Swal.fire(
                                '¡Eliminado!',
                                'La imagen ha sido eliminada.',
                                'success'
                            )
                            this.getImages();
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.galery-horizontal {
    display: flex;
    justify-content: space-around;
    overflow: auto;
}

.swiper-container {
    width: 100%;
    height: 45vh;
}

.image-container {
    position: relative;
    display: inline-block;
}


.image-container:hover .overlay {
    opacity: 1;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.overlay-button {
    background-color: #3498db;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 0 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.overlay-button:hover {
    background-color: #2980b9;
}


</style>