<template>
    <div>
        <h1>Newsletter</h1>
        <div id="load-bar" class="mt-5 d-none">
            <div class="d-flex justify-content-center">
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
            <div class="load-porcent text-center">{{ load }} %</div>
        </div>
        <div id="success" class="mt-5 d-none">
            <div class="m-auto mb-2" style="width:50px;">
                <img loading="lazy" src="@/static/payment/success.webp" alt="success.webp">
            </div>
            <p class="text-center">Se ha enviado correctamente</p>
        </div>
        <button id="send-newsletter" @click.prevent="sendNewsletter" class="btn btn-primary rounded-0 mt-5">Enviar ahora</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            load: 0,
        }
    },

    methods: {
        async sendNewsletter() {
            const config = {
                onUploadProgress: progressEvent => {
                const percent = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
                this.load = percent;
                }
            };
            
            try {
                document.getElementById('load-bar').classList.remove('d-none');
                document.getElementById('send-newsletter').classList.add('d-none');
                await this.$axios.post('api/send-newsletter', {token: 'e5QVTEe-@j$beR5W7=r_zAt3'}, config)
                .then(response => {
                    document.getElementById('load-bar').classList.add('d-none');
                    document.getElementById('success').classList.remove('d-none');
                })
            } catch (error) {
                console.error(error);
            }
        }
    }
}

</script>

<style lang="scss">
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid rgb(0, 0, 0);
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: rgb(59, 59, 59) transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
    }
}
</style>