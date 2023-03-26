<template>
    <div>
        <!-- <div class="fixed-bottom bg-warning text-center p-3">
            <h2>La web se encuentra en mantenimiento. Vuelva más tarde</h2>
        </div> -->

        <footer class="footer-area bg-gray pt-5 d-none d-md-block">
            <div class="container-fluid ps-lg-5 pe-lg-5">
                <div class="row">
                    <div class="col-6">
                        <div class="footer-widget mb-30">
                            <div class="footer-title">
                                <h3>¿Quieres estar a la última?</h3>
                            </div>
                            <div class="subscribe-style">
                                <p>Recibe ofertas, descuentos y las últimas novedades.</p>
                                <div class="subscribe-form">
                                    <form class="mc-form" @submit.prevent="openNewsletterModal(email)" ref="form">
                                        <input type="email" required placeholder="  Introduce tu email..." name="email" v-model="email">
                                        <button id="subscribe" type="submit" class="button" name="subscribe" title="Suscribirse">
                                            <span>Suscríbeme</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="footer-widget mb-30 ml-75">
                            <div class="footer-title text-center">
                                <h3>Pago Seguro</h3>
                            </div>
                            <p class="text-center">Utilizamos seguridad SSL encriptada para asegurar que tus datos están 100% seguros.</p>
                            <div class="text-center">
                                <img class="ms-2" src="/payment/tarjetas.webp" alt="tarjetas.webp" width="100px" height="auto"/>
                                <img class="ms-2" src="/payment/bizum.webp" alt="bizum.webp" width="100px" height="auto"/>
                                <img class="ms-2" src="/payment/transfer_bank.webp" alt="transfer_bank.webp" width="80px" height="auto"/>
                                <img class="ms-2" src="/payment/paypal.svg" alt="paypal.svg" width="100px" height="auto"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="footer-widget mb-30 ml-75">
                            <div class="footer-title text-center">
                                <h3>Síguenos en las redes</h3>
                            </div>
                            <div class="footer-list d-flex justify-content-around">
                                <ul>
                                    <li><a href="https://www.facebook.com/trivicare" target="_blank" title="Facebook"><fa-icon icon="fa-brands fa-facebook-f" class="me-2" />Facebook</a></li>
                                    <li><a href="https://www.instagram.com/trivicare" target="_blank" title="Instagram"><fa-icon icon="fa-brands fa-instagram" class="me-2" />Instagram</a></li>
                                    <li><a href="https://www.tiktok.com/@trivicare" target="_blank" title="TikTok"><fa-icon icon="fa-brands fa-tiktok" class="me-2"/>TikTok</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="text-center footer-widget">
                            <div class="footer-title">
                                <h3>¿Tienes dudas sobre tu pedido? ¡Llámanos!</h3>
                            </div>
                            <p>De Lunes a Viernes de 10:00 AM a 20:00 PM</p>
                            <p>
                                <a href="tel:+34613036942" title="Teléfono">
                                    <i class="pe-7s-phone"></i>
                                    613 036 942
                                </a>
                            </p>
                            <p>
                                <a href="https://api.whatsapp.com/send/?phone=34613036942&text=Hola%2C+quisiera%20informaci%C3%B3n..." title="Whatsapp">
                                    <img src="/social/whatsapp.png" alt="whatsapp.png" width="90px" height="auto"/>
                                </a>
                            </p>
                            <p> 
                                <a href="mailto:info@trivicare.com" title="Email">
                                    <i class="pe-7s-mail"></i>
                                    info@trivicare.com
                                </a>
                            </p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="footer-widget mb-30 ml-30 text-center">
                            <div class="footer-title">
                                <h3>¿Quienes somos?</h3>
                            </div>
                            <div class="footer-list">
                                <ul>
                                    <li><n-link to="/about">Sobre nosotros</n-link></li>
                                    <li><n-link to="/contact">Puntos de venta</n-link></li>
                                    <li><n-link to="/contact">Contacto</n-link></li>
                                    <li><a @click="openSuggestionsModal">Buzón de Sugerencias</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="footer-widget mb-30 ml-50 text-center">
                            <div class="footer-title">
                                <h3>Nuestras políticas</h3>
                            </div>
                            <div class="footer-list">
                                <ul>
                                    <li><n-link to="/terms-conditions">Términos y Condiciones</n-link></li>
                                    <li><n-link to="/cookies-policy">Política de Cookies</n-link></li>
                                    <li><n-link to="/legal-warning">Aviso Legal y Protección de Datos</n-link></li>
                                    <li><n-link to="/questions">Preguntas Frecuentes</n-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="footer-widget mb-30 ml-50 text-center">
                            <div class="footer-title">
                                <h3>Mi cuenta</h3>
                            </div>
                            <div class="footer-list">
                                <ul>
                                    <li><n-link to="/my-account">Mi perfil</n-link></li>
                                    <li><n-link to="/my-orders">Mis pedidos</n-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid bg-dark mt-3">
                <div class="footer-widget text-center p-3">
                    <div class="footer-title">
                        <p class="text-light">© 2022 - {{ yearNow }} TriviCare Natural Cosmetics. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
        <footer class="d-md-none bg-gray">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="footer-widget mb-3 text-center">
                            <div class="footer-title mt-3">
                                <h3>¿Quieres recibir ofertas, descuentos y la últimas novedades?</h3>
                            </div>
                            <div class="subscribe-style">
                                <p class="fst-italic">Introduce tu correo electrónico y suscríbete a nuestro newsletter.</p>
                                <div class="subscribe-form">
                                    <form class="mc-form" @submit.prevent="openNewsletterModal(email)" ref="form">
                                        <input type="email" required placeholder="  Introduce tu email..." name="email" v-model="email">
                                        <button id="subscribeTwo" type="submit" class="button" name="subscribe" title="Suscribirse">
                                            <span>Suscríbeme</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <div class="text-center footer-widget mb-3 border-top">
                            <div class="footer-title mt-3">
                                <h3>Pago Seguro</h3>
                            </div>
                            <p>Utilizamos seguridad SSL encriptada para asegurar que tus datos están 100% seguros.</p>
                            <div>
                                <img class="ms-2" src="/payment/tarjetas.webp" alt="tarjetas.webp" width="100px" height="auto"/>
                                <img class="ms-2" src="/payment/bizum.webp" alt="bizum.webp" width="100px" height="auto"/>
                                <img class="ms-2" src="/payment/transfer_bank.webp" alt="transfer_bank.webp" width="80px" height="auto"/>
                                <img class="ms-2" src="/payment/paypal.svg" alt="paypal.svg" width="100px" height="auto"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <div class="text-center footer-widget mb-3 border-top">
                            <div class="footer-title mt-3">
                                <h3>¿Tienes dudas sobre tu pedido? ¡Llámanos!</h3>
                            </div>
                            <p>De Lunes a Viernes de 10:00 AM a 20:00 PM</p>
                            <p>
                                <a href="tel:+34613036942" title="Teléfono">
                                    <i class="pe-7s-phone"></i>
                                    613 036 942
                                </a>
                            </p>
                            <p>
                                <a href="https://api.whatsapp.com/send/?phone=34613036942&text=Hola%2C+quisiera%20informaci%C3%B3n..." title="Whatsapp">
                                    <img src="/social/whatsapp.png" alt="whatsapp.png" width="90px" height="auto"/>
                                </a>
                            </p>
                            <p> 
                                <a href="mailto:info@trivicare.com" title="Email">
                                    <i class="pe-7s-mail"></i>
                                    info@trivicare.com
                                </a>
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <div class="footer-widget mb-3 text-center border-top">
                            <div class="footer-title mt-3">
                                <h3>¿Quienes somos?</h3>
                            </div>
                            <div class="footer-list">
                                <ul>
                                    <li><n-link to="/about">Sobre nosotros</n-link></li>
                                    <li><n-link to="/contact">Puntos de venta</n-link></li>
                                    <li><n-link to="/contact">Contacto</n-link></li>
                                    <li><a @click="openSuggestionsModal">Buzón de Sugerencias</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <div class="footer-widget mb-3 text-center border-top">
                            <div class="footer-title mt-3">
                                <h3>Nuestras políticas</h3>
                            </div>
                            <div class="footer-list">
                                <ul>
                                    <li><n-link to="/terms-conditions">Términos y Condiciones</n-link></li>
                                    <li><n-link to="/cookies-policy">Política de Cookies</n-link></li>
                                    <li><n-link to="/legal-warning">Aviso Legal y Protección de Datos</n-link></li>
                                    <li><n-link to="/questions">Preguntas Frecuentes</n-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <div class="footer-widget mb-3 text-center border-top">
                            <div class="footer-title mt-3">
                                <h3>Síguenos en las redes</h3>
                            </div>
                            <div class="d-flex justify-content-evenly mt-2">
                                <a href="https://www.facebook.com/trivicare" target="_blank" title="Facebook"><fa-icon icon="fa-brands fa-facebook-f" class="fs-3" /></a>
                                <a href="https://www.instagram.com/trivicare" target="_blank" title="Instagram"><fa-icon icon="fa-brands fa-instagram" class="fs-3" /></a>
                                <a href="https://www.tiktok.com/@trivicare" target="_blank" title="TikTok"><fa-icon icon="fa-brands fa-tiktok" class="fs-3" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid bg-dark mt-3">
                <div class="footer-widget text-center p-3">
                    <div class="footer-title">
                        <p class="text-light">© 2022 - {{ yearNow }} TriviCare Natural Cosmetics. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
     </div>
</template>
<style lang="scss" scoped>

    .w-sm {
        margin: auto;
        width: 30rem;
    }

    @media only screen and (max-width: 575px) {
        .pt-100 {
            padding-top: 25px;
        }
    }

</style>
<script>
    export default {
        data() {
            return {
                email: '',
                yearNow: new Date().getFullYear()
            }
        },

        components: {
        },



        methods: {
            openSuggestionsModal() {
                this.$modal.show('suggestionsModal');
            },

            openNewsletterModal(email) {
                this.$modal.show('newsletterModal', { email: email });
            }
        }

    }
</script>