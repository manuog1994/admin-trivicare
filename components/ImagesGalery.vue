<template>
    <div class="container-fluid mt-5 mt-5">
        <swiper :options="swiperOption" ref="mySwiper" class="swiper-container">
            <swiper-slide v-for="(image, index) in images" :key="index">
                <img @click.prevent="copyImage(image.url)" :src="baseUrl + '/' + image.url" alt="" class="img-fluid">
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
        }
    },
}
</script>

<style>
.galery-horizontal {
    display: flex;
    justify-content: space-around;
    overflow: auto;
}

.swiper-container {
    width: 100%;
    height: 45vh;
}
</style>