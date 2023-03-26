<template>
    <div class="offcanvas-mobile-menu-wrapper">
        <div class="mobile-menu-overlay" @click="$emit('toggleAsideMenu')"></div>
        <div class="mobile-menu-inner">
            <button class="close-btn" @click="$emit('toggleAsideMenu')" title="Cerrar">
                <i class="pe-7s-close"></i>
            </button>
            <div class="mobile-menu-inner-wrapper">
            <div class="offcanvas-body-inner">
                <div class="menu-navigation">
                    <ResponsiveMobileMenu />
                </div>
                <!-- <div class="offcanvas-tools">
                    <div class="same-language-currency">
                        <span>Selecciona el Lenguaje</span>
                        <select name="language">
                            <option value="spanish">Español</option>
                            <option value="english">English</option>
                            <option value="hindi">Hindi</option>
                        </select>
                    </div>
                    <div class="same-language-currency">
                        <span>Selecciona la Moneda</span>
                        <select name="currency">
                            <option value="eur">EUR</option>
                            <option value="usd">USD</option>
                            <option value="rup">Rup</option>
                        </select>
                    </div>
                </div>
                <div class="offcanvas-widget-area">
                    <ul>
                        <li>
                            <i class="fa fa-phone"></i>
                            <a href="callto:34616641849">+34616641849</a>
                        </li>
                        <li>
                            <i class="fa fa-envelope"></i>
                            <a href="mailto:info@trivicare.com">info@trivicare.com</a>
                        </li>
                    </ul>
                </div> -->
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            ResponsiveMobileMenu: () => import('@/components/ResponsiveMobileMenu'),
        },
    };
</script>